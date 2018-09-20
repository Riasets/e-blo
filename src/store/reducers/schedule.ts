import ActionType from '../actions/actions';

const initialState = {
  events: [],
  schedule_id: null,
  error: null,
  isLoading: false,
};

// @ts-ignore
const Schedule = (state:object = initialState, action: any) => {
   switch (action.type) {
       case ActionType.GET_SCHEDULE_LOAD: {
           return {
               ...state,
               isLoading: true,
           }
       }
       case ActionType.GET_SCHEDULE_ERROR: {
           return {
               ...state,
               isLoading: false,
               error: action.payload,
           }
       }
       case ActionType.GET_SCHEDULE_SUCCESS: {
           return {
               ...state,
               events: action.payload.events,
               schedule_id: action.payload.scheduleId,
           }
       }
       case ActionType.POST_EVENT_ERROR: {
           return {
               ...state,
               isLoading: false,
               error: action.payload,
           }
       }
       case ActionType.POST_EVENT_LOAD: {
           return {
               ...state,
               isLoading: true,
           }
       }
       case ActionType.POST_EVENT_SUCCESS: {
           return {
               ...state,
               isLoading: false
           }
       }
       default: {
           return state;
       }
   }
};

export default Schedule;