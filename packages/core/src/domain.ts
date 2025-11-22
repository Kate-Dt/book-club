import { z } from "zod";

export const ClubLanguages = z.enum(["uk", "en", "de", "fr"]);
export const ClubSchema = z.object({
  id: z.string(),
  name: z.string(),
  languages: z.array(ClubLanguages),
  hosts: z.array(z.string()),
  membersCount: z.number().int().nonnegative(),
});

export type Club = z.infer<typeof ClubSchema>;
