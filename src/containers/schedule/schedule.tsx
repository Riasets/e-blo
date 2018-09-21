import * as React from 'react';
import {connect} from "react-redux";
import {Dispatch} from "redux";

import {Actions} from "../../store/actions/actions";

import CreateEvent from "../../components/createElement/createEvent";
import Timeline from "../../components/Timeline/Timeline";

import './schedule.css';


class Schedule extends React.Component {
    public render() {
        return (
            <div className={'schedule-container'}>
                <div className="schedule-item">
                    <Timeline />
                </div>
                <div className="schedule-item">
                    <CreateEvent/>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state: any){
    return {Schedule: {events: state.Schedule.events, schedule_id: state.Schedule.schedule_id}};
}

const mapDispatchToProps = (dispatch: Dispatch) => ({
    getSchedule: () => {
        dispatch(Actions.getSchedule());
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Schedule);