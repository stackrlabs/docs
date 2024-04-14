const tryParse = (value: string): string | null => {
  try {
    return JSON.parse(value);
  } catch {
    return value;
  }
};

export const getLocalStorageItem = (key: string): string => {
  if (typeof window !== "undefined") {
    const stored = localStorage.getItem(key);
    if (stored !== null) {
      return tryParse(stored) || "";
    }
  }
  return "";
};

export const updateLocalStorageItem = (key: string, value: string): void => {
  if (typeof window !== "undefined") {
    localStorage.setItem(key, JSON.stringify(value));
  }
};
