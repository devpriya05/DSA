import java.util.Arrays;

public class array {
        static int update(int num) {
                return num = 5;
        }

        static int updateArr(int[] num) {
                return num[0] = 5;
        }

        public static void main(String[] args) {
                int firstNum = 10;
                firstNum = 15;
                int secNum = 20;
                int arr[] = { 1, 2, 3, 4, 5, 6, 7, 8, 9 };
                System.out.println(firstNum);
                update(secNum);
                updateArr(arr);
                System.out.println(firstNum);
                System.out.println(secNum);
                System.out.println(Arrays.toString(arr));
        }

}
