import React from "react";
import Popup from "reactjs-popup";
import BlockUser from "../BlockUser";
import UserInfo from "../UserInfo";
import UpdateUser from "../UpdateUser";
import AddUser from "../AddUser";
import UnBlockUser from "../UnBlockUser";

const DataTable = (props) => {

    return (
        <div>

            <Popup modal trigger={
                <div className="col-lg-2">
                    <div className="form-group">
                        <label
                            className="hidden-mobile">&nbsp;</label>
                        <button type="submit"
                                name="submitButton"
                                className="btn btn-search form-control btn-success">
                            Thêm mới
                        </button>
                    </div>
                </div>
            }>
                <div>
                    <AddUser isClose={false}
                             searchUser={props.searchUser}
                             item={props.item}/>
                </div>
            </Popup>

            <table className="table dataTable table-hover table-head-custom">
                <thead>
                <tr>
                    <th title="Field #1" className="td1 text-center">STT</th>
                    <th title="Field #2" className="td2">Tên đăng nhập</th>
                    <th title="Field #3" className="td3">Họ Và Tên</th>
                    <th title="Field #4" className="td4">Tuổi</th>
                    <th title="Field #5" className="td5">Email</th>
                    <th title="Field #6" className="td6">Địa chỉ</th>
                    <th title="Field #8" className="td8">Trạng Thái</th>
                    <th title="Field #11" className="td11 action-tools">Thao Tác</th>
                </tr>
                </thead>
                <tbody>
                {props.items && props.items.length > 0 ? props.items.map((item, i) =>
                        (<RowData key={i}
                                  searchUser={props.searchUser}
                                  stt={(props.pageConfig.pageNo - 1) * props.pageConfig.pageSize + i + 1}
                                  item={item}/>
                        ))
                    :
                    <span>Không có dữ liệu </span>
                }
                </tbody>
            </table>
        </div>
    )
}

export default DataTable;

