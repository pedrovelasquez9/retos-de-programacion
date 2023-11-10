package com.retos.other.ej01;

import java.util.stream.IntStream;

public class jorgenavarroenamoradotokio {

	public static void main(String[] args) {
		IntStream.rangeClosed(1, 100).mapToObj(jorgenavarroenamoradotokio::convert).forEach(System.out::println);
	}

	public static String convert(int number) {
		if (number % 3 == 0 && number % 5 == 0) {
			return "FizzBuzz";
		} else if (number % 3 == 0) {
			return "Fizz";
		} else if (number % 5 == 0) {
			return "Buzz";
		} else {
			return Integer.toString(number);
		}
	}
}
