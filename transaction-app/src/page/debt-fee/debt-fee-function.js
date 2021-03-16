import {callAPI} from "../../utils/call-api";
import {debtFee} from "../../utils/api-context";


const url = debtFee;

export const searchData = (params) => {
    return callAPI('GET', url, {}, params);
}

export const findByID = (params) => {
    return callAPI(url, params);
}

export const createQrTerminal = (data) => {
    return callAPI('POST', url, data);
}

export const updateQrTerminal = (data) => {
    return callAPI('PUT', url, data);
}
