function wordFormat(count, words){
    const remainder = count % 10;

    if (remainder > 1 && remainder < 5) {
        return words[1];
    }

    if (remainder === 1) {
        return words[0];
    }

    return words[2];
}

export function hotelsFormat(count) {
    return wordFormat(count, ["отель", "отеля", "отелей"])
}

export function daysFormat(count) {
    return wordFormat(count, ["день", "дня", "дней"])
}

export function priceFormat(price) {
    const priceNum = Math.floor(Number(price));
    return `${priceNum.toLocaleString()} ₽`;
}