import ActionType from '../actions/actions';

const initialState = {
  error: null,
  events: [],
  isLoading: false,
  schedule_id: null,
};

// @ts-ignore
const Schedule = (state:object = initialState, action: any) => {
  switch (action.type) {
    case ActionType.GET_SCHEDULE_LOAD: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case ActionType.GET_SCHEDULE_ERROR: {
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      };
    }
    case ActionType.GET_SCHEDULE_SUCCESS: {
      return {
        ...state,
        events: action.payload.events,
        isLoading: false,
        schedule_id: action.payload.scheduleId,
      };
    }
    case ActionType.POST_EVENT_ERROR: {
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      };
    }
    case ActionType.POST_EVENT_LOAD: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case ActionType.POST_EVENT_SUCCESS: {
      return {
        ...state,
        isLoading: false,
      };
    }
    case ActionType.LOGOUT_SCHEDULE: {
      return {
        ...initialState,
      };
    }
    default: {
      return state;
    }
  }
};

export default Schedule;
