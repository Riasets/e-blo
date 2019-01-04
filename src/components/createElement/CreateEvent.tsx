import {FormControlLabel,
    FormHelperText,
    MenuItem,
    Modal,
    Switch,
    TextField } from '@material-ui/core';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Paper from '@material-ui/core/Paper';
import * as React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import MultilineField from './MultilineField';
import DoubleSlider from '../DoubleSlider/DoubleSlider';

import InputFieldStyle from '../../styles/InputFieldStyle';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { Actions } from '../../store/actions/actions';
import { timeStringToNum } from "../../utils/dateParse";
import './createEvent.scss';

class CreateEvent extends React.Component {
  public state = {
    description: '',
    end: '',
    errorEnd: false,
    errorName: false,
    errorStart: false,
    errorStartDay: false,
    errorWhenRepeat: false,
    isLesson: false,
    name : '',
    numberOfLesson: '',
    open: false,
    repeat: false,
    start: '',
    startDay: '',
    whenRepeat: '',
  };

  constructor(props: any) {
    super(props);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
    this.createEvent = this.createEvent.bind(this);
  }

  public handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
        // @ts-ignore
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  public handleToggle(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement| any>) {
    const { name, checked } = e.target;
    this.setState({ [name]: checked });
  }

  public openModal() {
    this.setState({ open: true });
  }

  public closeModal() {
    this.setState({ open: false });
  }

  public setTime = (start: string, end: string) => {
    this.setState({ start, end });
  }

  public createEvent() {
    const errorWhenRepeat = this.state.repeat && this.state.whenRepeat === '';
    const errorStartDay = this.state.startDay === '';
    const errorEnd = this.state.end === '' ||
      timeStringToNum(this.state.start) >= timeStringToNum(this.state.end);
    const errorStart = this.state.start === '' ||
      timeStringToNum(this.state.start) >= timeStringToNum(this.state.end);
    const errorName = this.state.name.length < 4;
    if (!errorName && !errorStart && !errorEnd && !errorStartDay && !errorWhenRepeat) {
            // @ts-ignore
      const { postEvent } = this.props;
      postEvent({
        copy: false,
        day: this.state.startDay,
        description: this.state.description,
        end: this.state.end,
        isLesson: this.state.isLesson,
        name: this.state.name,
        numberOfLesson: this.state.numberOfLesson,
        repeat: this.state.repeat ? this.state.whenRepeat : 0,
        start: this.state.start,
      });
      this.closeModal();
    } else {
      this.setState({ errorName, errorStart, errorEnd, errorStartDay, errorWhenRepeat });
    }
  }

