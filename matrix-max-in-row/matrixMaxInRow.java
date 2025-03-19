// Java program to find maximum element of each row in a matrix
import java.util.*;

class MatrixMaxInRow {
    static int[] maxElement(int[][] matrix) {
        int[] resultArray = new int[matrix.length];

        // Traverse through each row and find the
        // max in each row
        for (int i = 0; i < matrix.length; i++) {
            int maxVal = Arrays.stream(matrix[i]).max().getAsInt();
            resultArray[i] = maxVal;
        }

        return resultArray;
    }

    public static void main(String[] args) {
        int[][] matrix = {
            {4, 43, 1, 10},
            {1, 4, 12, 9},
            {75, 38, 28, 2},
            {3, 2, 6, 7}
        };
        int[] resultArray = maxElement(matrix);

        for (int array : resultArray) {
            System.out.println(array);
        }
    }
}
