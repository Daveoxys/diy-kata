const reachDestination = (distance, speed) => {
    const time = Math.round(distance / speed / 0.5) * 0.5;
    
    return 'I should be there in ' + time + ' hours.';

};

module.exports = reachDestination;