  public render() {
        // @ts-ignore
    const { classes } = this.props;
    const {
            errorWhenRepeat,
            errorStartDay,
            errorName,
            name,
            description,
            repeat,
            numberOfLesson,
            startDay,
            whenRepeat,
            isLesson } = this.state;
    const repeats = [{
      name: 'Каждый день',
      value: 1,
    }, {
      name: 'Каждую неделю',
      value: 7,
    }, {
      name: 'Каждые две недели',
      value: 14,
    }, {
      name: 'Каждые 2 дня',
      value: 2,
    }, {
      name: 'Каждые 3 дня',
      value: 3,
    }, {
      name: 'Каждые 4 дня',
      value: 4,
    }, {
      name: 'Каждые 5 дней',
      value: 5,
    }, {
      name: 'Каждые 6 дней',
      value: 6,
    }];
    return (
            <div className={'create-event-container'}>
                <h2>События</h2>
                <a onClick={this.openModal}><span>+</span>Добавить событие</a>
                <Modal
                    open = {this.state.open}
                    onClose = {this.closeModal}
                    aria-labelledby="simple-modal-title"
                    aria-describedby="simple-modal-description"
                    className="create-event-modal"
                >
                    <Paper className={"create-event-paper"}>
                      <div className="create-event-modal-box">
                        <div className="create-event-modal-box-header">
                            <h3>Создание события в расписании</h3>
                            <img onClick={this.closeModal}
                                 src={require("../../img/close.png")}
                                 alt="close"/>
                        </div>
                        <div  className={'create-event-input-field-flex-box-row'}>
                            <div className="create-event-input-field-flex-box-column">
                                <div className="create-event-input-element">
                                    <FormControl fullWidth={true} required={true}>
                                        <InputLabel htmlFor="name"
                                                    classes={{ root: classes.labelStyle,
                                                      shrink: classes.shrink}}
                                        >Название события</InputLabel>
                                        <Input autoFocus={true}
                                               error = {errorName}
                                               value={name}
                                               name="name"
                                               onChange={this.handleChange}
                                               id="name"
                                               classes=
                                                   {{root: classes.formControl,
                                                     underline: classes.underline}}
                                        />
                                        { errorName &&
                                        <FormHelperText id="component-error-text">
                                            Название должно быть не короче 4 символов
                                        </FormHelperText>
                                        }
                                    </FormControl>
                                </div>

                                <div className="create-event-input-element">
                                    <FormControlLabel
                                        control={
                                            <Switch
                                                checked={isLesson}
                                                name="isLesson"
                                                onChange={this.handleToggle}
                                                value="isLesson"
                                            />
                                        }
                                        label="Это пара?"
                                    />
                                </div>
                                { isLesson &&
                                <div className="create-event-input-element">
                                    <FormControl fullWidth={true}>
                                        <TextField
                                            value={numberOfLesson}
                                            name="numberOfLesson"
                                            onChange={this.handleChange}
                                            label="Номер пары"
                                            type="number"
                                            required={true}

                                        />
                                    </FormControl>
                                </div>
                                }

                            </div>
                            <div className="create-event-input-field-flex-box-column">
                                <div className="create-event-input-element">
                                    <FormControlLabel
                                        control={
                                            <Switch
                                                checked={repeat}
                                                name="repeat"
                                                onChange={this.handleToggle}
                                                value="repeat"
                                            />
                                        }
                                        label="Повторяющееся событие"
                                    />
                                </div>
                                <div className="create-event-input-element">
                                    <FormControl required={true}>
                                        <TextField
                                            InputLabelProps={{
                                              shrink: true,
                                            }}
                                            type="date"
                                            name="startDay"
                                            error={errorStartDay}
                                            value={startDay}
                                            onChange={this.handleChange}
                                            label="День начала"
                                            required={true}
                                        />
                                        { errorStartDay &&
                                        <FormHelperText id="component-error-text">
                                            Введите начальный день!
                                        </FormHelperText>
                                        }
                                    </FormControl>
                                </div>
                                {repeat &&
                                <div className="create-event-input-element">
                                    <FormControl fullWidth={true}>
                                        <TextField
                                            select={true}
                                            value={whenRepeat}
                                            onChange={this.handleChange}
                                            name="whenRepeat"
                                            label="Частота события"
                                            error={errorWhenRepeat}
                                        >
                                            {
                                                repeats.map(option => (
                                                    <MenuItem key={option.value}
                                                              value={option.value}>
                                                        {option.name}
                                                    </MenuItem>
                                                ))
                                            }
                                        </TextField>
                                        { errorWhenRepeat &&
                                        <FormHelperText id="component-error-text">
                                            Выберите частоту повторения события!
                                        </FormHelperText>
                                        }
                                    </FormControl>
                                </div>
                                }

                            </div>
                        </div>
                        <div className="create-event-input-field-flex-box-column">
                            <DoubleSlider
                              setTime={this.setTime}
                              firstInitialPos={30}
                              secondInitialPos={60}
                            />
                            <div className="create-event-input-field-describe">
                                <h5>Описание</h5>
                                <MultilineField
                                    value={description}
                                    name={'description'}
                                    onChange={this.handleChange}
                                    placeholder={this.state.isLesson ?
                                        'Например, имя препода, аудитория, корпус' :
                                        'Например, что с собой взять, с кем встреча'}
                                />
                            </div>
                        </div>
                        <a onClick={this.createEvent}><span>+</span>Добавить</a>
                      </div>
                    </Paper>
                </Modal>
            </div>
    );
  }
}

const mapDispatchToProps = (dispatch: Dispatch) => ({
  postEvent: (body: any) => {
    body.start = timeStringToNum(body.start);
    body.end = timeStringToNum(body.end);
    dispatch(Actions.postEvent(body));
  },
});

export default withStyles(InputFieldStyle)(connect(null, mapDispatchToProps)(CreateEvent));
// TODO Why compose throw error {} is not assginable to never
