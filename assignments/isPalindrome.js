
function isPalindrome(str) {
    let rev = "";
    let len = str.length;
    for (let i = len - 1; i >= 0; i--) {
        rev = rev + str[i];
    }
    if (str == rev) {
        console.log("palindrome");
    } else {
        console.log("not palindrome");
    }
}
isPalindrome("madam");