module.exports = function makeExchange(currency) {
    if (currency == 0){
        return {};
    }
    else if (currency > 10000){
        return {error: "You are rich, my friend! We don't have so much coins for exchange"};
    }

    var coins = {"H": 50, "Q": 25, "D": 10, "N": 5, "P": 1};

    var wallet = {};

    while(currency > 0){

        for (var coin in coins){
            if (currency >= coins[coin]){
                var quantity = Math.floor(currency / coins[coin]);
                wallet[coin] = quantity;
                currency = currency - coins[coin]*quantity;
            }
        }
    }
    return wallet;
}
