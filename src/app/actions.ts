
"use server";

import { z } from "zod";

const formSchema = z.object({
  fullName: z.string().min(2, {
    message: "Full name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  phone: z.string().min(10, {
    message: "Phone number must be at least 10 digits.",
  }),
  subject: z.string().min(3, {
    message: "Subject must be at least 3 characters.",
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
});

export async function submitEnquiry(data: z.infer<typeof formSchema>) {
  const result = formSchema.safeParse(data);

  if (!result.success) {
    return {
      success: false,
      error: result.error.flatten().fieldErrors,
    };
  }

  try {
    const { fullName, email, phone, subject, message } = result.data;
    await resend.emails.send({
      from: 'onboarding@resend.dev', // This must be a verified domain in Resend
      to: 'saikrishnacharan108@gmail.com', // Replace with your email address
      subject: `New Enquiry from ${fullName}: ${subject}`,
      html: `<p>You have a new enquiry from:</p>
             <p><strong>Name:</strong> ${fullName}</p>
             <p><strong>Email:</strong> ${email}</p>
             <p><strong>Phone:</strong> ${phone}</p>
             <p><strong>Message:</strong></p>
             <p>${message}</p>`,
    });

    return {
      success: true,
      message: "Form successfully submitted. We will get back to you soon.",
    };
  } catch (error) {
    console.error("Error sending email:", error);
    return {
      success: false,
      message: "Something went wrong. Please try again.",
    };
  }
}
