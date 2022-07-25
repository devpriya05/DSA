import java.util.Scanner;

public class scanner {

        static int getSum(int x, int y) {
                return x + y;
        }

        public static void main(String[] args) {
                Scanner scan = new Scanner(System.in);
                System.out.print("Enter Number 1: ");
                int firstNum = scan.nextInt();
                System.out.print("ENter Number 2: ");
                int secNum = scan.nextInt();
                int sumOfNumbers = getSum(firstNum, secNum);
                System.out.println("The Sum of given numbers are: " + sumOfNumbers);
        }
}