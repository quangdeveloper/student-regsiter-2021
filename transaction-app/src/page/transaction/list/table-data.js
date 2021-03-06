import React from "react";

export default function TransactionTable(props) {

    return (
        <div>
            <div className="tool-action">
                <div className="text-right">
                    <a href="#" className="btn btn-light-success">
                    <span className="svg-icon">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                        <g id="Group_314" data-name="Group 314" transform="translate(-1248 -447)">
                          <rect id="Rectangle_63" data-name="Rectangle 63" width="24" height="24"
                                transform="translate(1248 447)"
                                fill="#388e3c" opacity="0"/>
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
                    </span> Xu???t File Excel</a>
                </div>
            </div>
            <table className="table dataTable table-hover table-head-custom" id="kt_datatable2">
                <thead>
                <tr>
                    <th className="text-center th1">STT</th>
                    <th className="th2">M??<br/>Giao D???ch</th>
                    <th className="th3">????n V??? Thanh To??n</th>
                    <th className="th4">H??nh Th???c<br/>
                        Thanh To??n
                    </th>
                    <th className="th5">M?? Sinh Vi??n</th>
                    <th className="th6">H??? V?? T??n</th>
                    <th className="th7">Ng??y Giao D???ch</th>
                    <th className="th8 text-right">S??? Ti???n N??? Ph?? (VND)</th>
                    <th className="th9 text-right">S??? Ti???n Giao D???ch (VND)</th>
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
            <td className="td2">{props.item.transactionId}</td>
            <td className="td3">{props.item.paymentUnit}</td>
            <td className="td4">{props.item.paymentForm}</td>
            <td className="td5">{props.item.studentId}</td>
            <td className="td6">{props.item.fullName}</td>
            <td className="td7">{props.item.timeTransaction}<br/>{props.item.dateTransaction}</td>
            <td className="td8 text-right">{props.item.moneyDebtFee}</td>
            <td className="td9 text-right">{props.item.moneyTransaction}</td>
        </tr>
    )
}

