function twoStrings(s1, s2) {
     let result = "NO";
     const s1len = s1.length;
     const s2len = s2.length;
     if (s1len >= 1
          && s1len <= 100000
          && s2len >= 1
          && s2len <= 100000) {
          
          result = (s1.split('')
                   .filter((el, key) => s2.indexOf(el) > -1)
                   .length > 0) ? "YES" : "NO";
          // s2 = "world"
          // s1 = "hello" > ['h', 'e', 'l', 'l', 'o']
          // result = ["l", "l", "o"] 
          // result = "YES"  
     }
     return result;
}
