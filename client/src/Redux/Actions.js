export const LOAD_MESSAGES = "LOAD_MESSAGES";
export const loadMessages = (payload) => ({
  type: LOAD_MESSAGES,
  payload,
});

export const REMOVE_MESSAGE = "REMOVE_MESSAGE";
export const removeMessage = (payload) => ({
  type: REMOVE_MESSAGE,
  payload,
});

export const CHANGE_STATUS = "CHANGE_STATUS";
export const changeStatus = () => ({
  type: CHANGE_STATUS,
});

export const CHANGE_SETUP = "CHANGE_SETUP";
export const changeSetup = (payload) => ({
  type: CHANGE_SETUP,
  payload,
});
