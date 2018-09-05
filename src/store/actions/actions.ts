import getAuthActions, {AuthActions} from "./auth";

const ActionType = {
    ...AuthActions,
};

export const Actions = {
    ...getAuthActions,
};

export default ActionType;