export const STORE_PHONE_NUMBER = "+12406072336";
export const STORE_PHONE_DISPLAY = "(240) 607-2336";
export const STORE_PHONE_URI = `tel:${STORE_PHONE_NUMBER}`;

export const dialStorePhone = () => {
  if (typeof window !== "undefined") {
    window.location.href = STORE_PHONE_URI;
  }
};
