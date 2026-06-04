import * as React from "react";

interface EmailTemplateProps {
  fullName: string;
  email: string;
  message: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  fullName,
  email,
  message,
}) => (
  <div style={{ fontFamily: "Arial, sans-serif", padding: "20px", maxWidth: "600px" }}>
    <h1 style={{ color: "#333", marginBottom: "20px" }}>New Contact Form Message</h1>
    <div style={{ marginBottom: "15px" }}>
      <strong>From:</strong> {fullName}
    </div>
    <div style={{ marginBottom: "15px" }}>
      <strong>Email:</strong> {email}
    </div>
    <div style={{ marginTop: "20px", padding: "15px", backgroundColor: "#f5f5f5", borderRadius: "5px" }}>
      <strong>Message:</strong>
      <p style={{ marginTop: "10px", whiteSpace: "pre-wrap" }}>{message}</p>
    </div>
  </div>
);
