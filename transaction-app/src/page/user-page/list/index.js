import React, {useState, useEffect} from "react";
import './custom.css';
import {searchData} from "../../../shared/service/UserService";
import DataTable from "./DataTable";
import SearchArea from "./SeachArea";


export default function Index() {

    const [page_config, setPage_config] = useState({pageNo: 1, pageSize: 10});
    const [userList, setUserList] = useState([]);

    const searchUser = (values) => {
        const response = searchData(values);
        if (response.code == 200){
            setUserList(response.map.list);
        }
    }

    useEffect(() => {
        searchUser({...page_config});
    }, [page_config])

    return (
        <div>
            <div id="headerMobile"></div>
            <div className="d-flex flex-column flex-root">
                <div className="d-flex flex-row flex-column-fluid page">
                    <div id="aside"></div>
                    <div className="d-flex flex-column flex-row-fluid wrapper" id="kt_wrapper">
                        <div className="content d-flex flex-column flex-column-fluid" id="kt_content">
                            <div className="d-flex flex-column-fluid">
                                <div className="container">

                                    <div className="box-filter">
                                        <div className="row">
                                            <div className="col-lg-12">
                                                <div className="card card-custom card-filter card-stretch gutter-b">
                                                    <SearchArea searchUser = {searchUser}   />
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-lg-12">
                                            <div className="card card-custom card-stretch gutter-b">
                                                <div className="card-body">
                                                    <div id="datatables">
                                                        <DataTable  items={userList}/>
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
        </div>
    )
}


