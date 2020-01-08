function sherlockAndAnagrams(str) {

   const found = new Map();
    var i,end, subLen = 1, count = 0, counts;
    while (subLen < str.length) {
        end = (i = 0) + subLen++;
        while (end <= str.length) {
            const sorted = [... str.substring(i++, end++)].sort().join("");   
            if (!found.has(sorted)) { found.set(sorted, [1]) }
            else { count += (counts = found.get(sorted))[0]++ }
        }
    }
    return count;

}
