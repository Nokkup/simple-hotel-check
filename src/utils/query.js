import { addDaysToDate, formatDate } from "./date";

export function newQuery({location, date, daysCount}) {
    const newQuery = {
            location,
            lang: "ru",
            currency: "rub",
            limit: 20,
            daysCount,
            checkIn: formatDate(date, "YYYY-MM-DD"),
            checkOut: addDaysToDate(date, daysCount, "YYYY-MM-DD"),
    };
    return newQuery;
}