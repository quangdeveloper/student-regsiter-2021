import {callAPI} from "../../utils/call-api";
import {users} from "../../utils/api-context";
import log from 'loglevel';
import remote from 'loglevel-plugin-remote';

const url = users;

const customJSON = log => ({
    msg: log.message,
    level: log.level.label,
    stacktrace: log.stacktrace
});


export const login = (data) => {
    return callAPI('POST', url + '/login', data);
}

export const searchData = (data) => {
    // remote.apply(log, {format: customJSON, url: 'http://localhost:8888/student/logger'});
    // log.enableAll();
    // log.info('UserService  call post api  url = /find_by_filter  with data' + JSON.stringify(data));
    return callAPI('POST', url + '/find_by_filter', data);
}

export const findByID = (data) => {
    return callAPI('POST', url, data);
}

export const createUser = (data) => {
    return callAPI('POST', url + '/create', data);
}

export const updateUser = (data) => {
    return callAPI('POST', url + '/update', data);
}
export const blockAndUnbLockUser = (data) => {
    return callAPI('POST', url + '/block', data);
}
