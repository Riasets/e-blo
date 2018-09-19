import * as React from 'react';
import Timeline from "./Timeline";
import CreateEvent from "./createEvent";

class Schedule extends React.Component {
    public render() {
        return (
            <div>
                <Timeline />
                <CreateEvent/>
            </div>
        );
    }
}

function mapStateToProps(){

}

export default Schedule;