import React, {useState, useEffect} from "react";
import DebtFeeTable from "./debt-fee-table";
import './debtfee.css';
import Popup from "reactjs-popup";
import Upload from "../upload/upload";
import {formatterDateDD_MM_YYYY} from "../../../utils/date-time-formatter";
import {searchData} from "../debt-fee-function";

export default function DebtFeeList() {

    const formatterDate = formatterDateDD_MM_YYYY();
    const [studentId, setStudentId] = useState(0);
    const [fullName, setFullName] = useState('');
    const [facultyId, setFacultyId] = useState(0);
    const [studyFeeType, setStudyFeeType] = useState(0);
    const [paymentForm, setPaymentForm] = useState(0);
    const [status, setStatus] = useState(0);
    const [fromDate, setFromDate] = useState(formatterDate.format(new Date()));
    const [toDate, setToDate] = useState(formatterDate.format(new Date()));
    const [listDebtFees, setListDebtFees] = useState([
        {
            id: 1,
            studentId: 1,
            fullName: 'nguyen quang',
            facultyId: '003',
            paymentForm: 'VNPAY',
            studyFeeType: 'Học phí 2020',
            money: '100000',
            status: 'Chưa thanh toán',
            userUpload: 'quangnv',
            dateUpload: "1/11/2021",
            userUpdate: 'quangnv',
            dateUpdate: "1/11/2021"
        },
        {
            id: 2,
            studentId: 2,
            fullName: 'nguyen quang',
            facultyId: '003',
            paymentForm: 'VNPAY gbgb',
            studyFeeType: 'Học phí 2020',
            money: '100000',
            status: 'Chưa thanh toán',
            userUpload: 'quangnv',
            dateUpload: "1/11/2021",
            userUpdate: 'quangnv',
            dateUpdate: "1/11/2021",
        }
    ]);

    useEffect(() => {
        const params = {
            studentId: studentId,
            fullName: fullName,
            facultyId: facultyId,
            studyFeeType: studyFeeType,
            paymentForm: paymentForm,
            status: status,
            fromDate: fromDate,
            toDate: toDate
        };

        searchData(params)
            .then(result => {
                setListDebtFees(result.data.value.Result);
            })
            .then(error => {
                return (
                    <div>
                        System error!
                    </div>
                )
            })

    }, [studentId, fullName, facultyId, studyFeeType, paymentForm, status, fromDate, toDate])

    return (
        <div>
            <div id="headerMobile"></div>
            <div className="d-flex flex-column flex-root">
                <div className="d-flex flex-row flex-column-fluid page">
                    <div id="aside"></div>
                    <div className="d-flex flex-column flex-row-fluid wrapper" id="kt_wrapper">
                        <div id="header"></div>
                        <div className="subheader subheader-sticky py-2 py-lg-2 subheader-solid" id="kt_subheader">
                            <div className="container-fluid d-flex align-items-center justify-content-between flex-wrap flex-sm-nowrap">
                                <div className="d-flex align-items-center flex-wrap mr-2">
                                    <h5 className="title-main  mt-2 mb-2 mr-5">Tổng hợp danh sách nợ phí</h5>
                                </div>
                                <div className="d-flex align-items-center">
                                    <Popup trigger={
                                        <a className="btn btn-light-primary">
                                        <span className="svg-icon">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30"
                                                 viewBox="0 0 24 24">
                                                <g id="ic_ipload" transform="translate(-1227 -110)">
                                                    <rect id="Rectangle_48" data-name="Rectangle 48" width="24"
                                                          height="24" transform="translate(1227 110)" fill="#01579b"
                                                          opacity="0"/>
                                                    <path id="Path_3" data-name="Path 3"
                                                          d="M14.794.79a6.561,6.561,0,0,1,1.392,1.062,6.4,6.4,0,0,1,1.062,1.41,6.223,6.223,0,0,1,.605,1.667,6.222,6.222,0,0,1,.128,1.831,5.856,5.856,0,0,1-.367,1.722,6.679,6.679,0,0,1-.824,1.538,6.424,6.424,0,0,1-1.245,1.264l-.989-1.3a4.754,4.754,0,0,0,1.52-2.079,4.576,4.576,0,0,0,.183-2.628,4.436,4.436,0,0,0-1.236-2.262A4.563,4.563,0,0,0,12.779,1.76a4.8,4.8,0,0,0-2-.018,4.564,4.564,0,0,0-1.74.751,4.984,4.984,0,0,0-1.3,1.373A4.5,4.5,0,0,0,7.1,5.7a.921.921,0,0,1-.586.815A1.008,1.008,0,0,1,5.508,6.43a2.338,2.338,0,0,0-.934-.4,2.444,2.444,0,0,0-1.025.036,2.322,2.322,0,0,0-1.182.659A2.4,2.4,0,0,0,1.717,7.9a2.373,2.373,0,0,0,.477,2.124,2.374,2.374,0,0,0,1.941.934v1.63A4.039,4.039,0,0,1,2.3,12.163,4.185,4.185,0,0,1,.921,11.046a4.227,4.227,0,0,1-.8-1.612A3.923,3.923,0,0,1,.106,7.548,4.021,4.021,0,0,1,1.2,5.57,4.019,4.019,0,0,1,4.437,4.361a4.584,4.584,0,0,1,1.218.275A6.143,6.143,0,0,1,6.7,2.493a6.311,6.311,0,0,1,3.937-2.4,6.166,6.166,0,0,1,2.492.074A5.843,5.843,0,0,1,14.794.79M10.362,17.218H8.787V10.35l-2.2,2.216-1.1-1.117L8.6,8.335a1.37,1.37,0,0,1,1.941,0l3.132,3.114L12.56,12.566l-2.2-2.216Z"
                                                          transform="translate(1230 113)" fill="#01579b"/>
                                                </g>
                                             </svg>
                                         </span>
                                            Upload File Nợ phí
                                        </a>
                                    } position="left">
                                        <Upload/>
                                    </Popup>
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
                                                        <div className="card-body" style = {{boxShadow: "white", backgroundColor: "white"}}>
                                                            <div className="row">
                                                                <div className="col-lg-3">
                                                                    <div className="form-group">
                                                                        <label>Mã sinh viên</label>
                                                                        <input type="text" value={studentId}
                                                                               onChange={e => setStudentId(e.target.value)}
                                                                               className="form-control"
                                                                               placeholder="Nhập mã sinh viên"/>
                                                                    </div>
                                                                </div>
                                                                <div className="col-lg-3">
                                                                    <div className="form-group">
                                                                        <label>Họ và tên</label>
                                                                        <input type="text" name="text" value={fullName}
                                                                               onChange={e => setFullName(e.target.value)}
                                                                               className="form-control"
                                                                               placeholder="Nhập họ tên"/>
                                                                    </div>
                                                                </div>
                                                                <div className="col-lg-3">
                                                                    <div className="form-group">
                                                                        <label>Mã khoa</label>
                                                                        <select className="form-control"
                                                                                value={facultyId}
                                                                                onChange={e => setFacultyId(e.target.value)}
                                                                                name="select" title="Chọn">
                                                                            <option value="0">Tất cả</option>
                                                                        </select>
                                                                    </div>
                                                                </div>
                                                                <div className="col-lg-3">
                                                                    <div className="form-group">
                                                                        <label>Loại học phí</label>
                                                                        <select className="form-control "
                                                                                value={studyFeeType}
                                                                                onChange={e => setStudyFeeType(e.target.value)}
                                                                                name="select" title="Chọn">
                                                                            <option value="0">Tất cả</option>
                                                                        </select>
                                                                    </div>
                                                                </div>
                                                                <div className="col-lg-3">
                                                                    <div className="form-group">
                                                                        <label>Hình thức thanh toán</label>
                                                                        <select className="form-control"
                                                                                value={paymentForm}
                                                                                onChange={e => setPaymentForm(e.target.value)}
                                                                                name="select" title="Chọn">
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
                                                                        <label>Trạng thái</label>
                                                                        <select className="form-control"
                                                                                name="select" title="Chọn" onChange={e => setStatus(e.target.value)}
                                                                                value={status}>
                                                                            <option value="">Tất cả</option>
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
                                                                <div className="col-lg-6">
                                                                    <div className="row">
                                                                        <div className="col-lg-4">
                                                                            <div className="form-group">
                                                                                <label>Từ ngày:</label>
                                                                                <div
                                                                                    className="input-group date b-datepicker mb-2">
                                                                                    <input value={fromDate}
                                                                                           onChange={e => setFromDate(e.target.value)}
                                                                                           type="text"
                                                                                           className="form-control"
                                                                                           placeholder="Top left"/>
                                                                                    <div className="input-group-append">
                                                                                        <span
                                                                                            className="input-group-text py-0">
                                                                                          <img className="ic-sm"
                                                                                               src="custom/assets/media/svg/ic-calendar.svg"
                                                                                               alt=""/>
                                                                                        </span>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-lg-4">
                                                                            <div className="form-group">
                                                                                <label>Đến ngày:</label>
                                                                                <div
                                                                                    className="input-group date b-datepicker mb-2">
                                                                                    <input type="text"
                                                                                           value={toDate}
                                                                                           onChange={e => setToDate(e.target.value)}
                                                                                           className="form-control"
                                                                                           placeholder="Chọn ngày"/>
                                                                                    <div className="input-group-append">
                                                                                        <span
                                                                                            className="input-group-text py-0">
                                                                                          <img className="ic-sm"
                                                                                               src="custom/assets/media/svg/ic-calendar.svg"
                                                                                               alt=""/>
                                                                                        </span>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-lg-4">
                                                                            <div className="form-group">
                                                                                <label
                                                                                    className="hidden-mobile">&nbsp;</label>
                                                                                <button type="submit"
                                                                                        name="submitButton"
                                                                                        className="btn btn-search form-control btn-primary">
                                                                                    <i className="las la-search"></i>
                                                                                    Tìm kiếm
                                                                                </button>
                                                                            </div>
                                                                        </div>
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
                                                    <div id="datatables">
                                                        <DebtFeeTable items={listDebtFees}/>
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


