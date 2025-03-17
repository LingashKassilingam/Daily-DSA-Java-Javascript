 class HashingSubset {

     static boolean isSubset(int[] arrayOne, int[] arrayTwo) {
        // Iterate over each element in the second array
        int arrayOneLength = arrayOne.length;
        int arrayTwoLength = arrayTwo.length;
        for (int i = 0; i < arrayTwoLength; i++) {
            boolean found = false;
            // Check if the element exists in the first array
            for (int j = 0; j < arrayOneLength; j++) {
                if (arrayTwo[i] == arrayOne[j]) {
                    found = true;
                    break;
                }
            }
            // If any element is not found, return false
            if (!found) {
                return false;
            }
        }
        // If all elements are found, return true
        return true;
    }

    public static void main(String[] args) {
        int[] a = {11, 1, 13, 21, 3, 7};
        int[] b = {11, 3, 7, 1};

        if (isSubset(a, b)) {
            System.out.println("true");
        } else {
            System.out.println("false");
        }
    }
}
