import React from "react";

export default function TransactionTable(props) {

    return (
        <div>
            <table className="table dataTable table-hover table-head-custom" id="kt_datatable2">
                <thead>
                <tr>
                    <th className="text-center th1">STT</th>
                    <th className="th2">Mã<br/>Giao Dịch</th>
                    <th className="th3">Đơn Vị Thanh Toán</th>
                    <th className="th4">Hình Thức<br/>
                        Thanh Toán
                    </th>
                    <th className="th5">Mã Sinh Viên</th>
                    <th className="th6">Họ Và Tên</th>
                    <th className="th7">Ngày Giao Dịch</th>
                    <th className="th8 text-right">Số Tiền Nợ Phí (VND)</th>
                    <th className="th9 text-right">Số Tiền Giao Dịch (VND)</th>
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

