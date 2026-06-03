import { z } from 'zod'

// Output schema — represents what the API returns after all transforms.
// No raw-data coercion here; that lives in the API's internal schemas.
export const PatientRowWithAddressSchema = z.object({
  // Patient fields
  lastUpdateDate: z.string().nullable(),
  cns: z.string(),
  hivRapidTestDone: z.boolean().nullable(),
  hivRapidTestResult: z.string().nullable(),
  hivLabConfirmation: z.string().nullable(),
  hivViralLoad: z.string().nullable(),
  cd4Count: z.string().nullable(),
  artStarted: z.boolean().nullable(),
  artStartDate: z.string().nullable(),
  syphilisRapidTestDone: z.boolean().nullable(),
  syphilisRapidTestResult: z.string().nullable(),
  syphilisRapidTestDate: z.string().nullable(),
  vdrlRequested: z.boolean().nullable(),
  vdrlResult: z.string().nullable(),
  syphilisType: z.string().nullable(),
  notification: z.string().nullable(),
  firstDoseDate: z.string().nullable(),
  secondDoseDate: z.string().nullable(),
  thirdDoseDate: z.string().nullable(),
  vdrlControlDone: z.boolean().nullable(),
  hbsagRapidTestDone: z.boolean().nullable(),
  hbsagRapidTestResult: z.string().nullable(),
  hepatitisBRapidTestDate: z.string().nullable(),
  antiHbsRequested: z.boolean().nullable(),
  antiHbsResult: z.string().nullable(),
  vaccinationStarted: z.boolean().nullable(),
  vaccineFirstDoseDate: z.string().nullable(),
  vaccineSecondDoseDate: z.string().nullable(),
  vaccineThirdDoseDate: z.string().nullable(),
  // Address fields
  street: z.string().nullable(),
  streetNumber: z.string().nullable(),
  complement: z.string().nullable(),
  // Geocoding
  lat: z.number().nullable(),
  lon: z.number().nullable(),
})

export type PatientRowWithAddress = z.infer<typeof PatientRowWithAddressSchema>

export const GetStdDataResponseSchema = z.object({
  data: z.array(PatientRowWithAddressSchema),
})

export type GetStdDataResponse = z.infer<typeof GetStdDataResponseSchema>
