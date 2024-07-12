import { z } from "zod";

export const contactSchema = z.object({
  firstName: z.string().min(1, "This field is required"),
  lastName: z.string().min(1, "This field is required"),
  email: z.string().email({ message: "Please enter a valid email address" }),
  query: z.enum(["General Enquiry", "Support Request"], {
    message: "Please select a query type",
  }),
  message: z.string().min(1, "This field is required"),
  terms: z
    .boolean()
    .refine(
      (value) => value === true,
      "To submit this form, please consent to being contacted"
    ),
});

export type TContactSchema = z.infer<typeof contactSchema>;
