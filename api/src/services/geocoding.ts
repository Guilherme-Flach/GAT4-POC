export type Coords = {
  lat: number;
  lon: number;
};

type NominatimResult = {
  lat: string;
  lon: string;
};

export const geocodeAddress = async (
  street: string,
  streetNumber: string,
): Promise<Coords | null> => {
  const nominatimUrl = process.env.NOMINATIM_URL;

  if (!nominatimUrl) {
    throw new Error("Missing NOMINATIM_URL");
  }

  const streetParam = encodeURIComponent(`${streetNumber} ${street}`);
  const url = `${nominatimUrl}/search?street=${streetParam}&city=Porto+Alegre&format=json&limit=1&countrycodes=br`;

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`Nominatim request failed: ${response.status}`);
  }

  const results = (await response.json()) as NominatimResult[];

  if (results.length === 0) return null;

  return {
    lat: parseFloat(results[0].lat),
    lon: parseFloat(results[0].lon),
  };
};
