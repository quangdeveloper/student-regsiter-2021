import React, {useEffect, useState} from "react";
import Popup from "reactjs-popup";

 const  UserInfo = (props) => {

    const [isClose, setIsClose] = useState(props.isClose);

    let user = {
        id: props.item.id,
        username: props.item.username,
        fullname: props.item.fullname,
        age: props.item.age,
        email: props.item.email,
        address: props.item.address
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
                                    Chi tiết thông tin tài khoản
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
                                    <label className="col-4 mb-0">Tài khoản: </label>
                                    <div className="col-8 mb-0">{user.username}</div>
                                </div>
                                <div className="form-group row">
                                    <label className="col-4 mb-0">Họ và tên: </label>
                                    <div className="col-8 mb-0">{user.fullname}</div>
                                </div>

                                <div className="form-group row">
                                    <label className="col-4 mb-0">Tuổi</label>
                                    <div className="col-8 mb-0">{user.age}</div>
                                </div>
                                <div className="form-group row">
                                    <label className="col-4 mb-0">Địa chỉ</label>
                                    <div className="col-8 mb-0">{user.address}</div>
                                </div>
                                <div className="form-group row">
                                    <label className="col-4 mb-0">Email: </label>
                                    <div className="col-8 mb-0">{user.email}</div>
                                </div>
                                <div className="form-group row">
                                    <label className="col-4 mb-0">Trạng thái</label>
                                    <div className="col-8 mb-0">{user.status == 1 ? <span>Hoạt động</span> : (user.status == 0 ? <span>Đang khóa</span> : <span>Hủy</span>)}</div>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="modal-footer">
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserInfo;
