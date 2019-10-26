function climbingLeaderboard(scores, alice) {
    let rank =1;
    let index=0;

    return alice.map(function(k) {
        
        while (k < scores[index]) {
            if (scores[index] == scores[++index]) continue;
            rank++
        }
        while (k >= scores[index-1]) {
            if (scores[index] == scores[--index]) continue;
            rank--;
        }
        return rank;
    })
}
