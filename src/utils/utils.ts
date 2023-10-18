export const convertStringNumbersToArrayNumber = (str: string) => {
  if(str.length === 0) return [];
  const arrStr = str.split(',');
  return arrStr.map((i) => parseInt(i));
}
