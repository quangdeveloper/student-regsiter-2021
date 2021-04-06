import React, {useState} from "react";
import {Formik} from "formik";
import {updateUser} from "../../shared/service/UserService";
import {toast} from "react-toastify";

const UpdateUser = (props) => {

    const initValue = {
        id: props.item.id,
        username: props.item.username,
        fullname: props.item.fullname,
        age: props.item.age,
        email: props.item.email,
        address: props.item.address
    };
    const validate = (values) => {
    };

    const [isClose, setIsClose] = useState(props.isClose);

    const closePopup = () => {
        setIsClose(!isClose);
    }

    const updateUsers = (data) => {
        updateUser(data).then(res => {
            if (res.code == 200){
                toast.success("Cập nhập thông tin thành công");
                setIsClose(true);
                props.searchUser();
            }else{
                toast.error("Cập nhập thất bại");
            }
        })
    }

    return (
        <div className="modal-dialog modal-lg" role="document" hidden={isClose}>
            <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">
                        <div className="row row-10">
                            <div className="col-auto">
                                Chỉnh sửa thông tin tài khoản
                            </div>
                        </div>
                    </h5>
                    <button type="button" className="close" onClick={closePopup} aria-label="Close">
                        <i aria-hidden="true" className="ki ki-close"></i>
                    </button>
                </div>
                <div className="modal-body">
                    <Formik
                        initialValues={initValue}
                        validate={validate}
                        onSubmit={(values) => {
                            updateUsers(values);
                        }}
                    >{({
                           errors,
                           values,
                           touched,
                           handleChange,
                           handleBlur,
                           handleSubmit,
                       }) => (
                        <form onSubmit={handleSubmit} className="form">
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label>Tên đăng nhập</label>
                                        <input type="text"
                                               name="username"
                                               className="form-control"
                                               value={values.username}
                                               onChange={handleChange}/>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label>Họ và tên</label>
                                        <input type="text"
                                               name="fullname"
                                               className="form-control"
                                               value={values.fullname}
                                               onChange={handleChange}/>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label>Tuổi</label>
                                        <input type="text"
                                               name="age"
                                               className="form-control"
                                               value={values.age}
                                               onChange={handleChange}/>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label>Địa chỉ</label>
                                        <input type="text"
                                               name="address"
                                               className="form-control"
                                               value={values.address}
                                               onChange={handleChange}/>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label>Email</label>
                                        <input type="text"
                                               name="email"
                                               className="form-control"
                                               value={values.email}
                                               onChange={handleChange}/>
                                    </div>
                                </div>

                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <button type="button" className="btn btn-light-primary" onClick={closePopup}
                                                style={{minWidth: 100, marginRight: 10}}>
                                            Hủy
                                        </button>
                                        <button type="submit" className="btn btn-primary" style={{minWidth: 120}}>
                                            Cập Nhật
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </form>)}
                    </Formik>
                </div>
                <div className="modal-footer"></div>
            </div>
        </div>
    )
}
export default UpdateUser;
