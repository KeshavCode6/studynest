import AssignmentDisplay from '@/components/AssignmentDisplay';
import Menu from '@/components/menu/Menu'
import Widget from '@/components/widget/Widget';
import WidgetContainer from '@/components/widget/WidgetContainer';
import WidgetRow from '@/components/widget/WidgetRow';

import * as Icons from "@/components/Icons";

function Dashboard() {

    function getCurrentDate() {

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

    const date = getCurrentDate();
    
    return (
        <>

        <div>
            
        </div>

            <WidgetContainer>

                <WidgetRow>
                    <Widget title="Due Soon" grow={2}>
                        <AssignmentDisplay name="Units 5 and 6 SBMC" subject={{name: "AP World History", color: "#B9E116"}} dueDay="Tomorrow"/>
                        <AssignmentDisplay name="Human Reproduction Prelab" subject={{name: "Biology", color: "#48f542"}} dueDay="Friday"/>
                        <AssignmentDisplay name="Podcast Project" subject={{name: "ELA", color: "#f56942"}} dueDay="Friday"/>
                        <br/>
                        <a className='border border-primary-white rounded-md p-2 text-lg hover:bg-white px-5' href='/assignments'>See All</a>
                    </Widget>

                    <Widget title="Today Is" grow={1}>

                        <span className="text-6xl font-bold p-3 rounded-lg" style={{color: date.day.color, border: `1px solid ${date.day.color}`}}>{date.day.name}</span>

                        <div>
                            <span className="text-5xl">{date.month}</span>
                            <span className="text-4xl">{date.date}</span>
                        </div>

                        <span className="dashboardTimeDisplay text-4xl bg-black p-2 rounded-lg text-red-900 hover:text-red-500">{date.time}</span>

                    </Widget>
                </WidgetRow>

                <WidgetRow className="widgetRow">
                    <Widget title="Start a Timer" grow={1}>

                        <a className='border border-primary-white rounded-md p-2 text-[30px] hover:bg-white flex flex-row px-5' href="/timers?t=regular">
                            <span>Regular</span>
                            <Icons.Timers width="50%"/>
                        </a>

                        <a className='border border-primary-white rounded-md p-2 text-[30px] hover:bg-white flex flex-row px-5' href="/timers?t=pomo">
                            <span>Pomodoro</span>
                            <Icons.Timers width="50%"/>
                        </a>

                    </Widget>
                    <Widget title="Suggested Forum Posts" grow={2}>Widget content!!!</Widget>
                </WidgetRow>

            </WidgetContainer>

            <Menu page="dashboard"></Menu>
        </>
    )
}

export default Dashboard;