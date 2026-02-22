"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Loader2 } from "lucide-react";

const CONTACT_EMAIL = "sam@footprints2africa.org.uk";

const contactSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  organisation: z.string().optional(),
  position: z.string().optional(),
  email: z.string().email("Please enter a valid email address"),
  message: z.string().min(10, "Please provide a message (at least 10 characters)"),
});

type ContactFormValues = z.infer<typeof contactSchema>;

function buildMailtoUrl(values: ContactFormValues): string {
  const orgPart = values.organisation ? ` (${values.organisation})` : "";
  const subject = encodeURIComponent(
    `Contact from ${values.firstName} ${values.lastName}${orgPart}`
  );
  let body = `Name: ${values.firstName} ${values.lastName}\nEmail: ${values.email}\n`;
  if (values.organisation) body += `Organisation: ${values.organisation}\n`;
  if (values.position) body += `Position: ${values.position}\n`;
  body += `\nMessage:\n${values.message}`;
  return `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${encodeURIComponent(body)}`;
}

export function ContactForm() {
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      organisation: "",
      position: "",
      email: "",
      message: "",
    },
  });

  async function onSubmit(values: ContactFormValues) {
    setSubmitStatus("idle");
    setErrorMessage("");

    try {
      const mailtoUrl = buildMailtoUrl(values);
      await new Promise((resolve) => setTimeout(resolve, 100));
      window.location.href = mailtoUrl;
      setSubmitStatus("success");
      form.reset();
    } catch {
      setSubmitStatus("error");
      setErrorMessage("Could not open email client. Please email us directly.");
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-6"
      >
        {submitStatus === "success" && (
          <div
            role="alert"
            className="p-4 rounded-lg bg-brand-green/30 border border-brand-green/50 text-gray-900"
          >
            <p className="font-medium">Thank you for your message.</p>
            <p className="text-sm mt-1">
              Your email client should open with your message pre-filled. Please
              click Send to complete your enquiry. We&apos;ll respond as soon as we can.
            </p>
          </div>
        )}

        {submitStatus === "error" && (
          <div
            role="alert"
            className="p-4 rounded-lg bg-brand-red/10 border border-brand-red/30 text-brand-red"
          >
            <p className="font-medium">{errorMessage}</p>
            <p className="text-sm mt-1">
              You can also email us directly at{" "}
              <a
                href="mailto:sam@footprints2africa.org.uk"
                className="underline hover:no-underline"
              >
                sam@footprints2africa.org.uk
              </a>
            </p>
          </div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="firstName"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-gray-700">
                  First name <span className="text-brand-red">*</span>
                </FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    placeholder="Your first name"
                    className="border-gray-200 focus-visible:ring-brand-navy"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="lastName"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-gray-700">
                  Last name <span className="text-brand-red">*</span>
                </FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    placeholder="Your last name"
                    className="border-gray-200 focus-visible:ring-brand-navy"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="organisation"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-gray-700">Organisation</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    placeholder="Your organisation"
                    className="border-gray-200 focus-visible:ring-brand-navy"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="position"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-gray-700">Position</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    placeholder="Your role or position"
                    className="border-gray-200 focus-visible:ring-brand-navy"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-gray-700">
                Email <span className="text-brand-red">*</span>
              </FormLabel>
              <FormControl>
                <Input
                  {...field}
                  type="email"
                  placeholder="you@example.com"
                  className="border-gray-200 focus-visible:ring-brand-navy"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-gray-700">
                Message <span className="text-brand-red">*</span>
              </FormLabel>
              <FormControl>
                <Textarea
                  {...field}
                  placeholder="How can we help? Tell us about your enquiry..."
                  rows={5}
                  className="border-gray-200 focus-visible:ring-brand-navy min-h-[120px]"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button
          type="submit"
          variant="brand"
          size="cta-lg"
          className="w-full sm:w-auto"
          disabled={form.formState.isSubmitting}
        >
            {form.formState.isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Opening...
              </>
            ) : (
              "Send message"
            )}
        </Button>
      </form>
    </Form>
  );
}
