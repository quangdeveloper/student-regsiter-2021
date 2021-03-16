import {callAPI} from "../../utils/call-api";
import { transaction} from "../../utils/api-context";

const url = transaction;

export const searchData = (params) => {
    return callAPI('GET', url, {}, params);
}

