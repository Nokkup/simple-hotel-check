import moment from "moment";
import 'moment/locale/ru';

export function getCurrentDate(format = "DD MMMM YYYY"){
    return moment().locale("ru").format(format);
}

export function formatDate(date, format = "DD MMMM, YYYY"){
    return moment(date).locale("ru").format(format);
}

export function addDaysToDate(date, days, format="YYYY-MM-DD"){
    return moment(date).add(days, "day").format(format);
}