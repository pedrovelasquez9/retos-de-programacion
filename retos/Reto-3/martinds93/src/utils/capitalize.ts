export const capitalizeWord = (input: string): string => {
  const loweredInput = input.toLowerCase();
  return `${input.charAt(0).toUpperCase()}${loweredInput.slice(1)}`;
};

export const capitalizeArray = (input: string[]): string[] => {
  const formatedInput = input.map((word) => capitalizeWord(word));
  return formatedInput;
};
