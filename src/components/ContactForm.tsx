"use client";
import { ChevronRight, Loader2 } from "lucide-react";
import React, { useEffect } from "react";
import { Label } from "./ui/label";
import { Input } from "./ui/ace-input";
import { Textarea } from "./ui/ace-textarea";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import { config } from "@/data/config";
import { useToast } from "./ui/use-toast";

const ContactForm = () => {
  const [loading, setLoading] = React.useState(false);
  const [redirectUrl, setRedirectUrl] = React.useState("");
  const { toast } = useToast();

  // Set redirect URL on client side
  useEffect(() => {
    if (typeof window !== "undefined") {
      setRedirectUrl(`${window.location.origin}/?success=true`);
    }
  }, []);

  // Show success message if redirected from FormSubmit
  useEffect(() => {
    if (typeof window !== "undefined") {
      const urlParams = new URLSearchParams(window.location.search);
      if (urlParams.get("success") === "true") {
        toast({
          title: "Thank you!",
          description: "I'll get back to you as soon as possible.",
          variant: "default",
          className: cn("top-0 mx-auto flex fixed md:top-4 md:right-4"),
        });
        // Clean up URL
        window.history.replaceState({}, "", window.location.pathname);
      }
    }
  }, [toast]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    setLoading(true);
    // FormSubmit will handle the submission and redirect
    // The form will submit normally to FormSubmit.co
  };

  return (
    <form
      className="min-w-7xl mx-auto sm:mt-4"
      action={`https://formsubmit.co/${config.email}`}
      method="POST"
      onSubmit={handleSubmit}
    >
      {/* FormSubmit hidden inputs */}
      <input type="hidden" name="_subject" value="New Contact Form Message from Portfolio" />
      <input type="hidden" name="_captcha" value="false" />
      {redirectUrl && <input type="hidden" name="_next" value={redirectUrl} />}
      <input type="hidden" name="_template" value="box" />
      <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
        <LabelInputContainer>
          <Label htmlFor="name">Full name</Label>
          <Input
            id="name"
            name="name"
            placeholder="Your Name"
            type="text"
            required
          />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="email">Email Address</Label>
          <Input
            id="email"
            name="email"
            placeholder="you@example.com"
            type="email"
            required
          />
        </LabelInputContainer>
      </div>
      <div className="grid w-full gap-1.5 mb-4">
        <Label htmlFor="message">Your Message</Label>
        <Textarea
          id="message"
          name="message"
          placeholder="Tell me about your project, or just say hi!"
          required
        />
        <p className="text-sm text-muted-foreground">
          I&apos;ll never share your data with anyone else. Pinky promise!
        </p>
      </div>
      <Button
        disabled={loading}
        className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
        type="submit"
      >
        {loading ? (
          <div className="flex items-center justify-center">
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            <p>Please wait</p>
          </div>
        ) : (
          <div className="flex items-center justify-center">
            Send Message <ChevronRight className="w-4 h-4 ml-4" />
          </div>
        )}
        <BottomGradient />
      </Button>
    </form>
  );
};

export default ContactForm;

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-brand to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent orange-400 to-transparent" />
    </>
  );
};
