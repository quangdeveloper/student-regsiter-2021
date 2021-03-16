import React from "react";
import Popup from "reactjs-popup";
import Block from "../block/block";
import AddOrEditDebtFee from "../add-edit/add-edit";
import DebtFeeInfo from "../info/debt-fee-info";

export default function DebtFeeTable(props) {
    return (
        <div>
            <div className="tool-action">
                <div className="text-right">
                    <a href="#" className="btn btn-light-success">
                        <span className="svg-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                <g id="Group_314" data-name="Group 314" transform="translate(-1248 -447)">
                                    <rect id="Rectangle_63" data-name="Rectangle 63" width="24" height="24"
                                          transform="translate(1248 447)" fill="#388e3c" opacity="0"/>
                                    <g id="Group_313" data-name="Group 313">
                                        <path id="Path_9" data-name="Path 9"
                                              d="M16.84,5.667c-.075-.075-.075-.149-.149-.224L11.471.224C11.4.149,11.321.075,11.247.075a.448.448,0,0,0-.3-.075H4.237A2.2,2.2,0,0,0,2,2.237V8.949a.7.7,0,0,0,.746.746.7.7,0,0,0,.746-.746V2.237a.7.7,0,0,1,.746-.746H10.2V5.966a.7.7,0,0,0,.746.746h4.474V8.949a.746.746,0,0,0,1.491,0V5.966A.448.448,0,0,0,16.84,5.667ZM11.694,2.535,14.379,5.22H11.694Z"
                                              transform="translate(1251 449)" fill="#388e3c"/>
                                        <path id="Path_10" data-name="Path 10"
                                              d="M5.11.788A.7.7,0,0,0,4.925.322.618.618,0,0,0,3.91.434L2.6,2.283,1.258.388A.646.646,0,0,0,.239.287.714.714,0,0,0,.017.815a.7.7,0,0,0,.145.435L1.7,3.429.164,5.648A.8.8,0,0,0,0,6.13a.664.664,0,0,0,.184.456.629.629,0,0,0,1.009-.122l1.318-1.9L3.869,6.486a.671.671,0,0,0,.552.3.691.691,0,0,0,.446-.183.682.682,0,0,0,.234-.54.752.752,0,0,0-.136-.443L3.4,3.414,4.964,1.223A.731.731,0,0,0,5.11.788"
                                              transform="translate(1253 460.164)" fill="#388e3c"/>
                                        <path id="Path_11" data-name="Path 11"
                                              d="M11.647,5.335H9.624V.85A.718.718,0,0,0,9.413.325a.69.69,0,0,0-.988,0,.724.724,0,0,0-.2.523V6.023a.734.734,0,0,0,.2.521.649.649,0,0,0,.491.211h2.737a.662.662,0,0,0,.486-.2.7.7,0,0,0,.2-.506.712.712,0,0,0-.2-.516.663.663,0,0,0-.486-.2"
                                              transform="translate(1250.55 460.155)" fill="#388e3c"/>
                                        <path id="Path_12" data-name="Path 12"
                                              d="M19.109,3.911a1.5,1.5,0,0,0-.432-.6,2.226,2.226,0,0,0-.689-.375,6.738,6.738,0,0,0-.91-.239,4.5,4.5,0,0,1-.641-.176.84.84,0,0,1-.352-.225.474.474,0,0,1-.1-.319A.449.449,0,0,1,16.07,1.7a.661.661,0,0,1,.3-.209,1.453,1.453,0,0,1,.973-.019,2.994,2.994,0,0,1,.454.178,1.35,1.35,0,0,1,.331.217.577.577,0,0,0,.8-.1.716.716,0,0,0,.191-.485.786.786,0,0,0-.306-.616A2.5,2.5,0,0,0,17.99.183a3.051,3.051,0,0,0-2.2.045,1.965,1.965,0,0,0-.836.688,1.91,1.91,0,0,0-.317,1.1,2.133,2.133,0,0,0,.131.764,1.682,1.682,0,0,0,.393.6,2.02,2.02,0,0,0,.63.412,3.557,3.557,0,0,0,.842.231,3.265,3.265,0,0,1,.752.19.988.988,0,0,1,.394.265.514.514,0,0,1,.109.335.387.387,0,0,1-.11.268.956.956,0,0,1-.357.233,1.4,1.4,0,0,1-.512.091,1.729,1.729,0,0,1-.71-.128,2.508,2.508,0,0,1-.6-.394.625.625,0,0,0-.872.066.718.718,0,0,0-.187.491.781.781,0,0,0,.077.334.894.894,0,0,0,.211.281,2.694,2.694,0,0,0,.964.588,3.544,3.544,0,0,0,1.114.165,2.729,2.729,0,0,0,1.134-.239,2.145,2.145,0,0,0,.866-.7,1.864,1.864,0,0,0,.34-1.116,2.3,2.3,0,0,0-.14-.846"
                                              transform="translate(1248.665 460.185)" fill="#388e3c"/>
                                    </g>
                                </g>
                            </svg>
                        </span> Xuất File Excel
                    </a>
                </div>
            </div>
            <table className="table dataTable table-hover table-head-custom" id="kt_datatable2">
                <thead>
                <tr>
                    <th title="Field #1" className="td1 text-center">STT</th>
                    <th title="Field #2" className="td2">Mã Sinh Viên</th>
                    <th title="Field #3" className="td3">Họ Và Tên</th>
                    <th title="Field #4" className="td4">Mã Khoa</th>
                    <th title="Field #5" className="td5">Hình Thức
                        Thanh Toán
                    </th>
                    <th title="Field #6" className="td6">Loại Học Phí</th>
                    <th title="Field #7" className="text-right td7">Số Tiền (VND)</th>
                    <th title="Field #8" className="td8">Trạng Thái</th>
                    <th title="Field #9" className="td9">Người Upload</th>
                    <th title="Field #10" className="td10">Người Cập Nhật</th>
                    <th title="Field #11" className="td11 action-tools text-center">Thao Tác</th>
                </tr>
                </thead>
                <tbody>
                {props.items.map((item, i) => (<RowData key={i} stt={i + 1} item={item}/>))}
                </tbody>
            </table>
        </div>
    )
}

function RowData(props) {
    return (
        <tr>
            <td className="td1 text-center">{props.stt}</td>
            <td className="td2">{props.item.studentId}</td>
            <td className="td3">{props.item.fullName}</td>
            <td className="td4">{props.item.facultyId}</td>
            <td className="td5">{props.item.paymentForm}</td>
            <td className="td6">{props.item.studyFeeType}</td>
            <td className="td7" align="right">{props.item.money}</td>
            <td className="td8">
                <span className="label label-lg label-light-inverse label-inline"> {props.item.status}</span>
            </td>
            <td className="td9">{props.item.userUpload}<br/>{props.item.dateUpload}
            </td>
            <td className="td10">{props.item.userUpdate}<br/>{props.item.dateUpdate}
            </td>
            <td className="td11 action-tools text-right">
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
                    </a>} >
                    <div>
                        <AddOrEditDebtFee isClose = {false} />
                    </div>
                </Popup>
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
                    </a>} >
                    <Block/>
                </Popup>
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
                    </a>} >
                    <DebtFeeInfo debtFee = {props.item}  isClose = {false} />
                </Popup>
            </td>
        </tr>
    );
}

