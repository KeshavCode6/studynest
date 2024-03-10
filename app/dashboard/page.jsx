import Menu from '@/components/menu/Menu'
import Widget from '@/components/widget/Widget';
import WidgetContainer from '@/components/widget/WidgetContainer';
import WidgetRow from '@/components/widget/WidgetRow';

function Dashboard() {
    
    return (
        <>

            <WidgetContainer className="widgetContainer">

                <WidgetRow>
                    <Widget title="Due Soon" grow={2}>
                    </Widget>

                    <Widget title="Today Is" grow={1}>
                        <span className="dashboardDayDisplay text-6xl">Wednesday</span>
                        <span className="dashboardDateDisplay text-5xl inline-block border border-primary-white rounded-lg p-2 w-fit">March 9th</span>
                        <span className="dashboardTimeDisplay text-4xl">12:00 pm</span>
                    </Widget>
                </WidgetRow>

                <WidgetRow className="widgetRow">
                    <Widget title="Start a Timer" grow={1}>Widget content!!!</Widget>
                    <Widget title="Suggested Forum Posts" grow={2}>Widget content!!!</Widget>
                </WidgetRow>

            </WidgetContainer>

            <Menu page="dashboard"></Menu>
        </>
    )
}

export default Dashboard;