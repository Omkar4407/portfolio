import { config } from "@/data/config";
import { Resend } from "resend";
import { z } from "zod";

const resend = new Resend(process.env.RESEND_API_KEY);

const Email = z.object({
  fullName: z.string().min(2, "Full name is invalid!"),
  email: z.string().email({ message: "Email is invalid!" }),
  message: z.string().min(10, "Message is too short!"),
});
export async function POST(req: Request) {
  try {
    // Check if RESEND_API_KEY is set
    if (!process.env.RESEND_API_KEY) {
      console.error("RESEND_API_KEY is not set in environment variables");
      return Response.json(
        { 
          error: "Email service is not configured. Please set RESEND_API_KEY in your environment variables." 
        },
        { status: 500 }
      );
    }

    let body;
    try {
      body = await req.json();
      console.log("Contact form submission:", body);
    } catch (parseError) {
      console.error("Error parsing request body:", parseError);
      return Response.json(
        { error: "Invalid request format. Please check your form data." },
        { status: 400 }
      );
    }
    
    const {
      success: zodSuccess,
      data: zodData,
      error: zodError,
    } = Email.safeParse(body);
    
    if (!zodSuccess) {
      console.error("Validation error:", zodError);
      return Response.json(
        { error: zodError?.issues?.[0]?.message || "Invalid form data" },
        { status: 400 }
      );
    }

    // Validate email format
    if (!config.email || !config.email.includes("@")) {
      console.error("Invalid recipient email in config:", config.email);
      return Response.json(
        { error: "Email configuration error. Please check your email settings." },
        { status: 500 }
      );
    }

    // Create email content
    const emailHtml = `
      <div style="font-family: Arial, sans-serif; padding: 20px; max-width: 600px;">
        <h1 style="color: #333; margin-bottom: 20px;">New Contact Form Message</h1>
        <div style="margin-bottom: 15px;">
          <strong>From:</strong> ${zodData.fullName}
        </div>
        <div style="margin-bottom: 15px;">
          <strong>Email:</strong> ${zodData.email}
        </div>
        <div style="margin-top: 20px; padding: 15px; background-color: #f5f5f5; border-radius: 5px;">
          <strong>Message:</strong>
          <p style="margin-top: 10px; white-space: pre-wrap;">${zodData.message.replace(/\n/g, '<br>')}</p>
        </div>
      </div>
    `;

    const emailText = `
New Contact Form Message

From: ${zodData.fullName}
Email: ${zodData.email}

Message:
${zodData.message}
    `.trim();

    let resendData, resendError;
    try {
      const result = await resend.emails.send({
        from: "Portfolio Contact <onboarding@resend.dev>",
        to: [config.email],
        subject: `New Contact Form Message from ${zodData.fullName}`,
        replyTo: zodData.email,
        html: emailHtml,
        text: emailText,
      });
      resendData = result.data;
      resendError = result.error;
    } catch (sendError: any) {
      console.error("Error sending email:", sendError);
      return Response.json(
        { 
          error: sendError?.message || "Failed to send email. Please try again later.",
          details: String(sendError)
        },
        { status: 500 }
      );
    }

    if (resendError) {
      console.error("Resend API error:", JSON.stringify(resendError, null, 2));
      
      // Provide more helpful error messages based on Resend error types
      let errorMessage = "Failed to send email. Please try again later.";
      
      if (typeof resendError === "object" && resendError !== null) {
        if ("message" in resendError && typeof resendError.message === "string") {
          errorMessage = resendError.message;
        } else if (Array.isArray(resendError)) {
          errorMessage = resendError.map((e: any) => e?.message || String(e)).join(", ");
        } else {
          errorMessage = JSON.stringify(resendError);
        }
      } else if (typeof resendError === "string") {
        errorMessage = resendError;
      }
      
      return Response.json(
        { 
          error: errorMessage,
          details: resendError
        },
        { status: 500 }
      );
    }

    console.log("Email sent successfully:", resendData);
    return Response.json({ success: true, data: resendData });
  } catch (error: any) {
    console.error("Unexpected error:", error);
    return Response.json(
      { 
        error: error?.message || "An unexpected error occurred. Please try again later." 
      },
      { status: 500 }
    );
  }
}
