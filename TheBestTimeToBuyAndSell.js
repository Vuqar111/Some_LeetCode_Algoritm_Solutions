var maxProfit = function(prices) {
    let mxprofit = 0;
    for(let i = 0; i < prices.length; i++) {
        for(let j = i +1; j < prices.length; j++) {
            mxprofit = Math.max(mxprofit, prices[j] - prices[i])
        }
    }
    return mxprofit
};