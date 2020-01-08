function rotLeft(a, d) {
    var ans =a;
    for(var i=0; i<d; i++) {

        var g =ans.shift();
        ans.push(g);
    }
    return ans;


}
