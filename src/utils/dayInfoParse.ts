export function sortEvents(events: any[]){
    events.sort((a,b) => {
        if (a.start > b.start){
            return 1;
        }
        if (a.start < b.start){
            return -1;
        }
        return 0;
    });
    return events;
}

export function numberLessons(events: any[]){
    let num = 0;
    events.forEach((item) => {
        item.isLesson ? num++ : num=num;
    });
    return num;
}

export function minTime(events: any[]){
    let min = 1440;
    events.forEach((item) => {
        item.start<min ? min = item.start : min=min;
    });
    return min;
}

export function maxTime(events: any[]){
    let max = 0;
    events.forEach((item) => {
        item.end > max ? max = item.end : max=max;
    });
    return max;
}

export function timeToString(time: number) {
    let hours = "";
    for (const el of String(time/60).split('')) {
        if (el==='.'){
            break;
        }
        hours = hours.concat(el);
    }
    hours = hours.concat(":");
    return hours.concat((time%60 < 10)? "0"+String(time%60):String(time%60));
}

export function numLessonToString(num: number){
    const nums ={
        1: "Первая",
        2: "Вторая",
        3: "Третья",
        4: "Четвертая",
        5: "Пятая",
        6: "Шестая",
        7: "Седьмая",
        8: "Восьмая",
        9: "Девятая",
        10: "Десятая"
    };
    return nums[num];
}