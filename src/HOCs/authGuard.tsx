import * as React from "react";
import {Redirect, Route} from "react-router";



function CheckRoute(props: any) {
    function chooseComponent(){
        return props.condition ? (<props.renderComponent/>) : (<Redirect to={props.redirectPath}/>)
    }
    return (<Route
        {...props}
        render = {chooseComponent()}
    />)
}

export default CheckRoute;



