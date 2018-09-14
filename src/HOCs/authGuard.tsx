import {Component} from "react";
import * as React from "react";
import {connect} from "react-redux";
import {Redirect} from "react-router";

// TODO
const checkRoute = ({component: Component, path: string, redirectPath: string, condition: boolean, ...rest}) => (
    <Route {...rest} render={props => condition ? (<component {...props}/>) : (<Redirect to={redirectPath}/>)}>

);



