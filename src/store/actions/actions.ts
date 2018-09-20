import getAuthActions, {AuthActions} from "./auth";
import getScheduleActions, {ScheduleActions} from "./schedule";

const ActionType = {
    ...AuthActions,
    ...ScheduleActions,
};

export const Actions = {
    ...getAuthActions,
    ...getScheduleActions,
};

export default ActionType;