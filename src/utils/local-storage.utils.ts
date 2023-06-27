export const getLocalStorage = (item: string) => {
  return localStorage.getItem(item) ?? '';
}

export const setLocalStorage = (key: string, value: any) => {
  localStorage.setItem(key, JSON.stringify(value)); 
}

export const removeLocalStorage = (item: string) => {
  return localStorage.removeItem(item);
}

