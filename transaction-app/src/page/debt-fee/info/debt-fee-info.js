import React, {useEffect, useState} from "react";

export default function DebtFeeInfo(props) {

    const [isClose, setIsClose] = useState(props.isClose);

    let debtFee = {
        studentId: props.debtFee.studentId,
        trainingSystem: props.debtFee.trainingSystem,
        paymentForm: props.debtFee.paymentForm,
        fullName: props.debtFee.fullName,
        facultyId: props.debtFee.facultyId,
        studyFeeType: props.debtFee.studyFeeType,
        money: props.debtFee.money,
        status: props.debtFee.status,
        userUpload: props.debtFee.userUpdate,
        dateUpload: props.debtFee.dateUpload,
        userUpdate: props.debtFee.userUpdate,
        dateUpdate: props.dateUpdate,
        datePayment: props.datePayment,
        note: props.debtFee.note
    };

    function closePopup(){
        setIsClose(!isClose);
    }

    return (
        <div  hidden={isClose}>
            <div className="modal-dialog" role="document" style={{width: 650}}>
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">
                            <div className="row row-10">
                                <div className="col-auto">
                                    Chi tiết thông tin nợ phí
                                </div>
                            </div>
                        </h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={closePopup}>
                            <i aria-hidden="true" className="ki ki-close"></i>
                        </button>
                    </div>
                    <div className="modal-body">
                        <form action="" className="form">
                            <div className="form-label">
                                <div className="form-group row">
                                    <label className="col-4 mb-0">Mã sinh viên</label>
                                    <div className="col-8 mb-0">{debtFee.studentId}</div>
                                </div>
                                <div className="form-group row">
                                    <label className="col-4 mb-0">Tên hệ</label>
                                    <div className="col-8 mb-0">{debtFee.trainingSystem}</div>
                                </div>
                                <div className="form-group row">
                                    <label className="col-4 mb-0">Hình thức thanh toán</label>
                                    <div className="col-8 mb-0">{debtFee.paymentForm}</div>
                                </div>
                                <div className="form-group row">
                                    <label className="col-4 mb-0">Loại học phí</label>
                                    <div className="col-8 mb-0">{debtFee.studyFeeType}</div>
                                </div>
                                <div className="form-group row">
                                    <label className="col-4 mb-0">Họ và Tên</label>
                                    <div className="col-8 mb-0">{debtFee.fullName}</div>
                                </div>
                                <div className="form-group row">
                                    <label className="col-4 mb-0">Số tiền</label>
                                    <div className="col-8 mb-0">{debtFee.money}</div>
                                </div>
                                <div className="form-group row">
                                    <label className="col-4 mb-0">Mã Khoa</label>
                                    <div className="col-8 mb-0">{debtFee.facultyId}</div>
                                </div>
                                <div className="form-group row">
                                    <label className="col-4 mb-0">Thời hạn thanh toán</label>
                                    <div className="col-8 mb-0">{debtFee.datePayment}</div>
                                </div>
                                <div className="form-group row">
                                    <label className="col-4 mb-0">Ghi chú</label>
                                    <div className="col-8 mb-0">{debtFee.note}</div>
                                </div>
                                <div className="form-group row">
                                    <label className="col-4 mb-0">Người Upload</label>
                                    <div className="col-8 mb-0">{debtFee.userUpload} {debtFee.dateUpload}</div>
                                </div>
                                <div className="form-group row">
                                    <label className="col-4 mb-0">Người Cập nhật</label>
                                    <div className="col-8 mb-0">{debtFee.userUpdate} {debtFee.userUpdate}</div>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-light-primary" data-dismiss="modal" onClick={closePopup}
                                style={{minWidth: 100}}>
                            Hủy
                        </button>
                        <button type="button" className="btn btn-primary"  data-toggle="modal"
                                style={{minWidth: 120}}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24">
                                <g id="Group_317" data-name="Group 317" transform="translate(-881 -687)">
                                    <rect id="Rectangle_75" data-name="Rectangle 75" width="24" height="24"
                                          transform="translate(881 687)" fill="#fff" opacity="0"/>
                                    <path id="Path_19" data-name="Path 19"
                                          d="M3.891,3.087V4.736H1.649V16.371H13.284v-2.99h1.629v2.99A1.636,1.636,0,0,1,13.284,18H1.649a1.587,1.587,0,0,1-1.17-.479A1.568,1.568,0,0,1,0,16.371V4.736a1.593,1.593,0,0,1,.479-1.17,1.593,1.593,0,0,1,1.17-.479Zm3.527,11.1H3.375V10.16L13.534,0,17.6,4.045l-4.716,4.7Zm7.86-10.14L13.534,2.32,5,10.85v1.706H6.748l4.984-4.965Z"
                                          transform="translate(885 689)" fill="#fff"/>
                                </g>
                            </svg>
                            Chỉnh Sửa
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

