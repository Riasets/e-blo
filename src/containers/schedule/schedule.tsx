import * as React from 'react';
import {connect} from "react-redux";
import {Redirect} from "react-router";
import {Dispatch} from "redux";

import {Actions} from "../../store/actions/actions";

import CreateEvent from "../../components/createElement/createEvent";
import Timeline from "../../components/Timeline/Timeline";

import './schedule.css';



class Schedule extends React.Component {

    constructor(props: any){
        super(props);
    }

    public componentWillMount(){
        // @ts-ignore
        const {getSchedule} = this.props;
        getSchedule();
    }

    public render() {
        // @ts-ignore
        const {logged} = this.props.Auth;
        if (logged){
            return (<div className={'schedule-container'}>
                <div className="schedule-item">
                    <Timeline/>
                </div>
                <div className="schedule-item">
                    <CreateEvent/>
                </div>
            </div>);
        } else {
            return (<Redirect to={'/login'}/>);
        }
    }
}

function mapStateToProps(state: any){
    return {Schedule: {events: state.Schedule.events, schedule_id: state.Schedule.schedule_id}, Auth: {logged: state.Auth.logged}};
}

const mapDispatchToProps = (dispatch: Dispatch) => ({
    getSchedule: () => {
        dispatch(Actions.getSchedule());
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Schedule);