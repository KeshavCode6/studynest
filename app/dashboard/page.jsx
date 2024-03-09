import Menu from '@/components/Menu'
import Widget from '@/components/Widget';

function Dashboard() {
    
    return (
        <>
            <Menu page="dashboard"></Menu>

            <div className="widgetContainer">

                <div className="widgetRow">
                    <Widget title="Due Soon" grow={2}>Widget content!!!</Widget>
                    <Widget title="Today Is" grow={1}>Widget content!!!</Widget>
                </div>

                <div className="widgetRow">
                    <Widget title="Start a Timer" grow={1}>Widget content!!!</Widget>
                    <Widget title="Suggested Forum Posts" grow={2}>Widget content!!!</Widget>
                </div>

            </div>
        </>
    )
}

export default Dashboard;