const RowData = (props) => {
    return (
        <tr>
            <td className="td1 text-center">{props.stt}</td>
            <td className="td2">{props.item.username}</td>
            <td className="td3">{props.item.fullname}</td>
            <td className="td4">{props.item.age}</td>
            <td className="td5">{props.item.email}</td>
            <td className="td6">{props.item.address}</td>
            <td className="td8">
                {props.item.status == 1 ?
                    <span className="label label-light-success label-lg label-light-inverse label-inline">active</span>
                    : (props.item.status == 0 ? <span
                            className="label label-light- warning label-lg label-light-inverse label-inline">inactive</span>
                        : <span
                            className="label label-light-danger label-lg label-light-inverse label-inline">delete</span>)}

            </td>
            <td className="td11 action-tools">
                <Popup modal trigger={
                    <a className="btn btn1 btn-xs btn-light btn-icon mr-1"
                       data-toggle="modal"
                       title="Edit" data-tooltip="tooltip">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                            <g id="Group_309" data-name="Group 309" transform="translate(-1302 -572)">
                                <rect id="Rectangle_75" data-name="Rectangle 75" width="16" height="16"
                                      transform="translate(1302 572)" fill="#01579b" opacity="0"/>
                                <path id="Path_19" data-name="Path 19"
                                      d="M2.594,2.058v1.1H1.1v7.757H8.856V8.92H9.942v1.993A1.091,1.091,0,0,1,8.856,12H1.1a1.058,1.058,0,0,1-.78-.32A1.045,1.045,0,0,1,0,10.914V3.157a1.062,1.062,0,0,1,.32-.78,1.062,1.062,0,0,1,.78-.32Zm2.351,7.4H2.25V6.773L9.023,0l2.709,2.7L8.588,5.828Zm5.24-6.76L9.023,1.546,3.336,7.233V8.371H4.5l3.323-3.31Z"
                                      transform="translate(1304.667 573.333)" fill="#01579b"/>
                            </g>
                        </svg>
                    </a>}>
                    <div>
                        <UpdateUser isClose={false}
                                    searchUser={props.searchUser}
                                    item={props.item}/>
                    </div>
                </Popup>
                {props.item.status == 1 ?
                    <Popup modal trigger={
                        <a className="btn btn2 btn-xs btn-light btn-icon mr-1"
                           data-dismiss="modal"
                           data-toggle="modal" title="lock" data-tooltip="tooltip">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                                <g id="Group_310" data-name="Group 310" transform="translate(-1326 -572)">
                                    <rect id="Frame" width="16" height="16" transform="translate(1326 572)"
                                          fill="#f44336" opacity="0"/>
                                    <path id="Padlock"
                                          d="M7.419,4.567V2.987a3.244,3.244,0,0,0-.125-.852c-.005-.019,0-.04-.01-.059s-.015-.027-.019-.043c-.022-.07-.034-.144-.06-.213a3.14,3.14,0,0,0-.3-.542L6.9,1.259c-.027-.041-.064-.071-.093-.111A3.136,3.136,0,0,0,6.59.878C6.572.86,6.55.846,6.532.828A2.729,2.729,0,0,0,6.278.61,2.339,2.339,0,0,0,6.06.455C6,.417,5.955.369,5.893.335S5.787.3,5.737.273C5.716.265,5.7.251,5.679.241,5.624.217,5.567.206,5.51.185a2.535,2.535,0,0,0-.326-.11,2.562,2.562,0,0,0-1.234,0,2.535,2.535,0,0,0-.326.11c-.056.021-.114.032-.169.056-.021.01-.037.023-.058.032C3.346.3,3.291.307,3.241.335s-.11.082-.167.121A2.339,2.339,0,0,0,2.855.61,2.729,2.729,0,0,0,2.6.828c-.018.018-.04.032-.058.049a3.136,3.136,0,0,0-.214.27c-.029.04-.066.07-.093.111l-.01.021a3.139,3.139,0,0,0-.3.542c-.026.069-.038.143-.06.213,0,.015-.015.027-.019.043s0,.04-.01.059a3.244,3.244,0,0,0-.125.852v1.58H0v5.558a1.922,1.922,0,0,0,.5,1.319A1.586,1.586,0,0,0,1.728,12H7.406a1.586,1.586,0,0,0,1.233-.555,1.922,1.922,0,0,0,.5-1.319V4.567ZM2.853,2.987a1.977,1.977,0,0,1,.108-.614,2.385,2.385,0,0,1,.119-.263,1.765,1.765,0,0,1,.239-.377.971.971,0,0,1,.069-.081,1.69,1.69,0,0,1,.469-.34A1.513,1.513,0,0,1,4,1.255a1.6,1.6,0,0,1,.569-.117,1.6,1.6,0,0,1,.569.117,1.513,1.513,0,0,1,.141.056,1.69,1.69,0,0,1,.469.34.971.971,0,0,1,.069.081,1.765,1.765,0,0,1,.239.377,2.385,2.385,0,0,1,.119.263,1.977,1.977,0,0,1,.108.614v1.58H2.853ZM8,10.125a.782.782,0,0,1-.181.523.528.528,0,0,1-.409.214H1.728a.528.528,0,0,1-.409-.214.782.782,0,0,1-.181-.523V5.719H8Z"
                                          transform="translate(1329.333 573.333)" fill="#f44336"/>
                                </g>
                            </svg>
                        </a>}>
                        <BlockUser item={props.item}
                                   isClose={false}
                                   searchUser={props.searchUser}/>
                    </Popup> : null}

                {props.item.status == 0 ?
                    <Popup modal trigger={
                        <a className="btn btn2 btn-xs btn-light btn-icon mr-1"
                           data-dismiss="modal"
                           data-toggle="modal" title="lock" data-tooltip="tooltip">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                                <g id="Group_310" data-name="Group 310" transform="translate(-1326 -572)">
                                    <rect id="Frame" width="16" height="16" transform="translate(1326 572)"
                                          fill="#f44336" opacity="0"/>
                                    <path id="Padlock"
                                          d="M7.419,4.567V2.987a3.244,3.244,0,0,0-.125-.852c-.005-.019,0-.04-.01-.059s-.015-.027-.019-.043c-.022-.07-.034-.144-.06-.213a3.14,3.14,0,0,0-.3-.542L6.9,1.259c-.027-.041-.064-.071-.093-.111A3.136,3.136,0,0,0,6.59.878C6.572.86,6.55.846,6.532.828A2.729,2.729,0,0,0,6.278.61,2.339,2.339,0,0,0,6.06.455C6,.417,5.955.369,5.893.335S5.787.3,5.737.273C5.716.265,5.7.251,5.679.241,5.624.217,5.567.206,5.51.185a2.535,2.535,0,0,0-.326-.11,2.562,2.562,0,0,0-1.234,0,2.535,2.535,0,0,0-.326.11c-.056.021-.114.032-.169.056-.021.01-.037.023-.058.032C3.346.3,3.291.307,3.241.335s-.11.082-.167.121A2.339,2.339,0,0,0,2.855.61,2.729,2.729,0,0,0,2.6.828c-.018.018-.04.032-.058.049a3.136,3.136,0,0,0-.214.27c-.029.04-.066.07-.093.111l-.01.021a3.139,3.139,0,0,0-.3.542c-.026.069-.038.143-.06.213,0,.015-.015.027-.019.043s0,.04-.01.059a3.244,3.244,0,0,0-.125.852v1.58H0v5.558a1.922,1.922,0,0,0,.5,1.319A1.586,1.586,0,0,0,1.728,12H7.406a1.586,1.586,0,0,0,1.233-.555,1.922,1.922,0,0,0,.5-1.319V4.567ZM2.853,2.987a1.977,1.977,0,0,1,.108-.614,2.385,2.385,0,0,1,.119-.263,1.765,1.765,0,0,1,.239-.377.971.971,0,0,1,.069-.081,1.69,1.69,0,0,1,.469-.34A1.513,1.513,0,0,1,4,1.255a1.6,1.6,0,0,1,.569-.117,1.6,1.6,0,0,1,.569.117,1.513,1.513,0,0,1,.141.056,1.69,1.69,0,0,1,.469.34.971.971,0,0,1,.069.081,1.765,1.765,0,0,1,.239.377,2.385,2.385,0,0,1,.119.263,1.977,1.977,0,0,1,.108.614v1.58H2.853ZM8,10.125a.782.782,0,0,1-.181.523.528.528,0,0,1-.409.214H1.728a.528.528,0,0,1-.409-.214.782.782,0,0,1-.181-.523V5.719H8Z"
                                          transform="translate(1329.333 573.333)" fill="green"/>
                                </g>
                            </svg>
                        </a>}>
                        <UnBlockUser item={props.item}
                                     isClose={false}
                                     searchUser={props.searchUser}/>
                    </Popup> : null}

                <Popup modal trigger={
                    <a className="btn btn3 btn-xs btn-light btn-icon mr-1"
                       data-toggle="modal"
                       title="Info" data-tooltip="tooltip">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                            <g id="Group_311" data-name="Group 311" transform="translate(-1350 -572)">
                                <rect id="Rectangle_76" data-name="Rectangle 76" width="16" height="16"
                                      transform="translate(1350 572)" fill="#fff" opacity="0"/>
                                <path id="Path_16" data-name="Path 16"
                                      d="M11.531,3.67a5.976,5.976,0,0,0-3.2-3.2A5.8,5.8,0,0,0,6,0,5.8,5.8,0,0,0,3.67.469a5.976,5.976,0,0,0-3.2,3.2A5.815,5.815,0,0,0,0,6,5.822,5.822,0,0,0,.469,8.33a5.976,5.976,0,0,0,3.2,3.2A5.818,5.818,0,0,0,6,12a5.822,5.822,0,0,0,2.33-.469,5.976,5.976,0,0,0,3.2-3.2A5.822,5.822,0,0,0,12,6a5.815,5.815,0,0,0-.469-2.33M10.473,7.888a4.816,4.816,0,0,1-2.585,2.585,4.781,4.781,0,0,1-3.776,0A4.816,4.816,0,0,1,1.527,7.888,4.633,4.633,0,0,1,1.138,6a4.639,4.639,0,0,1,.389-1.889A4.819,4.819,0,0,1,4.112,1.527,4.629,4.629,0,0,1,6,1.138a4.629,4.629,0,0,1,1.888.389,4.819,4.819,0,0,1,2.585,2.584A4.639,4.639,0,0,1,10.862,6a4.633,4.633,0,0,1-.389,1.888"
                                      transform="translate(1352 574)" fill="#01579b"/>
                                <path id="Path_17" data-name="Path 17"
                                      d="M5.785,2.819a.647.647,0,0,1,0,.911.643.643,0,0,1-1.1-.456.644.644,0,0,1,1.1-.455"
                                      transform="translate(1352.669 574.376)" fill="#01579b"/>
                                <path id="Path_18" data-name="Path 18"
                                      d="M5.319,8.676h0a.554.554,0,0,1-.554-.554V4.792a.554.554,0,1,1,1.109,0V8.121a.554.554,0,0,1-.554.554"
                                      transform="translate(1352.681 574.605)" fill="#01579b"/>
                            </g>
                        </svg>
                    </a>}>
                    <UserInfo item={props.item} isClose={false}/>
                </Popup>
            </td>
        </tr>
    );
}

