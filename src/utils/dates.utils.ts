export const getCurrentDateString = () => new Date(Date.now()).toISOString();

export const dateToString = (date: Date): string => `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;

export const stringToDate = (stringDate: string): Date => {
  const date = stringDate.split('/');
  return new Date(`${date[1]}/${date[0]}/${date[2]}`); // Mes/Dia/Año porque así lo pide la instancia de Date
};

export const stringToSQLDate = (stringDate: string): string => {
  const date = stringDate.split('/');

  const day = date[0].length < 2 ? `0${date[0]}` : date[0];
  const month = date[1].length < 2 ? `0${date[1]}` : date[1];

  return `${date[2]}-${month}-${day}`;
}

export const formatStringDate = (strDate: string): string => {

  const dateSplit = strDate.split('-');

  return `${dateSplit[2]}/${dateSplit[1]}/${dateSplit[0]}`
}