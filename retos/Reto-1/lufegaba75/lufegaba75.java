package org.lufegaba75.fibonacci;

import java.util.*;

public class Fibonacci  {
    static List<Integer> fibonacciSerie = new ArrayList<>();
    public static void main(String[] args) {
    boolean wrongInput = true;
        while(wrongInput) {
            try{
                Scanner sc = new Scanner(System.in);
                System.out.print("Indique cuántos términos de la serie desea: ");
                showSerie(createSerie(sc.nextInt()));
                wrongInput = false;
            }catch(InputMismatchException e){
                System.out.println("Entrada inválida, debe introducir un número entero, prueba de nuevo ");
            }
        }
    }
    public static List<Integer> createSerie (int n){

        for (int i = 0; i < n; i++) {
            if (i > 1){
                fibonacciSerie.add(fibonacciSerie.get(i-1)+ fibonacciSerie.get(i-2));
            }else if(i == 0){
                fibonacciSerie.add(1);
            }else{
                fibonacciSerie.add(fibonacciSerie.get(i-1));
            }
        }
        return fibonacciSerie;
    }
    public static void showSerie(List<Integer> list){
        System.out.println("\n========= Serie Fibonacci de " + fibonacciSerie.size() + " términos =========");
        System.out.print("\t\t\t\t(");
        for (int i = 0; i < list.size()-1; i++) {
            System.out.print(list.get(i)+",");
        }
        System.out.println(list.get(list.size()-1)+")");
        System.out.println("=================================================");
    }
}
