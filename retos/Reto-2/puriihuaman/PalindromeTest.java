import org.junit.Test;

import static org.junit.Assert.assertEquals;

public class PalindromeTest {
	private static final String PALINDROME_WORD_TRUE = "La palabra es un palíndromo";
	private static final String PALINDROME_WORD_FALSE = "La palabra NO es un palíndromo";
	private static final String PALINDROME_PHRASE_TRUE = "La frase es un palíndromo";
	private static final String PALINDROME_PHRASE_FALSE = "La frase NO es un palíndromo";

	@Test
	public void testIsPalindromePhrase() {
		String current = Palindrome.isPalindromeWord("¿Acaso hubo búhos acá?");
		assertEquals(PALINDROME_PHRASE_TRUE, current);
	}

	@Test
	public void testIsPalindromeWord() {
		String current = Palindrome.isPalindromeWord("ana");
		assertEquals(PALINDROME_WORD_TRUE, current);
	}

	@Test
	public void testIsNotPalindromePhrase() {
		String current = Palindrome.isPalindromeWord("Frase random");
		assertEquals(PALINDROME_PHRASE_FALSE, current);
	}

	@Test
	public void testIsNotPalindromeWord() {
		String current = Palindrome.isPalindromeWord("Hola");
		assertEquals(PALINDROME_WORD_FALSE, current);
	}

}