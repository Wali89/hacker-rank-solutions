function minimumSwaps(arr) {
    var swaps = 0;

    for (var i = 0; i < arr.length - 1; i++) {
        if (arr[i] != (i + 1)) {

            for (var j = i + 1; j < arr.length; j++) {
                if (arr[j] == (i + 1)) {
                    var sortNum = j;
                    arr[j] = arr[i];
                    arr[i] = sortNum;
                    swaps+=1;
                }
            }
        }

    }

    return swaps;
}
