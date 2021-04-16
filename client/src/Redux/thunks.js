import axios from "axios";
import {
  loadMessages,
  removeMessage,
  changeStatus,
  changeSetup,
} from "./Actions";

export const load = (link) => async (dispatch) => {
  try {
    if (link !== "") {
      const response = await axios.get(link, {
        headers: {
          "Content-Type": "application/json",
          "access-control-allow-origin": "*",
          "Access-Control-Allow-Headers": "Content-type",
          "X-Requested-With": "XMLHttpRequest",
        },
      });
      dispatch(loadMessages(response.data));
    }
  } catch (e) {
    console.log(e);
  }
};

export const remove = (id) => async (dispatch) => {
  try {
    dispatch(removeMessage(id));
  } catch (e) {
    console.log(e);
  }
};

export const status = () => async (dispatch) => {
  try {
    dispatch(changeStatus());
  } catch (e) {
    console.log(e);
  }
};

export const setup = (payload) => async (dispatch) => {
  try {
    dispatch(changeSetup(payload));
  } catch (e) {
    console.log(e);
  }
};
