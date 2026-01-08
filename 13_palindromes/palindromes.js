const palindromes = function (palindrome) {
    const clean = palindrome.toLowerCase().replace(/[^a-z0-9]/g, '');
    const reverse = palindrome.split('').reverse().join('');
    return clean === reverse

};

// Do not edit below this line
module.exports = palindromes;
