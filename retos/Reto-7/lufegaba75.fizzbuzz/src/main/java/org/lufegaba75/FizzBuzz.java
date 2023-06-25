package org.lufegaba75;

import java.util.ArrayList;
import java.util.List;


public class FizzBuzz {

    public final static List<String> fizzbuzz = new ArrayList<>();

    public FizzBuzz (){
        for (Integer i = 1; i <= 100; i++) {
            String value;

            if (i % 15 == 0) value = "fizzbuzz";
            else if (i % 5 == 0 ) value = "buzz";
            else if (i % 3 == 0 ) value = "fizz";
            else value = i.toString();

            fizzbuzz.add(value);
        }
    }

    public String getFizzBuzz() {
        return fizzbuzz.toString();
    }

    public String getFizzBuzzByIndex(Integer index){
        return fizzbuzz.get(index);
    }

    public static void main(String[] args) {

        FizzBuzz list = new FizzBuzz();

        System.out.println(list.getFizzBuzz());
    }


}