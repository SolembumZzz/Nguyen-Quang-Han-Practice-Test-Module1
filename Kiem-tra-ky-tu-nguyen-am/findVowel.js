function checkVowel(str) {
    let vowel = ['a', 'A', 'e', 'E','i', 'I','o', 'O','u', 'U'];
    let count = 0;
    
    for (let i = 0; i < vowel.length; i++) {
        for (let j = 0; j < str.length; j++) {
            if (vowel[i] == str[j]) {
                count++;
            }
        }
    }

    if (count == 0) {
        return false;
    } else {
        return count;
    }
}
console.log(checkVowel('Dichoidi'));