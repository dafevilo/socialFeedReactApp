import {
  LOAD_MESSAGES,
  REMOVE_MESSAGE,
  CHANGE_SETUP,
  CHANGE_STATUS,
} from "./Actions";

//http://api.massrelevance.com/MassRelDemo/kindle.json

const initialState = {
  messages: [],
  setUp: {
    status: false,
    link: "",
    cant: 0,
    id: 1,
  },
};

export const messages = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case LOAD_MESSAGES:
      return {
        ...state,
        messages: payload,
      };

    case REMOVE_MESSAGE:
      return {
        ...state,
        messages: state.messages.filter((message) => message.id !== payload),
      };

    case CHANGE_STATUS:
      return {
        ...state,
        setUp: {
          ...state.setUp,
          status: !state.setUp.status,
        },
      };

    case CHANGE_SETUP:
      const link = payload.link;
      const cant = parseInt(payload.cant);
      const id = parseInt(payload.id);
      return {
        ...state,
        setUp: {
          ...state.setUp,
          status: !state.setUp.status,
          link: link ? link : state.setUp.link,
          cant: cant ? cant : state.setUp.cant,
          id: id ? id : state.setUp.id,
        },
      };

    default:
      return state;
  }
};
