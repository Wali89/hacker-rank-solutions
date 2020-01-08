function maximumToys(prices, k) {
    const pricesSorted = prices.sort(function(a,b){return a-b;});

    let budget = k;
    let noToys = 0;

    pricesSorted.forEach(toyPrice=>{
        if (toyPrice <= budget) {
            noToys++;
            budget = budget - toyPrice;
        }
    });

    return noToys;
}
