import { getTextClean, transformWordFirsCapitalLeter } from '../src/utilities'

export const enum TYPE_TRANSFORM {
  SNAKE='snake',
  KEKAB='kebab',
  PASCAL='pascal',
  CAMEL='camel'
}

export const caseTransformer = (text: string, type: string): string => {
  let result: string = getTextClean(text)

  switch(type) { 
    case TYPE_TRANSFORM.SNAKE: { 
      result = result.replace(' ', '_')
      break; 
    } 
    case TYPE_TRANSFORM.KEKAB: { 
      result = result.replace(' ', '-')
      break; 
    }
    case TYPE_TRANSFORM.PASCAL: {      
      let stringArray = text.split(' ')
      for (let i = 0; i < stringArray.length; i++) {
        stringArray[i] = transformWordFirsCapitalLeter(stringArray[i]);
      }
      result = stringArray.join('')
      break; 
    }
    case TYPE_TRANSFORM.CAMEL: { 
      let stringArray = text.split(' ')
      for (let i = 1; i < stringArray.length; i++) {
        stringArray[i] = transformWordFirsCapitalLeter(stringArray[i]);
      }
      result = stringArray.join('')
      break;
    }
 } 
  
  return result
}