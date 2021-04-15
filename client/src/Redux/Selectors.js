import { createSelector } from "reselect";

export const getAllMessages = (state) => state.messages.messages;
export const getSetUp = (state) => state.messages.setUp;

export const getLimitMessages = createSelector(
  [getAllMessages, getSetUp],
  (messages, setup) => {
    const limited = [];
    if (setup.id > 1) {
      for (let i = 0; i < messages.length; i++) {
        if (setup.id === messages[i].id) {
          for (let j = i; j < i + setup.cant; j++) {
            limited.push(messages[j]);
          }
        }
      }
    } else {
      for (let i = 0; i < setup.cant; i++) {
        limited.push(messages[i]);
      }
    }
    return limited;
  }
);
