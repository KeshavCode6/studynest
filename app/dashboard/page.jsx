"use client"
import AssignmentDisplay from '@/components/AssignmentDisplay';
import Menu from '@/components/menu/Menu'
import Widget from '@/components/widget/Widget';
import WidgetContainer from '@/components/widget/WidgetContainer';
import WidgetRow from '@/components/widget/WidgetRow';
import * as Icons from "@/components/Icons";
import DashboardForumPost from '@/components/dashboard/DashboardForumPost';
import getCurrentDate from '@/lib/date';

import { signOut, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

function Dashboard() {
    const router = useRouter()
    const { data: session } = useSession({
        required: true,
        onUnauthenticated() {
            router.push("/")
        },
    })

    const date = getCurrentDate();
    return (
        <>
            <div>

            </div>
            <WidgetContainer>
            <a onClick={()=>{signOut()}}>Sign out</a>

                <WidgetRow>
                    <Widget title="Due Soon" grow={2}>
                        <AssignmentDisplay name="Units 5 and 6 SBMC" subject={{ name: "AP World History", color: "#B9E116" }} dueDay="Tomorrow" />
                        <AssignmentDisplay name="Human Reproduction Prelab" subject={{ name: "Biology", color: "#48f542" }} dueDay="Friday" />
                        <AssignmentDisplay name="Podcast Project" subject={{ name: "ELA", color: "#f56942" }} dueDay="Friday" />
                        <br />
                        <a className='border border-primary-white rounded-md p-2 text-lg hover:bg-purple-900 px-5' href='/assignments'>See All</a>
                    </Widget>

                    <Widget title="Today Is" grow={1}>

                        <span className="text-6xl font-bold p-3 rounded-lg" style={{ color: date.day.color, border: `1px solid ${date.day.color}` }}>{date.day.name}</span>

                        <div>
                            <span className="text-5xl">{date.month}</span>
                            <span className="text-4xl">{date.date}</span>
                        </div>

                        <span className="dashboardTimeDisplay text-4xl bg-black p-2 rounded-lg text-red-900 hover:text-red-500">{date.time}</span>

                    </Widget>
                </WidgetRow>

                <WidgetRow className="widgetRow">
                    <Widget title="Start a Timer" grow={1}>

                        <div className='min-w-[370px]'>
                            <a className='border border-primary-white rounded-md p-2 text-[30px] hover:bg-purple-900 flex flex-row justify-center px-5' href="/timers?t=regular">
                                <span className='text-[40px]'>Regular</span>
                                <Icons.Timers width="50px" />
                            </a>

                            <a className='border border-primary-white rounded-md p-2 text-[30px] hover:bg-purple-900 flex flex-row justify-center px-5' href="/timers?t=pomo">
                                <span className='text-[40px]'>Pomodoro</span>
                                <Icons.Timers width="50px" />
                            </a>
                        </div>

                    </Widget>
                    <Widget title="Suggested Forum Posts" grow={2}>
                        <div className='flex flex-row overflow-y-hidden'>

                            <DashboardForumPost title="Name of First Mongol Emperor?" author={{ displayName: "Shaurya", avatarUrl: "" }}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Diam in arcu cursus euismod quis viverra. Nisl pretium fusce id velit ut tortor pretium. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </DashboardForumPost>

                            <DashboardForumPost title="What is a Gamete?" author={{ displayName: "Shaurya", avatarUrl: "" }}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Diam in arcu cursus euismod quis viverra. Nisl pretium fusce id velit ut tortor pretium. Nibh venenatis cras sed felis eget velit aliquet sagittis idLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </DashboardForumPost>

                            <DashboardForumPost title="How Do I Write an MLA Citation?" author={{ displayName: "Shaurya", avatarUrl: "" }}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Diam in arcu cursus euismod quis viverra. Nisl pretium fusce id velit ut tortor pretium. Nibh venenatis cras sed felis eget velit aliquet sagittis idLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </DashboardForumPost>

                            <DashboardForumPost title={"Using \"Estar\" vs. \"Ser\" in Spanish?"} author={{ displayName: "Shaurya", avatarUrl: "" }}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Diam in arcu cursus euismod quis viverra. Nisl pretium fusce id velit ut tortor pretium. Nibh venenatis cras sed felis eget velit aliquet sagittis idLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </DashboardForumPost>

                        </div>
                    </Widget>
                </WidgetRow>

            </WidgetContainer>

            <Menu page="dashboard"></Menu>
        </>
    )
}

export default Dashboard;