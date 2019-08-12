function twoStrings(s1, s2) {
    // Since a one character common substring is still a substring, we can just check for
    // a character in common.  A map should be easy way to do that.
    var map = {};
    for (var i = 0; i < s1.length; i++) {
        // We could count it, but just having an entry should be sufficient.  Seems like a boolean.
        map[s1[i]] = true;
    }
    for (var i = 0; i < s2.length; i++) {
        if (map[s2[i]]) return "YES";
    }
    return 'NO';
}
