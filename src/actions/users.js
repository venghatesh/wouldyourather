import { GET_USERS } from './actionTypes';
import {addUser} from "../utils/api"
export function getUsers(users) {
  return {
    type: GET_USERS,
    users,
  };
}
export function handleAddUser(username, name, avatarURL) {
    return (dispatch) => {
        return addUser({
            username,
            name,
            avatarURL
        })
            .then((users) => {
                dispatch(getUsers(users))

            })
    }
}
