import java.util.Arrays;

public class DuplicatesInString {

    public static void printDuplicates(String str) {
        int stringLength = str.length();

        // Sorting the string
        char[] chars = str.toCharArray();
        Arrays.sort(chars);
        String sortedStr = new String(chars);

        // Loop through the sorted string to find duplicates
        for (int i = 0; i < stringLength; i++) {
            int count = 1;

            // Counting the occurrences of each character
            while (i < stringLength - 1 && sortedStr.charAt(i) == sortedStr.charAt(i + 1)) {
                count++;
                i++;
            }

            // Printing the duplicate character and its count
            if (count > 1) {
                System.out.println(sortedStr.charAt(i) + ", count = " + count);
            }
        }
    }

    public static void main(String[] args) {
        String str = "lee spangles";
        printDuplicates(str);
    }
}
