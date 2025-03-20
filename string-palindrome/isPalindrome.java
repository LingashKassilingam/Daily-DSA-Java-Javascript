class Main {
    
    // Function to check if a string is a palindrome
    public static boolean isPalindrome(String s) {
        int stringLength = s.length();
        
        // Iterate over the first half of the string
        for (int i=0; i < stringLength/2; i++) {
            // If the characters at symmetric positions are not equal
            if(s.charAt(i) != s.charAt(stringLength - i - 1)) {
                // Return false (not a palindrome)
                return false;
            }
        }
        
        // If all symmetric characters are equal
        // then it is palindrome
        return true;
    }
    public static void main(String[] args) {
        String s = "eellee";
        System.out.println(isPalindrome(s));
    }
}