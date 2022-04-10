import { USER_LOGIN } from "./action";

const initState = { token: "", data: [] }

export const LogInReducer = (store = initState, { type, payload }) => {
    switch (type) {
        case USER_LOGIN:
            return {
                ...store,
                token: payload,
                data: payload
            }
        default:
            return store;
    }

} 