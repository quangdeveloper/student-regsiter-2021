import React, {useState, useEffect} from "react";
import TransactionTable from "./table-data";
import './transaction-list.css';
import {searchData} from "../transaction-function";
import {formatterDateDD_MM_YYYY, formatterDateHH_MM_SS} from "../../../utils/date-time-formatter";


export default function TransactionList(props) {

    const dateFormatter = formatterDateDD_MM_YYYY();
    const timeFormatter = formatterDateHH_MM_SS();

    const [transactionId, setTransactionId] = useState(0);
    const [studentId, setStudentId] = useState(0);
    const [fullName, setFullName] = useState("");
    const [paymentForm, setPaymentForm] = useState("");
    const [paymentUnit, setPaymentUnit] = useState("");
    const [fromDate, setFromDate] = useState(dateFormatter.format(new Date()));
    const [toDate, setToDate] = useState(dateFormatter.format(new Date()));
    const [listTransaction, setListTransaction] = useState([
        {
            transactionId: '001',
            paymentUnit: 'BIDV',
            paymentForm: 'Mobile banking',
            studentId: '001',
            fullName: 'Nguyen Van A',
            timeTransaction: timeFormatter.format(new Date()).toString(),
            dateTransaction: dateFormatter.format(new Date()).toString(),
            moneyDebtFee: 100000,
            moneyTransaction: 300000,
        },
    ]);

    useEffect(() => {
        const params = {};
        searchData(params)
            .then(result => {
                setListTransaction(result.data.value);
            })
            .then(error => {
                window.alert("Error: " + error.message);
            })
    }, [transactionId, studentId, fullName, paymentForm, paymentUnit, fromDate, toDate]);

    return (
        <div>
            <div id="headerMobile"></div>
            <div className="d-flex flex-column flex-root">
                <div className="d-flex flex-row flex-column-fluid page">
                    <div className="d-flex flex-column flex-row-fluid wrapper" id="kt_wrapper">
                        <div className="subheader subheader-sticky py-2 py-lg-2 subheader-solid" id="kt_subheader">
                            <div
                                className="container-fluid d-flex align-items-center justify-content-between flex-wrap flex-sm-nowrap">
                                <div className="d-flex align-items-center flex-wrap mr-2">
                                    <h5 className="title-main  mt-2 mb-2 mr-5">Tổng hợp danh sách giao dịch</h5>
                                </div>
                            </div>
                        </div>
                        <div className="content d-flex flex-column flex-column-fluid" id="kt_content">
                            <div className="d-flex flex-column-fluid">
                                <div className="container">
                                    <div className="box-filter">
                                        <div className="row">
                                            <div className="col-lg-12">
                                                <div className="card card-custom card-filter card-stretch gutter-b">
                                                    <form className="form" id="kt_form_search">
                                                        <div className="card-body">
                                                            <div className="row">
                                                                <div className="col-lg-3">
                                                                    <div className="form-group">
                                                                        <label>Mã giao dịch</label>
                                                                        <input type="text" name="text"
                                                                               className="form-control"
                                                                               placeholder="Nhập Mã giao dịch"
                                                                               value={transactionId}
                                                                               onChange={e => setTransactionId(e.target.value)}/>
                                                                    </div>
                                                                </div>
                                                                <div className="col-lg-3">
                                                                    <div className="form-group">
                                                                        <label>Mã sinh viên</label>
                                                                        <input type="text" name="text"
                                                                               className="form-control"
                                                                               placeholder="Nhập mã sinh viên"
                                                                               value={studentId}
                                                                               onChange={e => setStudentId(e.target.value)}/>
                                                                    </div>
                                                                </div>
                                                                <div className="col-lg-3">
                                                                    <div className="form-group">
                                                                        <label>Họ và tên</label>
                                                                        <input type="text" name="text"
                                                                               className="form-control"
                                                                               value={fullName}
                                                                               onChange={e => setFullName(e.target.value)}/>
                                                                    </div>
                                                                </div>
                                                                <div className="col-lg-3">
                                                                    <div className="form-group">
                                                                        <label>Hình thức thanh toán</label>
                                                                        <select className="form-control" name="select" value={paymentForm}
                                                                                onChange={e => setPaymentForm(e.target.value)}>
                                                                            <option value="all">Tất cả</option>
                                                                            <option value="Đã thanh toán">Đã thanh
                                                                                toán
                                                                            </option>
                                                                            <option value="Chưa thanh toán">Chưa thanh
                                                                                toán
                                                                            </option>
                                                                            <option value="Hết hạn thanh toán">Hết hạn
                                                                                thanh toán
                                                                            </option>
                                                                        </select>
                                                                    </div>
                                                                </div>
                                                                <div className="col-lg-3">
                                                                    <div className="form-group">
                                                                        <label>Đơn vị thanh toán</label>
                                                                        <select className="form-control " name="select"
                                                                                value={paymentUnit}
                                                                                onChange={e => setPaymentUnit(e.target.value)}>
                                                                            <option value="all">Tất cả</option>
                                                                            <option value="1">Option1</option>
                                                                            <option value="2">Option2</option>
                                                                        </select>
                                                                    </div>
                                                                </div>
                                                                <div className="col-lg-3">
                                                                    <div className="form-group">
                                                                        <label>Từ ngày:</label>
                                                                        <div
                                                                            className="input-group date b-datepicker mb-2">
                                                                            <input type="text"
                                                                                   className="form-control"
                                                                                   placeholder="Top left"
                                                                                   value={fromDate}
                                                                                   onChange={e => setFromDate(e.target.value)}/>
                                                                            <div className="input-group-append">
                                                                                <span className="input-group-text py-0">
                                                                                  <img className="ic-sm"
                                                                                       src="custom/assets/media/svg/ic-calendar.svg"
                                                                                       alt=""/>
                                                                                </span>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col-lg-3">
                                                                    <div className="form-group">
                                                                        <label>Đến ngày:</label>
                                                                        <div
                                                                            className="input-group date b-datepicker mb-2">
                                                                            <input type="text" className="form-control"
                                                                                   placeholder="Chọn ngày"
                                                                                value={toDate} onChange={e => setToDate(e.target.value)}/>
                                                                            <div className="input-group-append">
                                                                                <span className="input-group-text py-0">
                                                                                  <img className="ic-sm"
                                                                                       src="custom/assets/media/svg/ic-calendar.svg"
                                                                                       alt=""/>
                                                                                </span>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col-lg-3">
                                                                    <div className="form-group">
                                                                        <label className="hidden-mobile">&nbsp;</label>
                                                                        <button type="submit" name="submitButton"
                                                                                className="btn btn-search form-control btn-primary">
                                                                            <i className="las la-search"></i> Tìm kiếm
                                                                        </button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <div className="card card-custom card-stretch gutter-b">
                                                <div className="card-body">
                                                    <div id="datatables2">
                                                        <TransactionTable items={listTransaction}/>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

