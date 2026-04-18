import { Password } from "@convex-dev/auth/providers/Password";
import { convexAuth } from "@convex-dev/auth/server";
import { v } from "convex/values";

export const { auth, signIn, signOut, storeToLocalStorage } = convexAuth({
  providers: [
    Password({
      profile(params) {
        return {
          email: params.email as string,
          name: params.name as string,
          username: params.username as string,
          role: params.role as "admin" | "student",
          grade: params.grade as string,
          passwordChangeRequired: params.passwordChangeRequired as boolean,
        };
      },
    }),
  ],
});
