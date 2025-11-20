export type StoreHoursEntry = {
  id: string;
  shortLabel: string;
  fullLabel: string;
  hours: string;
  dayOfWeek: string | string[];
  opens: string;
  closes: string;
};

export const STORE_HOURS: StoreHoursEntry[] = [
  {
    id: "mon-thu",
    shortLabel: "Mon–Thu",
    fullLabel: "Mon–Thu",
    hours: "10:00am – 10:00pm",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday"],
    opens: "10:00",
    closes: "22:00",
  },
  {
    id: "fri-sat",
    shortLabel: "Fri–Sat",
    fullLabel: "Fri–Sat",
    hours: "10:00am – 11:00pm",
    dayOfWeek: ["Friday", "Saturday"],
    opens: "10:00",
    closes: "23:00",
  },
  {
    id: "sun",
    shortLabel: "Sun",
    fullLabel: "Sunday",
    hours: "10:00am – 9:00pm",
    dayOfWeek: ["Sunday"],
    opens: "10:00",
    closes: "21:00",
  },
];
