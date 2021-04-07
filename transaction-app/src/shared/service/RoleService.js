import {callAPI} from "../../utils/call-api";
import {role} from "../../utils/api-context";


const url = role;

export const searchData = (data) => {
    return callAPI('POST', url + '/get_all', null);
}

export const createRole = (data) => {
    return callAPI('POST', url + '/create', data);
}

export const updateRole = (data) => {
    return callAPI('POST', url + '/update', data);
}
