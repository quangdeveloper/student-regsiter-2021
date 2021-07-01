import React, {useEffect, useState} from "react";

 const  RoleInfo = (props) => {

    const [isClose, setIsClose] = useState(props.isClose);

    let role = {
        id: props.item.id,
        name: props.item.name,
        status: props.item.status,
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
                                    Chi tiết thông tin quyền
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
                                    <label className="col-4 mb-0">Tên quyền: </label>
                                    <div className="col-8 mb-0">{role.name}</div>
                                </div>
                                </div>
                                <div className="form-group row">
                                    <label className="col-4 mb-0">Trạng thái</label>
                                    <div className="col-8 mb-0">{role.status == 1 ? <span>Hoạt động</span> : (role.status == 0 ? <span>Đang khóa</span> : <span>Hủy</span>)}</div>
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

export default RoleInfo;
