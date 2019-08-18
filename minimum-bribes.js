function minimumBribes(q) {
console.log(sort(q));

    function sort(items) {
     let bribes = 0;

     for (let i = 0; i < items.length; i++) {
         if (items[i] - (i + 1) > 2) return "Too chaotic";
         for (let j = 0; j < i; j++) {
             if (items[j] > items[i]) bribes++;
         }
     } 
     return bribes;
   }
}
