import React, {useState} from "react";
import {formatterDateDD_MM_YYYY} from "../../../utils/date-time-formatter";

export default function AddOrEditDebtFee(props) {

    const formatterDate = formatterDateDD_MM_YYYY();
    const [studentId, setStudentId] = useState(0);
    const [trainingSystem, setTrainingSystem] = useState('');
    const [note, setNote] = useState('');
    const [datePayment, setDatePayment] = useState(formatterDate.format(new Date()));
    const [facultyId, setFacultyId] = useState(0);
    const [fullName, setFullName] = useState('');
    const [studyFeeType, setStudyFeeType] = useState(0);
    const [paymentForm, setPaymentForm] = useState(0);
    const [status, setStatus] = useState(0);
    const [fromDate, setFromDate] = useState(formatterDate.format(new Date()));
    const [toDate, setToDate] = useState(formatterDate.format(new Date()));
    const [money, setMoney] =useState(0);

    const [isClose, setIsClose] = useState(props.isClose);

    function closePopup(){
        setIsClose(!isClose);
    }

    return (
        <div className="modal-dialog modal-lg" role="document" hidden={isClose}>
            <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">
                        <div className="row row-10">
                            <div className="col-auto">
                                Chỉnh sửa thông tin nợ phí
                            </div>
                        </div>
                    </h5>
                    <button type="button" className="close" onClick={closePopup} aria-label="Close">
                        <i aria-hidden="true" className="ki ki-close"></i>
                    </button>
                </div>
                <div className="modal-body">
                    <form action="" className="form">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="form-group">
                                    <label>Mã sinh viên</label>
                                    <input disabled type="text" name="text" className="form-control" value={studentId}
                                           onChange={e => setStudentId(e.target.value)}/>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="form-group">
                                    <label>Tên hệ</label>
                                    <input type="text" name="text" className="form-control" value={trainingSystem}
                                           onChange={e => setTrainingSystem(e.target.value)}/>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="form-group">
                                    <label>Hình thức thanh toán</label>
                                    <select className="form-control selectpicker" value={paymentForm} onChange={e=>setPaymentForm(e.target.value)} >
                                        <option value="VNPAY" defaultValue>VNPAY</option>
                                        <option value="Option1">Option1</option>
                                        <option value="Option2">Option2</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="form-group">
                                    <label>Loại học phí</label>
                                    <select className="form-control selectpicker" value={studyFeeType} onChange={e=>setStudyFeeType(e.target.value)}>
                                        <option value="Option0" defaultValue>Học phí 2020</option>
                                        <option value="Option1">Option1</option>
                                        <option value="Option2">Option2</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="form-group">
                                    <label>Họ và Tên</label>
                                    <input type="text" name="text" className="form-control" value={fullName}
                                           onChange={e => setFullName(e.target.value)}/>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="form-group">
                                    <label>Số tiền</label>
                                    <div className="input-group date b-datepicker b-datepicker mb-2">
                                        <input type="text" name="text" className="form-control" value={money}
                                               onChange={e => setMoney(e.target.value)}/>
                                        <div className="input-group-append">
                                                <span className="input-group-text py-0">
                                                  <span className="note">VNĐ</span>
                                                </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="form-group">
                                    <label>Mã khoa</label>
                                    <input type="text" name="text" className="form-control" value={facultyId}
                                           onChange={e => setFacultyId(e.target.value)}/>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="form-group">
                                    <label>Thời hạn thanh toán</label>
                                    <div className="input-group date b-datepicker mb-2">
                                        <input type="text" className="form-control" placeholder="Chọn ngày"
                                               onChange={e => setDatePayment(e.target.value)} value={datePayment}/>
                                        <div className="input-group-append">
                                                <span className="input-group-text py-0">
                                                  <img className="ic-sm" src="custom/assets/media/svg/ic-calendar.svg"
                                                       alt="error"/>
                                                </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="form-group">
                                    <label>Ghi chú</label>
                                    <textarea className="form-control" rows="2" onChange={e => setNote(e.target.value)}
                                              value={note}></textarea>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-light-primary" onClick={closePopup} style={{minWidth: 100}}>
                        Hủy
                    </button>
                    <button type="button" className="btn btn-primary" style={{minWidth: 120}}>
                        Cập Nhật
                    </button>
                </div>
            </div>
        </div>
    )
}
