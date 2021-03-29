import React, {useState} from "react";
import {Form, Formik} from "formik";
import {toast} from "react-toastify";
import {createUser} from "../../shared/service/UserService";

const AddUser = (props) => {

    const initValue = {
        username: "",
        password: "",
        fullname: "",
        age: "",
        address: "",
        email: ""
    };
    const validate = values => {
        const errors = {};


        if (values.username.length < 8){
            errors.username = 'Tài khoản phải dài hơn 8 ki tự'
        }

       if (values.password.length < 8){
            errors.password = 'Mật khẩu phải dài hơn 8 ki tự'
        }

        if (!values.fullname){
            errors.fullname = 'Trường này không được bỏ trống'
        }

        if (!values.age){
            errors.age = 'Trường này không được bỏ trống'
        }

        if (!values.address){
            errors.address = 'Trường này không được bỏ trống'
        }

        if (!values.email){
            errors.email = 'Trường này không được bỏ trống'
        } else if (values.email && !/^[a-zA-Z0-9_\.\+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-\.]+/.test(values.email)){
            errors.email = 'Email không hợp lệ'
        }

        return errors;
    };

    const [isClose, setIsClose] = useState(props.isClose);

    const closePopup = () => {
        setIsClose(!isClose);
    }


    const createUsers = (data) => {
        createUser(data).then(res => {
            if (res.code == 200) {
                toast.success("Thêm mới thành công");
                setIsClose(true);
                props.searchUser();
            } else {
                toast.error("Thêm mới thất bại");
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
                                Thêm mới tài khoản
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
                            createUsers(values);
                            props.searchUser({pageNo: 1, pageSize: 10});
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
                                        <span style={{color: "red"}}>{touched.username && errors.username ? errors.username : null}</span>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label>Password</label>
                                        <input type="password"
                                               name="password"
                                               className="form-control"
                                               value={values.password}
                                               onChange={handleChange}/>
                                        <span style={{color: "red"}}>{touched.password && errors.password ? errors.password : null}</span>
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
                                        <span style={{color: "red"}}>{touched.fullname && errors.fullname ? errors.fullname : null}</span>
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
                                        <span style={{color: "red"}}>{touched.age && errors.age ? errors.age : null}</span>
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
                                        <span style={{color: "red"}}>{touched.address && errors.address ? errors.address : null}</span>
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
                                        <span style={{color: "red"}}>{touched.email && errors.email ? errors.email : null}</span>
                                    </div>
                                </div>
                                <button type="button" className="btn btn-light-primary" onClick={closePopup}
                                        style={{minWidth: 100}}>
                                    Hủy
                                </button>
                                <button type="submit" className="btn btn-primary" style={{minWidth: 120}} >
                                    Thêm mới
                                </button>
                            </div>
                        </form>)}
                    </Formik>
                </div>
                <div className="modal-footer"></div>
            </div>
        </div>
    )
}
export default AddUser;
