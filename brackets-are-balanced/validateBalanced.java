// Java program to check if parentheses string is balanced
import java.util.Stack;

class ValidateBalanced {
    private static boolean isBalanced(String s) {  
        // Declare a stack to store the opening brackets
        Stack<Character> charStack = new Stack<>();
        for (int i = 0; i < s.length(); i++) {
            // Check if the character is an opening bracket
            if (s.charAt(i) == '(' || s.charAt(i) == '{' || s.charAt(i) == '[') {
                charStack.push(s.charAt(i)); 
            } 
            else {
                // If it's a closing bracket, check if the stack is non-empty
                // and if the top of the stack is a matching opening bracket
                if (!charStack.empty() && 
                    ((charStack.peek() == '(' && s.charAt(i) == ')') ||
                     (charStack.peek() == '{' && s.charAt(i) == '}') ||
                     (charStack.peek() == '[' && s.charAt(i) == ']'))) {
                    charStack.pop(); 
                }
                else {
                    // Unmatched closing bracket
                    return false; 
                }
            }
        }
        // If stack is empty, return true (balanced), 
        // otherwise false
        return charStack.empty();
    }
    public static void main(String[] args) {
        String inputString = "{([])}";
        if (isBalanced(inputString))
            System.out.println("true");
        else
            System.out.println("false");
    }
}


