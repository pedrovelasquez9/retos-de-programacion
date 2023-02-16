import EFormats from './enums/EFormats';
import Formats from './formats';

const formatCase = (input: string, formatSelected: EFormats): string => {
  const format = new Formats(input, formatSelected).toFormat();

  return format;
};
export default formatCase;
