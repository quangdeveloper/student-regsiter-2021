import {callAPI} from "../../utils/call-api";
import {users} from "../../utils/api-context";


const url = users;

export const searchData = (params) => {
    return callAPI('POST', url + '/find_by_filter',  params, {});
}

export const findByID = (params) => {
    return callAPI('POST',url, params);
}

export const createUser = (data) => {
    return callAPI('POST', url, data);
}

export const updateUser = (data) => {
    return callAPI('POST', url, data);
}
