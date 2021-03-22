import {Formik} from "formik";
import React, {useEffect, useState} from "react";

const SearchArea = (searchUser) => {

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
                searchUser(data);
            }}
        >{({
               errors,
               values,
               touched,
               handleChange,
               handleBlur,
               handleSubmit,
           }) => (
            <form className="form" id="kt_form_search">
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
                                        value={values.status} name="status">
                                    <option value="">Tất cả</option>
                                    <option value="1">Hoạt động</option>
                                    <option value="0">Đang khóa</option>
                                    <option value="2">Đã xóa</option>
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
            </form>)}
        </Formik>
    )
}
export default SearchArea;
