import { z } from "zod";

// Empty strings from the Sheets API are coerced to null
const optStr = z.string().nullable().transform((v) => v === "" ? null : v);
const boolStr = z.string().nullable().transform((v) => {
  if (v === null || v === "") return null;
  return v === "TRUE";
});

export const PatientRowSchema = z.object({
  lastUpdateDate: optStr,          // DATA ULTIMA ATUALIZAção
  cns: z.string(),                 // CNS
  hivRapidTestDone: boolStr,       // TR HIV realizado?
  hivRapidTestResult: optStr,      // Resultado TR HIV
  hivLabConfirmation: optStr,      // Confirmação laboratorial HIV
  hivViralLoad: optStr,            // Carga viral HIV
  cd4Count: optStr,                // CD4
  artStarted: boolStr,             // TARV iniciado?
  artStartDate: optStr,            // Data início TARV
  syphilisRapidTestDone: boolStr,  // TR Sífilis realizado?
  syphilisRapidTestResult: optStr, // Resultado TR Sífilis
  syphilisRapidTestDate: optStr,   // Data TR Sífilis
  vdrlRequested: boolStr,          // VDRL solicitado?
  vdrlResult: optStr,              // Resultado VDRL
  syphilisType: optStr,            // Tipo de sífilis
  notification: optStr,            // NOTIFICAÇÃO
  firstDoseDate: optStr,           // DATA 1º DOSE
  secondDoseDate: optStr,          // DATA 2º DOSE
  thirdDoseDate: optStr,           // DATA 3º DOSE
  vdrlControlDone: boolStr,        // VDRL controle realizado?
  hbsagRapidTestDone: boolStr,     // TR HBsAg realizado?
  hbsagRapidTestResult: optStr,    // Resultado TR HBsAg
  hepatitisBRapidTestDate: optStr, // Data TR Hepatite B
  antiHbsRequested: boolStr,       // Anti-HBs solicitado?
  antiHbsResult: optStr,           // Resultado Anti-HBs
  vaccinationStarted: boolStr,     // Vacinação iniciada?
  vaccineFirstDoseDate: optStr,    // Data 1ª dose vacina
  vaccineSecondDoseDate: optStr,   // Data 2ª dose vacina
  vaccineThirdDoseDate: optStr,    // Data 3ª dose vacina
});

export type PatientRow = z.infer<typeof PatientRowSchema>;
