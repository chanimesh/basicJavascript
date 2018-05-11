function getPercent(percent, total) {
    return ((percent/100)*total);
}

function calculatePercentage(percentValue, total) {
    if (total===0)
        throw('Total cannot be zero');
    return ((percentValue/total)*100);
}

function getRemaining(percent, total) {
    return (total - ((percent/100)*total));
}

function diffPercent(currentValue, newValue){
    if(currentValue===0)
        throw('current value cannot be zero');
    return (((newValue-currentValue)/currentValue)*100);
}

module.exports = {
    getPercent,
    calculatePercentage,
    getRemaining,
    diffPercent,
};
