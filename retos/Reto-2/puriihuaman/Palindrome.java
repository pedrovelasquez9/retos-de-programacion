import java.text.Normalizer;

public class Palindrome {
	private final static String REGEX = "[^a-z,^A-Z]";

	public static void main(String[] args) {

		System.out.println(isPalindromeWord("¿Acaso hubo búhos acá?"));
		System.out.println(isPalindromeWord("Ana"));
		System.out.println(isPalindromeWord("Otto"));
	}

	public static String isPalindromeWord(String word) {
		if (isAPhrase(word)) {
			return (isPalindrome(word)) ? "La frase es un palíndromo" : "La frase NO es un palíndromo";
		} else {
			return (isPalindrome(word)) ?
				"La palabra es un palíndromo" :
				"La palabra NO es un palíndromo";
		}
	}

	private static boolean isPalindrome(String text) {
		String currentText = normalizeString(text);
		String transformedText = normalizeString(new StringBuilder(currentText).reverse().toString());

		if (currentText.length() < 2) return false;
		else {
			return (currentText.equals(transformedText)) ? true : false;
		}
	}

	private static boolean isAPhrase(String text) {
		for (int i = 0; i < text.length(); i++) {
			if (text.charAt(i) == ' ') return true;
		}
		return false;
	}

	private static String normalizeString(String value) {
		value = Normalizer.normalize(value, Normalizer.Form.NFD);
		return value.replaceAll(REGEX, "").toLowerCase();
	}

	private static void palindromeInfo(String text, String type, boolean isTrue) {
		String informativeMessage = "";
		if (type.equalsIgnoreCase("word")) {
			if (isTrue) informativeMessage = "La palabra es un palíndromo";
			else informativeMessage = "La palabra no es un palíndromo";
		} else {
			if (isTrue) informativeMessage = "La frase es un palíndromo";
			else informativeMessage = "La frase no es un palíndromo";
		}
		System.out.println(informativeMessage);
	}
}
