function containsCommonSubstring(a,b) {
    // Since a one character common substring is still a substring, we can just check for
    // a character in common.  A map should be easy way to do that.
    var map = {};
    for (var i = 0; i < a.length; i++) {
        // We could count it, but just having an entry should be sufficient.  Seems like a boolean.
        map[a[i]] = true;
    }
    for (var i = 0; i < b.length; i++) {
        if (map[b[i]]) return true;
    }
    return false;
}
