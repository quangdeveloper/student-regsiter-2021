import React from "react";

export default function Header() {

    return (
        <div id="kt_header" className="header header-fixed" style={{marginBottom: 100}}>
            <div className="container-fluid d-flex align-items-stretch justify-content-between">
                <div className="header-menu-wrapper header-menu-wrapper-left" id="kt_header_menu_wrapper">
                    <div id="kt_header_menu"
                         className="align-items-center header-menu header-menu-mobile header-menu-layout-default">
                    </div>
                </div>
                <div className="topbar">
                    <div className="dropdown">
                        <div className="topbar-item" data-toggle="dropdown" data-offset="10px,0px">
                            <div className="btn btn-icon w-auto d-flex align-items-center btn-lg px-2">
                                <span className="ava symbol symbol-35 symbol-light-primary">
                                    <img src="assets/media/users/ava@2x.png" alt="" style={{width: 44}}/>
                                </span>
                                <span className="text-user font-size-base d-none d-md-inline mr-3">
                                    <span>Xin chào!</span>
                                    <b>haonv@vnpay.vn</b>
                                </span>
                            </div>
                        </div>
                        <div
                            className="dropdown-menu p-0 m-0 dropdown-menu-anim-up dropdown-menu-sm dropdown-menu-right">
                            <ul className="navi navi-hover py-4">
                                <li className="navi-item">
                                    <a href="#" className="navi-link">
                                        <span className="svg-icon svg-icon-primary svg-icon-2x mr-3">
                                          <svg xmlns="http://www.w3.org/2000/svg"
                                               xmlnsXlink="http://www.w3.org/1999/xlink" width="24"
                                               height="24" viewBox="0 0 24 24">
                                            <defs>
                                              <clipPath id="clip-path">
                                                <rect id="Rectangle_112" data-name="Rectangle 112" width="12.006"
                                                      height="16.498"
                                                      transform="translate(0 0)" fill="#90a4ae"/>
                                              </clipPath>
                                            </defs>
                                            <g id="Group_316" data-name="Group 316" transform="translate(-1271 -129)">
                                              <rect id="Rectangle_113" data-name="Rectangle 113" width="24" height="24"
                                                    transform="translate(1271 129)" fill="#90a4ae" opacity="0"/>
                                              <g id="Group_182" data-name="Group 182" transform="translate(1277 134)">
                                                <g id="Group_181" data-name="Group 181" clipPath="url(#clip-path)">
                                                  <path id="Path_27" data-name="Path 27"
                                                        d="M0,1.494V0H10.547a1.467,1.467,0,0,1,1.028.4,1.273,1.273,0,0,1,.431.975v11.5a1.273,1.273,0,0,1-.431.975,1.467,1.467,0,0,1-1.028.4H2.074V12.745h8.42V1.494ZM0,13.307V.053l7.014,3.41a1.106,1.106,0,0,1,.474.422,1.142,1.142,0,0,1,.176.615V15.662a.775.775,0,0,1-.422.7.871.871,0,0,1-.861.035Z"
                                                        fill="#90a4ae"/>
                                                </g>
                                              </g>
                                            </g>
                                          </svg>
                                        </span>
                                        <span className="navi-text">Đăng xuất</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}
