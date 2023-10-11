export const formatNumberWithSpaces = (number: number) => {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
};

export const firstLetterUppercase = (text: string) => {
  return text.replace(/^./, text[0].toUpperCase());
};
