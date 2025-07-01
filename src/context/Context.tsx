import axios from "axios";
import { createContext, useReducer, type FC, type ReactNode } from "react";
import { API_TG, API_TG_Photo, CHAT_ID } from "../hook/getEnv";

interface ActionType {
    type: "info" | "order";
    payload: string | null | { message: string, image: string };
}

interface ContextType {
    dispatch: React.Dispatch<ActionType>;
}

export const Context = createContext<ContextType>({
    dispatch: () => { }
})

function reducerFn(state: null, action: ActionType) {
    switch (action.type) {
        case "info": {
            const data = {
                parse_mode: "html",
                text: action.payload,
                chat_id: CHAT_ID
            }
            axios.post(API_TG, data)
            return null
        }
        case "order": {
            const data = {
                parse_mode: "html",
                caption: (action.payload as { message: string }).message,
                photo: (action.payload as { image: string }).image,
                chat_id: CHAT_ID
            }
            axios.post(API_TG_Photo, data)
            return null
        }
        default: return state
    }
}

export const ReducerContext: FC<{ children: ReactNode }> = ({ children }) => {
    const [_state, dispatch] = useReducer(reducerFn, null)

    return <Context.Provider value={{ dispatch }}>{children}</Context.Provider>
}