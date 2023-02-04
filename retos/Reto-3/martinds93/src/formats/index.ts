import { capitalizeArray } from '../utils/capitalize';
import normalize from '../utils/normalizeInput';
import EFormats from '../enums/EFormats';

class Formats {
  input: string[];
  format: EFormats;

  constructor(input: string, format: EFormats) {
    this.input = normalize(input);
    this.format = format;
  }

  toFormat() {
    const formatFunctions = {
      CAMEL: this.toCamel.bind(this),
      PASCAL: this.toPascal.bind(this),
      SNAKE: this.toSnake.bind(this),
      KEBAB: this.toKebab.bind(this),
    };

    return formatFunctions[this.format]?.();
  }

  private toCamel(): string {
    const firstWord = this.input.shift();
    const formatedInput = capitalizeArray(this.input);

    return [firstWord, ...formatedInput].join('');
  }

  private toPascal(): string {
    const formatedInput = capitalizeArray(this.input);

    return formatedInput.join('');
  }

  private toSnake(): string {
    return this.input.join('_');
  }

  private toKebab(): string {
    return this.input.join('-');
  }
}

export default Formats;
