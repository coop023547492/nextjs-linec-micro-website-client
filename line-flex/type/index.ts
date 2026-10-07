import { z } from "zod";
import { depFlexSchema, inmFlexSchema, lonFlexSchema } from "../validators";

export type LoanFlexType = z.infer<typeof lonFlexSchema>;
export type DepFlexType = z.infer<typeof depFlexSchema>;
export type InmFlexType = z.infer<typeof inmFlexSchema>;
