function hourglassSum(arr) {
 
     let hourglasses = [];

     if (typeof arr === "object"
          && arr.length === 6
          && arr.map(i => i.length).reduce((p, n) => p + n) === 36) 
          {
 
          for (let row = 0; row <= 3; row++) {
               for (let col = 0; col <= 3; col++) {
                    let sum = 0;
          
                    sum += arr[row][col];
                    sum += arr[row][col + 1];
                    sum += arr[row][col + 2];
                    sum += arr[row + 1][col + 1];
                    sum += arr[row + 2][col]; 
                    sum += arr[row + 2][col + 1];
                    sum += arr[row + 2][col + 2];
          
                    hourglasses.push(sum);
               } 
          }
     } 
                
     return (hourglasses.length > 0) ? Math.max(...hourglasses) : 0;
}
