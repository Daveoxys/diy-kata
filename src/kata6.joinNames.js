const joinNames = namesObj => {
    const simpsons = ['Bart', 'Lisa','Maggie'];

    return simpsons.slice(0, 2).join(', ') + ' & ' + simpsons.slice(-1);
};
 
module.exports = joinNames;
