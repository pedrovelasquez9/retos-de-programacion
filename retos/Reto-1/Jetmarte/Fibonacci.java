class Fibonacci{

    public static void main(String[] args){
        secuenceFibonacci(6);
    }

    private static void secuenceFibonacci(int n){
        if(n < 2){
            System.out.println("1");
        }else{
            for(int i=1; i< n +1; i++){
                System.out.print(" " + numberFibonacci(i)); 
            }
            System.out.println("");
        }
    }

    private static int numberFibonacci(int n){
        if(n == 0 || n == 1){
            return n;
        }else{
            return numberFibonacci(n-1) + numberFibonacci(n-2) ; 
        }
        
    }
}
