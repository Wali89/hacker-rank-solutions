function pickingNumbers(a) {
 a = a.map(Number);
    var res = 0;
    for(var i=0;i<100;i++){
        var numberA = i;
        var numberB = i+1;
        var curRes = 0;
        for(var j=0;j<a.length;j++){
            if(a[j] === numberA || a[j] === numberB){
                curRes++;
            }
        }
        if(curRes > res){
            res = curRes;
        }
    }
    return res;
}
