import { Router } from "express";
import { z } from "zod";
import { rateLimit } from "../middleware/rateLimit.js";

const contactSchema = z.object({
  name: z.string().trim().min(2).max(80),
  email: z.string().trim().email().max(120),
  company: z.string().trim().max(120).optional().or(z.literal("")),
  budget: z.enum(["under-25k", "25k-75k", "75k-150k", "150k-plus", "undecided"]).optional(),
  message: z.string().trim().min(10).max(2000),
  website: z.string().max(200).optional().default(""),
});

const submissions = [];

export const contactRouter = Router();

contactRouter.post("/", rateLimit({ windowMs: 60_000, max: 8 }), (req, res) => {
  const parsed = contactSchema.safeParse(req.body);

  if (!parsed.success) {
    return res.status(400).json({
      ok: false,
      error: "Please check your details and try again.",
      details: parsed.error.flatten(),
    });
  }

  if (parsed.data.website) {
    return res.status(201).json({
      ok: true,
      message: "Thank you. Our team will respond within one business day.",
      id: `nx-ignored-${Date.now()}`,
    });
  }

  const { website: _honeypot, ...payload } = parsed.data;

  const entry = {
    id: `nx-${Date.now()}`,
    ...payload,
    receivedAt: new Date().toISOString(),
  };

  submissions.unshift(entry);
  if (submissions.length > 100) submissions.pop();

  console.log("[contact]", entry.email, entry.name);

  return res.status(201).json({
    ok: true,
    message: "Thank you. Our team will respond within one business day.",
    id: entry.id,
  });
});
