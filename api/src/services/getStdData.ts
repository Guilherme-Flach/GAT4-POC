import { AddressRow, AddressSchema } from "../schemas/address";
import { PatientRow, PatientRowSchema } from "../schemas/sheet";
import { getRawSheetData } from "./sheets";

export type PatientRowWithAddress = PatientRow & AddressRow;

const STD_COLUMNS: (keyof typeof PatientRowSchema.shape)[] = [
  "lastUpdateDate",
  "cns",
  "hivRapidTestDone",
  "hivRapidTestResult",
  "hivLabConfirmation",
  "hivViralLoad",
  "cd4Count",
  "artStarted",
  "artStartDate",
  "syphilisRapidTestDone",
  "syphilisRapidTestResult",
  "syphilisRapidTestDate",
  "vdrlRequested",
  "vdrlResult",
  "syphilisType",
  "notification",
  "firstDoseDate",
  "secondDoseDate",
  "thirdDoseDate",
  "vdrlControlDone",
  "hbsagRapidTestDone",
  "hbsagRapidTestResult",
  "hepatitisBRapidTestDate",
  "antiHbsRequested",
  "antiHbsResult",
  "vaccinationStarted",
  "vaccineFirstDoseDate",
  "vaccineSecondDoseDate",
  "vaccineThirdDoseDate",
];

const parseStdRow = (row: string[]): PatientRow => {
  const raw = Object.fromEntries(
    STD_COLUMNS.map((key, i) => [key, row[i] ?? null]),
  );
  return PatientRowSchema.parse(raw);
};

const parseAddressRow = (row: string[]): AddressRow => {
  return AddressSchema.parse({
    cns: row[2],
    street: row[5] ?? null,
    streetNumber: row[6] ?? null,
    complement: row[7] ?? null,
  });
};

const buildAddressLookup = async (
  sheetName: string,
): Promise<Map<string, AddressRow>> => {
  const [, ...rows] = await getRawSheetData(sheetName); // discard header row

  const lookup = new Map<string, AddressRow>();
  for (const row of rows) {
    const address = parseAddressRow(row);
    lookup.set(address.cns, address);
  }

  return lookup;
};

const stdSheetName = "STD_Sheet";
const addressSheetName = "ADDRESS_Sheet";

export const getStdData = async (
  rowCount = 10,
): Promise<PatientRowWithAddress[]> => {
  const [stdValues, addressLookup] = await Promise.all([
    getRawSheetData(`${stdSheetName}!3:${3 + rowCount}`),
    buildAddressLookup(addressSheetName),
  ]);

  const [, ...rows] = stdValues; // discard header row

  return rows.map((row) => {
    const patient = parseStdRow(row);
    const address = addressLookup.get(patient.cns) ?? {
      cns: patient.cns,
      street: null,
      streetNumber: null,
      complement: null,
    };
    return { ...patient, ...address };
  });
};
