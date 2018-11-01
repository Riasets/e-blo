import * as React from 'react';
import { connect } from "react-redux";

import Day from "./Day/Day";
import './timeline.css';

import 'react-perfect-scrollbar/dist/css/styles.css';

import PerfectScrollbar from 'react-perfect-scrollbar';

import { isItAfterThisDate, isItTimeForEvent, isThisDate } from "../../utils/dateParse";

class Timeline extends React.Component {

  public state = {
    renderedDays: [0, 1, 2, 3, 4, 5, 6],
  };

  constructor(props: any) {
    super(props);

    this.createNextDays = this.createNextDays.bind(this);
    this.chooseEvents = this.chooseEvents.bind(this);
  }

  public createNextDays() {
    const newRenderedDays = this.state.renderedDays;
    for (let i = 1; i <= 7; i++) {
      newRenderedDays.push(newRenderedDays[newRenderedDays.length - 1] + 1);
    }
    this.setState({ renderedDays : [...newRenderedDays] });
  }

  public chooseEvents(numDay: number) {
    const events: any[] = [];
        // @ts-ignore
    this.props.events.forEach((item: any, index: any) => {
      if (isItAfterThisDate(new Date(item.day), numDay)
        && (isThisDate(new Date(item.day), numDay)
          || (item.repeat !== 0 && isItTimeForEvent(new Date(item.day), item.repeat, numDay)))) {
        events.push(item);
      }
    });
    return events;
  }

  public render() {

    return (
            <div className={'timeline-container'}>
                <h2>Таймлайн</h2>
                <PerfectScrollbar onYReachEnd={this.createNextDays}>
                <div className={'timeline-days-container'}>
                {
                    this.state.renderedDays.map(numDay =>
                        <Day
                        key={numDay}
                            // @ts-ignore
                        Events={this.chooseEvents(numDay)}
                        DayNumber={numDay} />)
                }
                </div>
                </PerfectScrollbar>
            </div>
    );
  }
}

function mapStateToProps(state: any) {
  return { events: state.Schedule.events, schedule_id: state.Schedule.schedule_id };
}

export default connect(mapStateToProps)(Timeline);
