import React, {useState} from "react";
import {Form, Formik} from "formik";
import {toast} from "react-toastify";
import {createRole, updateRole} from "../../shared/service/RoleService";
import AddUser from "./AddRole";

const UpdateRole = (props) => {

    const initValue = {
        id: props.item.id,
        name: props.item.name,

    };
    const validate = values => {
        const errors = {};
        return errors;
    };

    const [isClose, setIsClose] = useState(props.isClose);

    const closePopup = () => {
        setIsClose(!isClose);
    }


    const updateRoles = (data) => {
        updateRole(data).then(res => {
            if (res.code == 200) {
                toast.success("Cập nhập thành công");
                setIsClose(true);
                props.searchRole();
            } else {
                toast.error("Cập nhập thất bại");
            }
        })
    }

    return (
        <div className="modal-dialog modal-lg" role="document" hidden={isClose} style={{minWidth: 450}}>
            <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">
                        <div className="row row-10">
                            <div className="col-auto">
                                Cập nhập quyền
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
                            updateRoles(values);
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

                                        <input type="text"
                                               name="id"
                                               className="form-control"
                                               value={values.id}
                                               hidden={true}
                                        />

                                        <label>Tên quyền</label>
                                        <input type="text"
                                               name="name"
                                               className="form-control"
                                               value={values.name}
                                               onChange={handleChange}/>
                                        <span
                                            style={{color: "red"}}>{touched.name && errors.name ? errors.name : null}</span>
                                    </div>
                                </div>


                            </div>
                            <div className="row">

                                <button type="button" className="btn btn-light-primary" onClick={closePopup}
                                        style={{minWidth: 100}}>
                                    Hủy
                                </button>
                                <button type="submit" className="btn btn-primary" style={{minWidth: 120}}>
                                    Cập nhập
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
export default UpdateRole;
