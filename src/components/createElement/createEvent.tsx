import {Modal} from "@material-ui/core";
import FormControl from "@material-ui/core/FormControl";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import Paper from "@material-ui/core/Paper";
import * as React from 'react';


import {ChangeEvent} from "react";
import './createEvent.css';

class CreateEvent extends React.Component {
    public state = {
        description: "",
        end: "",
        name : "",
        numberOfLesson: "",
        open: false,
        repeat: "",
        start: "",
    };

    constructor(props: any){
        super(props);
        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    public handleChange(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>){
        // @ts-ignore
        const {name, value} = e.target;
        this.setState({[name]: value});
    }

    public openModal() {
        this.setState({open: true});
    }

    public closeModal() {
        this.setState({open: false});
    }

    public render() {
        const {start, end, name, description, repeat, numberOfLesson} = this.state;
        return (
            <div className={"create-event-container"}>
                <h2>События</h2>
                <a onClick={this.openModal}><span>+</span>Добавить cобытие</a>
                <Modal
                    open = {this.state.open}
                    onClose = {this.closeModal}
                    aria-labelledby="simple-modal-title"
                    aria-describedby="simple-modal-description"
                    className={"create-event-modal"}
                >
                    <Paper className={"create-event-modal-box"}>
                        <h3>Создание События</h3>
                        <FormControl fullWidth={true} required={true}>
                            <InputLabel htmlFor="name">Название события</InputLabel>
                            <Input value={name} name={"name"} onChange={this.handleChange} id="name"/>
                        </FormControl>
                        <FormControl fullWidth={true} required={true}>
                            <InputLabel htmlFor="start">Время начала</InputLabel>
                            <Input value={start} name={"start"} onChange={this.handleChange} id="Start"/>
                        </FormControl>
                        <FormControl fullWidth={true} required={true}>
                            <InputLabel htmlFor="end">Время конца</InputLabel>
                            <Input value={end} name={"end"} onChange={this.handleChange} id="end"/>
                        </FormControl>
                        <FormControl fullWidth={true} required={true}>
                            <InputLabel htmlFor="repeat">Повторяющееся событие?</InputLabel>
                            <Input value={repeat} name={"repeat"} onChange={this.handleChange} id="repeat"/>
                        </FormControl>
                        <FormControl fullWidth={true}>
                            <InputLabel htmlFor="numberOfLesson">Номер Пары</InputLabel>
                            <Input value={numberOfLesson} name={"numberOfLesson"} onChange={this.handleChange} id="numberOfLesson"/>
                        </FormControl>
                        <FormControl fullWidth={true}>
                            <InputLabel htmlFor="description">Описание</InputLabel>
                            <Input value={description} name={"description"} onChange={this.handleChange} id="description"/>
                        </FormControl>
                        <a>Создать событие</a>
                    </Paper>
                </Modal>
            </div>
        );
    }
}

export default CreateEvent;