function charCount(str) {
    return str.split("").reduce(function(obj, char) {
        char = char.toLowerCase();
        if (/[A-Z0-9]/i.test(char)) {
            obj[char] = ++obj[char] || 1;
        }
        return obj;
    },{});
}