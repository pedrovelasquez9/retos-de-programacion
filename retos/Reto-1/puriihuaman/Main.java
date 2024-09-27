package puriihuaman;

import java.util.ArrayList;
import java.util.List;

public class Main {
	private static final int iterations = 6;

	public static void main(String[] args) {
		List<Integer> fibonacciSequence = fibonacci(iterations);
		ArrayList<Integer> recursiveFibonacciSequence = new ArrayList<>();

		System.out.println(fibonacciSequence);
		System.out.println(fibonacciRecursive(recursiveFibonacciSequence));
	}

	public static List<Integer> fibonacci(int n) {
		List<Integer> numbers = new ArrayList<>();
		int current = 0, second = 1;
		if (n <= 1) {
			numbers.add(1);
			return numbers;
		}

		for (int i = 0; i < n; i++) {
			int result = current + second;
			current = second;
			second = result;
			numbers.add(current);
		}

		return numbers;
	}

	private static List<Integer> fibonacciRecursive(ArrayList<Integer> sequence) {
		if (sequence.size() < 2) sequence.add(1);
		else sequence.add(sequence.get(sequence.size() - 1) + sequence.get(sequence.size() - 2));
		if (sequence.size() == iterations) {
			return sequence;
		}
		return fibonacciRecursive(sequence);
	}
}