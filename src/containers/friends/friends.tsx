import * as React from 'react';
import {connect} from "react-redux";
import {Redirect} from "react-router";

class Friends extends React.Component {
    public render() {
        // @ts-ignore
        if (this.props.Auth.logged) {
            return (
                <div>
                    <h3>Друзья</h3>
                </div>
            );
        } else {
            return (<Redirect to={'/login'}/>)
        }
    }
}

function mapStateToProps(state: any){
    return {Auth: {logged: state.Auth.logged}};
}

export default connect(mapStateToProps)(Friends);