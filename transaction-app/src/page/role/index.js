import React, {useState, useEffect} from "react";
import './custom.css';
import DataTable from "./DataTable";
import SearchArea from "./SeachArea";
import Pagination from "react-js-pagination";
import {searchData} from "../../shared/service/RoleService";

const Index = () => {

    const [pageConfig, setPageConfig] = useState({pageNo: 1, pageSize: 10});
    const [total, setTotal] = useState(0);
    const [dataTable, setDataTable] = useState([]);
    const [keyword, setKeyword] = useState('');
    const [status, setStatus] = useState('');

    const searchRole = async (values) => {

        if (values) {
            setKeyword(values.keyword ? values.keyword : null);
            setStatus(values.status ? values.status : null);
            if (values.pageNo) {
                setPageConfig({...pageConfig, pageSize: values.pageSize});
            }
        }
        const data = {
            pageNo: pageConfig.pageNo,
            pageSize: pageConfig.pageSize,
            keyword: values ? values.keyword : keyword,
            status: values ? values.status : status
        }

        const response = await searchData();
        if (response.code === '200') {
            setDataTable(response.map.list);
            setTotal(response.map.total)
        }
    }

    const onchangepaging = event => {
        setPageConfig({
            ...pageConfig,
            pageNo: event
        })
    }

    const handlePerpage = (e) => {
        e.preventDefault();
        setPageConfig({
            ...pageConfig,
            pageNo: 1,
            pageSize: Number(e.target.value)
        })
    }

    useEffect(() => {
        searchRole();
    }, [pageConfig])

    return (
        <div>
            <div className="d-flex flex-column flex-root">
                <div className="d-flex flex-row flex-column-fluid page">
                    <div className="d-flex flex-column flex-row-fluid wrapper" id="kt_wrapper">
                        <div className="content d-flex flex-column flex-column-fluid" id="kt_content">
                            <div className="d-flex flex-column-fluid">
                                <div className="container">
                                    <div className="box-filter">
                                        <div className="row">
                                            <div className="col-lg-12">
                                                <div className="card card-custom card-filter card-stretch gutter-b">
                                                    <SearchArea searchRole={searchRole}/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <div className="card card-custom card-stretch gutter-b">
                                                <div className="card-body">
                                                    <DataTable items={dataTable}
                                                               pageConfig={pageConfig}
                                                               searchRole={searchRole}/>
                                                </div>
                                                <div className="card-footer">
                                                      <span>
                                                        <Pagination
                                                            activePage={pageConfig.pageNo}
                                                            itemsCountPerPage={pageConfig.pageSize}
                                                            innerClass="pagination Pagination-left"
                                                            totalItemsCount={total}
                                                            itemClass="page-item"
                                                            linkClass="page-link"
                                                            pageRangeDisplayed={10}
                                                            onChange={onchangepaging}
                                                        />
                                                        <label className="style_display text-right">Hiển thị &emsp;
                                                            <select onChange={(e) => handlePerpage(e)}
                                                                    name="optionPerpage">
                                                            <option value="10">10</option>
                                                            <option value="25">25</option>
                                                            <option value="50">50</option>
                                                            <option value="100">100</option>
                                                          </select>
                                                            &emsp; bản ghi trên tổng số <b>{total}</b> bản ghi
                                                        </label>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Index;
