"use server";

import { loginFormSchema, LoginFormValues } from "@/lib/login-form.schema";

export const greetingsAction = async (values: LoginFormValues) => {
  try {
    const { data, success } = loginFormSchema.safeParse(values);

    if (!success) {
      return {
        success: false,
        errorMessage: "Invalid data.",
      };
    }

    return {
      success: true,
      data: data.username,
    };
  } catch (error) {
    console.error(error);

    return {
      success: false,
      errorMessage: "An error occurred.",
    };
  }
};
