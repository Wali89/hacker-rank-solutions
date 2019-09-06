function alternatingCharacters(s) {
    var deletes = 0;
    var altArray = s.split("");

    for (let i = 0; i < altArray.length; i++) {
        if (altArray[i] === altArray[i + 1]) {
            deletes += 1;
        };

    }
    return deletes

}
