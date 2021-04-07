import {Form, Formik} from "formik";
import React from "react";


const SearchArea = (props) => {

    const validate = values => {
        const errors = {};
        return errors;
    };

    const initValue = {
        keyword: '',
        status: ''
    }

    return (
        <Formik
            initialValues={initValue}
            validate={validate}
            onSubmit={(values) => {
                const data = {
                    keyword: values.keyword,
                    status: values.status,
                    pageNo: 1,
                    pageSize: 10
                };
                props.searchRole(data);
            }}
        >{({
               errors,
               values,
               touched,
               handleChange,
               handleBlur,
               handleSubmit,
           }) => (
            <Form className="form"  onSubmit={handleSubmit}>
                <div className="card-body"
                     style={{boxShadow: "white", backgroundColor: "white"}}>
                    <div className="row">

                        <div className="col-lg-3">
                            <div className="form-group">
                                <label>Nhập từ khóa</label>
                                <input type="text"
                                       name="keyword"
                                       value={values.keyword}
                                       onChange={handleChange}
                                       onBlur={handleBlur}
                                       className="form-control"
                                       placeholder="Nhập từ khóa"/>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="form-group">
                                <label>Trạng thái</label>
                                <select className="form-control"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        value={values.status}
                                        name="status">
                                    <option value="">Tất cả</option>
                                    <option value="1">Hoạt động</option>
                                    <option value="0">Hủy</option>
                                </select>
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="row">
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
            </Form>)}
        </Formik>
    )
}
export default SearchArea;
