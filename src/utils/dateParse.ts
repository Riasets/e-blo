export function isThisDate(firstDate: Date, numSecondDate: number | Date) {
    if (typeof numSecondDate === "number") {
        const secondDate = new Date(Date.now());
        secondDate.setDate(secondDate.getDate() + numSecondDate);
        return dateToDayDate(firstDate) === dateToDayDate(secondDate);
    } else {
        return dateToDayDate(firstDate) === dateToDayDate(numSecondDate);
    }
}

export function dateToDayDate(date: Date) {
    const dateString = date.toUTCString();
    const dateArray = dateString.split(" ");
    return dateArray[0] + " " + dateArray[1] + " " + dateArray[2] + " " + dateArray[3];
}

export function isItAfterThisDate(firstDate: Date, numSecondDate: number){
    const secondDate = new Date(Date.now());
    secondDate.setDate(secondDate.getDate() + numSecondDate);
    return secondDate > firstDate;
}

export function isItTimeForEvent(startDay: Date, daysRepeat: number, numSecondDate: number){
    const secondDate = new Date(Date.now());
    secondDate.setDate(secondDate.getDate() + numSecondDate);
    const firstDate = startDay;
    let i = 0;
    const datesArray = [];
    while (firstDate <= secondDate) {
        firstDate.setDate(firstDate.getDate() + daysRepeat*i);
        datesArray.push(dateToDayDate(firstDate));
        i++;
    }
    i++;
    firstDate.setDate(firstDate.getDate() + daysRepeat*i);
    datesArray.push(dateToDayDate(firstDate));
    return dateToDayDate(secondDate) in datesArray;
}

export function weekDayToRussian(date: Date) {
    const daysOfWeek = {"Mon,": "Понедельник", "Tue,":"Вторник", "Wed,":"Среда", "Thu,":"Четверг", "Fri,":"Пятница","Sat,":"Суббота","Sun,":"Воскресенье"};
    const dateString = date.toUTCString();
    const dateArray = dateString.split(" ");
    return daysOfWeek[dateArray[0]];
}

export function monthToRussian(date: Date){
    const monthes = {
        "Apr": "Апреля",
        "Aug": "Августа",
        "Dec": "Декабря",
        "Feb":"Февраля",
        "Jan":"Января",
        "Jul": "Июля",
        "Jun":"Июня",
        "Mar": "Марта",
        "May": "Мая",
        "Nov": "Ноября",
        "Oct": "Октября",
        "Sep": "Сентября",
    };
    const dateString = date.toUTCString();
    const dateArray = dateString.split(" ");
    return monthes[dateArray[1]];
}

export function getDate(date: Date){
    const dateString = date.toUTCString();
    const dateArray = dateString.split(" ");
    return dateArray[2];
}