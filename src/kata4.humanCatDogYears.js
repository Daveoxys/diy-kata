const humanCatDogYears = number => {
    const catYears = ((15 +9) + (number - 2)*4)
    const dogYears = ((15 +9) + (number - 2)*5)

    return [number, catYears, dogYears];

};

module.exports = humanCatDogYears;
