// Javascript program to check if parentheses string is balanced
function isBalanced(s) {
    // Declare a stack to store the opening brackets
    let st = [];
    for (let i = 0; i < s.length; i++) {
        // Check if the character is an opening bracket
        if (s[i] === '(' || s[i] === '{' || s[i] === '[') {
            st.push(s[i]);
        } else {
            // If it's a closing bracket, check if the stack is non-empty
            // and if the top of the stack is a matching opening bracket
            if (st.length > 0 &&
                ((st[st.length - 1] === '(' && s[i] === ')') ||
                 (st[st.length - 1] === '{' && s[i] === '}') ||
                 (st[st.length - 1] === '[' && s[i] === ']'))) {
                // Pop the matching opening bracket
                st.pop(); 
            } else {
                // Unmatched closing bracket
                return false; 
            }
        }
    }
    // If stack is empty, return true (balanced), otherwise false
    return st.length === 0;
}

let s = "{([])}";
console.log(isBalanced(s) ? "true" : "false");
