"use server";

import { TContactSchema, contactSchema } from "../lib/types";

export const contactUs = async (data: TContactSchema) => {
  console.log("Submitting");

  console.log("Contacting the server", data);

  // This is probably not required in the server side using server actions given our TContactSchema is required type
  // This would be more realistic for use in an API where the request data is unknown
  const result = contactSchema.safeParse(data);
  let zodErrors = {};
  if (!result.success) {
    result.error.issues.forEach((issue) => {
      zodErrors = { ...zodErrors, [issue.path[0]]: issue.message };
    });
  }
  return Object.keys(zodErrors).length > 0
    ? { errors: zodErrors }
    : { success: true };
};
