const normalize = (input: string): string[] => {
  const regex = /[^a-zA-Z\d:\u00C0-\u00FF]/gi;
  const space = ' ';

  const splittedInput = input.replace(regex, space).toLowerCase().split(space);

  const set = new Set(splittedInput);
  const normalizedString = Array.from(set).filter((e) => e && e !== space);

  return normalizedString;
};

export default normalize;
