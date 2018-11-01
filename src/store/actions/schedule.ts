export const ScheduleActions = {
  GET_SCHEDULE: 'GET_SCHEDULE',
  GET_SCHEDULE_ERROR: 'GET_SCHEDULE_ERROR',
  GET_SCHEDULE_LOAD: 'GET_SCHEDULE_LOAD',
  GET_SCHEDULE_SUCCESS: 'GET_SCHEDULE_SUCCESS',
  POST_EVENT: 'POST_EVENT',
  POST_EVENT_ERROR: 'POST_EVENT_ERROR',
  POST_EVENT_LOAD: 'POST_EVENT_LOAD',
  POST_EVENT_SUCCESS: 'POST_EVENT_SUCCESS',
  REFRESH_STATUSES_SCHEDULE: 'REFRESH_STATUSES_SCHEDULE',
};

const getScheduleActions = () => ({
  getSchedule: () => ({ type: ScheduleActions.GET_SCHEDULE }),
  getScheduleError: () => ({ type: ScheduleActions.GET_SCHEDULE_ERROR }),
  getScheduleLoad: () => ({ type: ScheduleActions.GET_SCHEDULE_LOAD }),
  getScheduleSuccess: (schedule: object) => ({type: ScheduleActions.GET_SCHEDULE_SUCCESS,
    payload: schedule}),
  postEvent: (event: string) => ({ type: ScheduleActions.POST_EVENT, payload: event }),
  postEventError: () => ({ type: ScheduleActions.POST_EVENT_ERROR }),
  postEventLoad: () => ({ type: ScheduleActions.POST_EVENT_LOAD }),
  postEventSuccess: () => ({ type: ScheduleActions.POST_EVENT_SUCCESS }),
  refreshStatusesSchedule: () => ({ type: ScheduleActions.REFRESH_STATUSES_SCHEDULE }),
});

export default getScheduleActions();
