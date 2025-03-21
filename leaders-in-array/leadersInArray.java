import java.util.ArrayList;

class Main {
    // Function to find the leaders in an array
    static ArrayList<Integer> leadersInArray(int[] arr) {
        ArrayList<Integer> result = new ArrayList<>();
        int arrLength = arr.length;
        
        for (int i=0; i<arrLength; i++) {
            int j;
            // Check elements to the right
            for (j=i+1; j<arrLength; j++) {
                // If a larger element is found
                if (arr[i] < arr[j]) {
                    break;
                }
            }
            // If no larger element was found
            if (j == arrLength) {
                result.add(arr[i]);
            }
        }
        
        return result;
    }
    
    public static void main(String[] args) {
        int[] arr = { 16, 17, 4, 3, 5, 2 };
        ArrayList<Integer> resultArray = leadersInArray(arr);
        
        for (int result : resultArray) {
            System.out.print(result + " ");
        }
        System.out.println();
    }
}