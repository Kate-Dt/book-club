import { z } from "zod";

// -------- Club --------
export const ClubLanguages = z.enum(["uk", "en", "de", "fr"]);
export const ClubSchema = z.object({
  id: z.string(),
  name: z.string(),
  languages: z.array(ClubLanguages),
  hosts: z.array(z.string()),
  membersCount: z.number().int().nonnegative(),
});

export type Club = z.infer<typeof ClubSchema>;

// -------- User --------
export const UserSchema = z.object({
  id: z.string(),
  displayName: z.string().min(1),
  photoUrl: z.string().url().optional(),
  bio: z.string().optional(),
  languages: z.array(ClubLanguages).min(1),
});
export type User = z.infer<typeof UserSchema>;


// -------- Member --------
export const MemberSchema = z.object({
  userId: z.string(),
  joinedAt: z.date(),
  role: z.enum(["host", "moderator", "member"]).default("member"),
});
export type Member = z.infer<typeof MemberSchema>;