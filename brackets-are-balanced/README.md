Given a string s representing an expression containing various types of brackets: {}, (), and [], the task is to determine whether the brackets in the expression are balanced or not. A balanced expression is one where every opening bracket has a corresponding closing bracket in the correct order.

Example: 

Input: s = “[{()}]”
Output: true
Explanation:  All the brackets are well-formed.

Input:  s = “([{]})”
Output: false
Explanation: The expression is not balanced because there is a closing ‘]’ before the closing ‘}’.

Step-by-step approach:
1. Declare a character stack.
2. Now iterate over the string. 
3. If the current character is an opening bracket ( ‘(‘ or ‘{‘  or ‘[‘ ) then push it to stack.
4. If the current character is a closing bracket ( ‘)’ or ‘}’ or ‘]’ ) and the closing 
bracket matches  with the opening bracket at the top of stack, then pop the opening bracket. 
Else string s is not balanced.
5. After complete iteration, if some starting brackets are left in the stack then the expression is 
not balanced, else balanced.