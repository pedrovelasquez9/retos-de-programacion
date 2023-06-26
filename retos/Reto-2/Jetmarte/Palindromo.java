import java.text.Normalizer;

public class Palindromo {

    public static String isPalindromeWord(String text){
        if(isAPhrase(text)){
            if(isPalindrome(text)){
                return "La frase " + text + " : " + "es un palindromo";
            }else{
                return "La frase " + text + " : " + "no es un palindromo";
            }
        }else{
            if(isPalindrome(text)){
                return "La palabra " + text + " : " + "es un palindromo";
            }else{
                return "La palabra " + text + " : " + "no es un palindromo";
            }
            
        }
        
    }

    private static boolean isAPhrase(String text){
        for(int i=0; i< text.length(); i++){
            if(text.charAt(i) == ' '){
                return true;
            }
        }
        return false;
    }

    private static boolean isPalindrome (String myText){
        String text = normalizeString(myText);
        String reflect = new StringBuilder(text).reverse().toString();
        System.out.println(text);
        System.out.println(reflect);
        
        if ( text.length() < 2){
            return false;
        }else{
            if(text.equals(reflect)){
                return true;
            }else{
                return false;
            }
        }
    }

    private static String normalizeString(String str){
        str = Normalizer.normalize(str, Normalizer.Form.NFKD);
        return str.replaceAll("[^a-z,^A-Z]", "").toLowerCase();
        
        
    }
}
