import { stringToDate } from "./dates.utils";

export const isEmptySpace = (string: string): boolean => {
  return string.replaceAll(' ', '').length == 0;
}

export const isValidInputSearch = (input: string): boolean => {
  return (Boolean(input) && !isEmptySpace(input));
};

export const toMoneyFormat = (value: string | number) => {
  if (!value) return '';

  if (typeof value == 'string') {
    value = Number(value);
  }

  return value.toLocaleString('en-US', { style: 'currency', currency: 'USD' })
}

export const objectLength = (obj: object): number => Object.keys(obj).length;

export const capitalizeString = (str: string): string => {
  const strTrim = str.trim();
  let arrStr = strTrim.split(' ');

  arrStr = arrStr.map(currStr => currStr[0].toUpperCase() + currStr.slice(1).toLowerCase())

  return arrStr.join(' ');
}