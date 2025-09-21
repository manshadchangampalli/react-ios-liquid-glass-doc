import { z } from "zod";

export const liquidGlassSchema = z.object({
  width: z
    .string()
    .min(1, "Width is required")
    .regex(/^\d+(px|%|vh|vw|rem|em)$/, "Width must be a valid CSS unit (px, %, vh, vw, rem, em)"),
  height: z
    .string()
    .min(1, "Height is required")
    .regex(/^\d+(px|%|vh|vw|rem|em)$/, "Height must be a valid CSS unit (px, %, vh, vw, rem, em)"),
  borderRadius: z
    .string()
    .min(1, "Border radius is required")
    .regex(/^\d+(px|%|rem|em)$/, "Border radius must be a valid CSS unit (px, %, rem, em)"),
  blur: z
    .string()
    .min(1, "Blur is required")
    .regex(/^\d+(px|rem|em)$/, "Blur must be a valid CSS unit (px, rem, em)"),
  brightness: z
    .string()
    .min(1, "Brightness is required")
    .regex(/^\d+(\.\d+)?$/, "Brightness must be a valid number")
    .refine((val) => {
      const num = parseFloat(val);
      return num >= 0.1 && num <= 3.0;
    }, "Brightness must be between 0.1 and 3.0"),
  padding: z
    .string()
    .min(1, "Padding is required")
    .regex(/^\d+(px|%|rem|em)$/, "Padding must be a valid CSS unit (px, %, rem, em)"),
});

export type LiquidGlassFormData = z.infer<typeof liquidGlassSchema>;
