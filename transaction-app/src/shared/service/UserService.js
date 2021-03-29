import {callAPI} from "../../utils/call-api";
import {users} from "../../utils/api-context";


const url = users;

export const login =  (data) => {
    return callAPI('POST', url+ '/login',  data);
}

export const searchData =  (data) => {
     return callAPI('POST', url + '/find_by_filter',  data);
}

export const findByID = (data) => {
    return callAPI('POST',url , data);
}

export const createUser = (data) => {
    return callAPI('POST', url + '/create', data);
}

export const updateUser = (data) => {
    return callAPI('POST', url  + '/update', data);
}
