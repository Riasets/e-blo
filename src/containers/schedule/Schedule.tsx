import * as React from 'react';
import { connect } from "react-redux";
import { Dispatch } from "redux";

import { Actions } from "../../store/actions/actions";
import CreateEvent  from "src/components/createElement/CreateEvent";
import Timeline from "../../components/Timeline/Timeline";

import './schedule.scss';

class Schedule extends React.Component {

  constructor(props: any) {
    super(props);
  }

  public componentWillMount() {
        // @ts-ignore
    const { getSchedule } = this.props;
    getSchedule();
  }

  public render() {
    return (<div className={'schedule-container'}>
                <div className="schedule-item">
                    <Timeline/>
                </div>
                <div className="schedule-item">
                  <CreateEvent/>
                </div>
            </div>);
  }
}

function mapStateToProps(state: any) {
  return { Schedule: {
    events: state.Schedule.events, schedule_id: state.Schedule.schedule_id },
  };
}

const mapDispatchToProps = (dispatch: Dispatch) => ({
  getSchedule: () => {
    dispatch(Actions.getSchedule());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Schedule);
