import org.junit.jupiter.api.Test;
import org.lufegaba75.FizzBuzz;


import static org.junit.jupiter.api.Assertions.assertEquals;


public class FizzBuzzTest {

    private static final FizzBuzz fizzBuzz = new FizzBuzz();

    @Test
    void getFizzBuzz(){
        for (Integer i = 1; i <= 100; i++) {
            if (i % 15 == 0) assertEquals("fizzbuzz",fizzBuzz.getFizzBuzzByIndex(i-1));
            else if (i % 5 == 0) assertEquals("buzz", fizzBuzz.getFizzBuzzByIndex(i-1));
            else if (i % 3 == 0) assertEquals("fizz", fizzBuzz.getFizzBuzzByIndex(i-1));
            else assertEquals(i.toString(), fizzBuzz.getFizzBuzzByIndex(i-1));
            }
        }

    }

