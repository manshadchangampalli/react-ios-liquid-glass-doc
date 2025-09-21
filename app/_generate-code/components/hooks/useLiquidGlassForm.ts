import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { liquidGlassSchema, LiquidGlassFormData } from "../../schemas/liquidGlassSchema";
import { LiquidGlassConfig } from "../../types";
import { useEffect, useState } from "react";

const defaultValues: LiquidGlassFormData = {
  width: "400px",
  height: "300px",
  borderRadius: "20px",
  blur: "5px",
  brightness: "1",
  padding: "20px",
};

export const useLiquidGlassForm = (initialConfig?: Partial<LiquidGlassConfig>) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const form = useForm<LiquidGlassFormData>({
    resolver: zodResolver(liquidGlassSchema),
    defaultValues: initialConfig ? { ...defaultValues, ...initialConfig } : defaultValues,
    mode: "onChange",
  });

  const {
    watch,
    formState: { errors, isValid },
  } = form;

  // Watch all form values for real-time updates
  const watchedValues = watch();

  // Convert form data to LiquidGlassConfig with fallbacks
  const config: LiquidGlassConfig = {
    width: watchedValues?.width || defaultValues.width,
    height: watchedValues?.height || defaultValues.height,
    borderRadius: watchedValues?.borderRadius || defaultValues.borderRadius,
    blur: watchedValues?.blur || defaultValues.blur,
    brightness: watchedValues?.brightness || defaultValues.brightness,
    padding: watchedValues?.padding || defaultValues.padding,
  };

  return {
    form: isClient ? form : null,
    config,
    errors: isClient ? errors : {},
    isValid: isClient ? isValid : true,
  };
};
