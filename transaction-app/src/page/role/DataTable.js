import React from "react";
import Popup from "reactjs-popup";
import RoleInfo from "./modal/RoleInfo";
import UpdateRole from "./modal/UpdateRole";


const DataTable = (props) => {

    return (

            <table className="table dataTable table-hover table-head-custom">
                <thead>
                <tr>
                    <th title="Field #1" className="td1 text-center">STT</th>
                    <th title="Field #2" className="td2">Tên</th>
                    <th title="Field #8" className="td8">Trạng Thái</th>
                    <th title="Field #11" className="td11 action-tools">Thao Tác</th>
                </tr>
                </thead>
                <tbody>
                {props.items && props.items.length > 0 ? props.items.map((item, i) =>
                        (<RowData key={i}
                                  searchRole={props.searchRole}
                                  stt={(props.pageConfig.pageNo - 1) * props.pageConfig.pageSize + i + 1}
                                  item={item}/>
                        ))
                    :
                    <span>Không có dữ liệu </span>
                }
                </tbody>
            </table>
    )
}

export default DataTable;

const RowData = (props) => {
    return (
        <tr>
            <td className="td1 text-center">{props.stt}</td>
            <td className="td2">{props.item.name}</td>
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
                        <UpdateRole isClose={false}
                                    searchRole={props.searchRole}
                                    item={props.item}/>
                    </div>
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
                    </a>}>
                    <RoleInfo item={props.item} isClose={false}/>
                </Popup>
            </td>
        </tr>
    );
}

