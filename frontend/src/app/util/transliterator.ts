export class Transliterator{
  static mapping = {
    'а': 'a',
    'б': 'b',
    'в': 'v',
    'г': 'g',
    'д': 'd',
    'ђ': 'd',
    'е': 'e',
    'ж': 'z',
    'з': 'z',
    'и': 'i',
    'ј': 'j',
    'к': 'k',
    'л': 'l',
    'љ': 'l',
    'м': 'm',
    'н': 'n',
    'њ': 'n',
    'о': 'o',
    'п': 'p',
    'р': 'r',
    'с': 's',
    'т': 't',
    'ћ': 'c',
    'у': 'u',
    'ф': 'f',
    'х': 'h',
    'ц': 'c',
    'ч': 'c',
    'џ': 'd',
    'ш': 's'
  }

  static transliterate(char: string) {
    return Transliterator.mapping[char]
  }
}