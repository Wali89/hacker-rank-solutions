function pickingNumbers(a) {
    a.sort((a,b) => a-b)
    var ans = [];
    for(var i=0; i < a.length; i++) {
        if((Math.abs(a[i]-a[i+1])) <= 1) {
            ans.push(a[i]);
        };

    }

    return ans.length;

}
