import React, {useState} from "react";
import {Form, Formik} from "formik";
import {toast} from "react-toastify";
import {createRole} from "../../../shared/service/RoleService";

const AddRole = (props) => {

    const initValue = {
       name: ''
    };
    const validate = values => {
        const errors = {};
        return errors;
    };

    const [isClose, setIsClose] = useState(props.isClose);

    const closePopup = () => {
        setIsClose(!isClose);
    }


    const createRoles = (data) => {
        createRole(data).then(res => {
            if (res.code == 200) {
                toast.success("Thêm mới thành công");
                setIsClose(true);
                props.searchRole();
            } else {
                toast.error("Thêm mới thất bại");
            }
        })
    }

    return (
        <div className="modal-dialog modal-lg" role="document" hidden={isClose}  style={{minWidth: 450}}>
            <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">
                        <div className="row row-10">
                            <div className="col-auto">
                                Thêm mới quyền
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
                            createRoles(values);
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
                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <label>Tên quyền</label>
                                        <input type="text"
                                               name="name"
                                               className="form-control"
                                               value={values.name}
                                               onChange={handleChange}/>
                                        <span style={{color: "red"}}>{touched.name && errors.name ? errors.name : null}</span>
                                    </div>
                                </div>


                            </div>
                            <div className="row">

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
export default AddRole;
