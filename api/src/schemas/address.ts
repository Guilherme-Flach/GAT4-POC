import { z } from "zod";

const optStr = z.string().nullable().transform((v) => v === "" ? null : v);

export const AddressSchema = z.object({
  cns: z.string(),      // CNS
  street: optStr,       // Rua
  streetNumber: optStr, // Número
  complement: optStr,   // Complemento
});

export type AddressRow = z.infer<typeof AddressSchema>;
