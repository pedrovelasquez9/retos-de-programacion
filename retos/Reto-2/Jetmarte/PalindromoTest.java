
import static org.junit.jupiter.api.Assertions.assertEquals;

import org.junit.Test;

public class PalindromoTest {

    @Test
    public void testIsPhalindrome(){
        String actual = Palindromo.isPalindromeWord("dinosaurio");
        String expected = "La palabra dinosaurio : no es un palindromo";
        assertEquals(expected, actual);
    }

    @Test
    public void testIsPhalindrome_thwo(){
        String actual = Palindromo.isPalindromeWord("estereoeretse");
        String expected = "La palabra estereoeretse : es un palindromo";
        assertEquals(expected, actual);
    }

    @Test
    public void testIsPhalindrome_tree(){
        String actual = Palindromo.isPalindromeWord("mejor amigo");
        String expected = "La frase mejor amigo : no es un palindromo";
        assertEquals(expected, actual);
    }

    @Test
    public void testIsPhalindrome_four(){
        String actual = Palindromo.isPalindromeWord("¿Acaso hubo búhos acá?");
        String expected = "La frase ¿Acaso hubo búhos acá? : es un palindromo";
        assertEquals(expected, actual);
    }
    
}
