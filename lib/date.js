export default function getCurrentDate() {

    const now = new Date();

    var hour = now.getHours();
    var merridean = "am";

    if (hour > 11) {
        merridean = "pm";
    }

    else if (hour == 0) {
        merridean = "am";
        hour = 12;
    }

    if (hour > 12) {
        hour -= 12;
    }

    var minute = now.getMinutes();
    minute = minute.toString().padStart(2, "0");

    var day = [
        {"name": "Sunday", "color": "#ffd700"},
        {"name": "Monday", "color": "#ff6347"},
        {"name": "Tuesday", "color": "#4682b4"},
        {"name": "Wednesday", "color": "#2e8b57"},
        {"name": "Thursday", "color": "#800080"},
        {"name": "Friday", "color": "#ff4500"},
        {"name": "Saturday", "color": "#008080"}
    ][now.getDay()];

    var month = ["January","February","March","April","May","June","July", "August","September","October","November","December"][now.getMonth()];
    var dayOfMonth = now.getDate();

    switch(dayOfMonth) {
        case 1:
            dayOfMonth += "st";
            break;
        case 2:
            dayOfMonth += "nd";
            break;
        case 3:
            dayOfMonth += "rd";
            break;
        default:
            dayOfMonth += "th";
            break;
    }

    return {
        "time": `${hour}:${minute} ${merridean}`, 
        "day": day, 
        "month": month,
        "date": dayOfMonth
    };
}

