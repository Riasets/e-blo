import {FormControlLabel, MenuItem, Modal, Switch, TextField} from "@material-ui/core";
import FormControl from "@material-ui/core/FormControl";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import Paper from "@material-ui/core/Paper";
import * as React from 'react';


import {ChangeEvent} from "react";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {Actions} from "../../store/actions/actions";
import {encodeBody} from "../../utils/encode";
import './createEvent.css';

class CreateEvent extends React.Component {
    public state = {
        description: "",
        end: "",
        isLesson: false,
        name : "",
        numberOfLesson: "",
        open: false,
        repeat: false,
        start: "",
        startDay: "",
        whenRepeat: "",
    };

    constructor(props: any){
        super(props);
        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleToggle = this.handleToggle.bind(this);
        this.createEvent = this.createEvent.bind(this);
    }

    public handleChange(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>){
        // @ts-ignore
        const {name, value} = e.target;
        this.setState({[name]: value});
    }

    public handleToggle(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement| any>){
        const {name, checked} = e.target;
        this.setState({[name]: checked});
    }

    public openModal() {
        this.setState({open: true});
    }

    public closeModal() {
        this.setState({open: false});
    }
    
    public createEvent() {
        // @ts-ignore
        const {postEvent} = this.props;
        postEvent({
            copy: false,
            day: this.state.startDay,
            description: this.state.description,
            end: this.state.end,
            isLesson: this.state.isLesson,
            name: this.state.name,
            numberOfLesson: this.state.numberOfLesson,
            repeat: this.state.repeat? this.state.whenRepeat: 0,
            start: this.state.start,
        });
        this.closeModal();
    }

    public render() {
        const {start, end, name, description, repeat, numberOfLesson ,startDay, whenRepeat, isLesson} = this.state;
        const repeats = [{
                name: "Каждый день",
                value: 1
            }, {
                name: "Каждую неделю",
                value: 7
            },{
                name: "Каждые две недели",
                value: 14
            },{
                name: "Каждые 2 дня",
                value: 2
            },{
                name: "Каждые 3 дня",
                value: 3
            },{
                name: "Каждые 4 дня",
                value: 4
            }, {
                name: "Каждые 5 дней",
                value: 5
            },{
                name: "Каждые 6 дней",
                value: 6
            }];
        return (
            <div className={"create-event-container"}>
                <h2>События</h2>
                <a onClick={this.openModal}><span>+</span>Добавить событие</a>
                <Modal
                    open = {this.state.open}
                    onClose = {this.closeModal}
                    aria-labelledby="simple-modal-title"
                    aria-describedby="simple-modal-description"
                    className={"create-event-modal"}
                >
                    <Paper className={"create-event-modal-box"}>
                        <h3>Создание события в расписании</h3>
                        <div  className={'create-event-input-field-flex-box-row'}>
                            <div className={"create-event-input-field-flex-box-column"}>
                                <div className={"create-event-input-element"}>
                                    <FormControl fullWidth={true} required={true}>
                                        <InputLabel htmlFor="name">Название события</InputLabel>
                                        <Input value={name} name={"name"} onChange={this.handleChange} id="name"/>
                                    </FormControl>
                                </div>
                                <div className={"create-event-input-element"}>
                                    <FormControl fullWidth={true} required={true}>
                                        <TextField
                                            InputLabelProps={{
                                                shrink: true
                                            }}
                                            value={start}
                                            name={"start"}
                                            onChange={this.handleChange}
                                            label={"Время начала"}
                                            type={"time"}
                                        />
                                    </FormControl>

                                </div>
                                <div className={"create-event-input-element"}>
                                    <FormControl fullWidth={true} required={true}>
                                        <TextField
                                            InputLabelProps={{
                                                shrink: true
                                            }}
                                            value={end}
                                            name={"end"}
                                            onChange={this.handleChange}
                                            label={"Время конца"}
                                            type={"time"}
                                            required={true}
                                        />
                                    </FormControl>
                                </div>
                                <div className={"create-event-input-element"}>
                                    <FormControlLabel
                                        control={
                                            <Switch
                                                checked={isLesson}
                                                name={"isLesson"}
                                                onChange={this.handleToggle}
                                                value="isLesson"
                                            />
                                        }
                                        label="Это пара?"
                                    />
                                </div>
                                { isLesson &&
                                    <div className={"create-event-input-element"}>
                                        <FormControl fullWidth={true}>
                                            <TextField
                                                value={numberOfLesson}
                                                name={"numberOfLesson"}
                                                onChange={this.handleChange}
                                                label={"Номер пары"}
                                                type={"number"}
                                                required={true}

                                            />
                                        </FormControl>
                                    </div>
                                }
                                <div className={"create-event-input-element"}>
                                    <FormControl fullWidth={true}>
                                        <TextField
                                        value={description}
                                        name={'description'}
                                        onChange={this.handleChange}
                                        multiline = {true}
                                        label={"Описание"}
                                        rows={4}
                                        />
                                    </FormControl>
                                </div>
                            </div>
                            <div className={"create-event-input-field-flex-box-column"}>
                                <div className={"create-event-input-element"}>
                                    <FormControlLabel
                                        control={
                                            <Switch
                                                checked={repeat}
                                                name={"repeat"}
                                                onChange={this.handleToggle}
                                                value="repeat"
                                            />
                                        }
                                        label="Повторяющееся событие"
                                    />
                                </div>
                                    <div className={"create-event-input-element"}>
                                        <FormControl required={true}>
                                            <TextField
                                            InputLabelProps={{
                                                shrink: true
                                            }}
                                            type={"date"}
                                            name={"startDay"}
                                            value={startDay}
                                            onChange={this.handleChange}
                                            label={"День начала"}
                                            required={true}
                                            />
                                        </FormControl>
                                    </div>
                                {repeat &&
                                <div className={"create-event-input-element"}>
                                    <FormControl fullWidth={true}>
                                        <TextField
                                            select={true}
                                            value={whenRepeat}
                                            onChange={this.handleChange}
                                            name={"whenRepeat"}
                                            label={"Частота события"}
                                        >
                                            {
                                                repeats.map(option => (
                                                    <MenuItem key={option.value} value={option.value}>
                                                        {option.name}
                                                    </MenuItem>
                                                ))
                                            }
                                        </TextField>
                                    </FormControl>
                                </div>
                                }

                            </div>
                        </div>
                        <a onClick={this.createEvent}><span>+</span>Добавить</a>
                    </Paper>
                </Modal>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch: Dispatch) =>({
   postEvent: (body: any) => {
       const start = body.start.split(":");
       body.start = Number(start[0])*60  + Number(start[1]);
       const end = body.end.split(":");
       body.end = Number(end[0])*60 + Number(end[1]);
       (console as any).log(body.start, body.end, start, end);
       (console as any).log(encodeBody(body));
        dispatch(Actions.postEvent(encodeBody(body)));
   }
   });

export default connect(null, mapDispatchToProps)(CreateEvent);