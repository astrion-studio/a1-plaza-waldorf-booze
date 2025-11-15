export const STORE_NAME = "A1 Plaza Liquors & Wines";
export const STORE_ADDRESS = "3215 Plaza Way, Waldorf, MD 20603";
export const PHONE_NUMBER_RAW = "+12406072336";
export const PHONE_NUMBER_DISPLAY = "(240) 607-2336";

export const STORE_HOURS = [
  { days: "Mon–Thu", hours: "10:00am – 10:00pm" },
  { days: "Fri–Sat", hours: "10:00am – 11:00pm" },
  { days: "Sun", hours: "11:00am – 9:00pm" },
] as const;

const GOOGLE_MAPS_QUERY = `${STORE_NAME} ${STORE_ADDRESS}`;
export const GOOGLE_MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(GOOGLE_MAPS_QUERY)}`;
