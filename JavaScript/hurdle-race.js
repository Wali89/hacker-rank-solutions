function hurdleRace(k, height) {
    var ans = Math.max(...height)-k
    if(ans <0) {

        return 0
    } else {
        return ans
    }

}
