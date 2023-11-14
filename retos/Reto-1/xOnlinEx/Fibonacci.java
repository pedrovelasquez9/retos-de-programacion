public class Fibonacci {
    public static void main(String[] args) {
	/*
	An argument must be passed in order to compile
	example:
	java Fibonacci.java 9
	*/
        fibonacci(Integer.parseInt(args[0]));
    }

    public static void fibonacci(int n) {
        for (int i = 0; i < n; i++) {
            if (i != n - 1) System.out.print(getFibonacci(i) + ",");
            else System.out.println(getFibonacci(i));
        }
    }

    public static int getFibonacci(int number) {
        if (number == 0 || number == 1) return number;
        return getFibonacci(number - 1) + getFibonacci(number - 2);
    }
}
