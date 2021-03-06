import React from "react";
import './aside.css';
import routes from "../routes";

export default function Aside() {
    return (
        <div className="aside aside-left aside-fixed d-flex flex-column flex-row-auto" id="kt_aside"  >
            <div className="brand flex-column-auto" id="kt_brand">
                <button className="brand-toggle btn btn-sm px-0" id="kt_aside_toggle">
                  <span className="svg-icon svg-icon svg-icon-xl">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                          <g id="Group_310" data-name="Group 310" transform="translate(-20 -28)">
                            <rect id="Rectangle_118" data-name="Rectangle 118" width="24" height="24"
                                  transform="translate(20 28)" fill="#fff"
                                  opacity="0"/>
                            <g id="Group_185" data-name="Group 185" transform="translate(-3185 171)">
                              <rect id="Rectangle_114" data-name="Rectangle 114" width="18" height="2"
                                    transform="translate(3208 -138)"
                                    fill="#90a4ae"/>
                              <rect id="Rectangle_115" data-name="Rectangle 115" width="12" height="2"
                                    transform="translate(3214 -134)"
                                    fill="#90a4ae"/>
                              <rect id="Rectangle_116" data-name="Rectangle 116" width="12" height="2"
                                    transform="translate(3214 -130)"
                                    fill="#90a4ae"/>
                              <rect id="Rectangle_117" data-name="Rectangle 117" width="18" height="2"
                                    transform="translate(3208 -126)"
                                    fill="#90a4ae"/>
                              <path id="Polygon_1" data-name="Polygon 1" d="M3,0,6,4.286H0Z"
                                    transform="translate(3212.286 -134) rotate(90)"
                                    fill="#90a4ae"/>
                            </g>
                          </g>
                      </svg>
                  </span>
                </button>
                <a href="#" className="brand-logo">
                    <img alt="Logo" src="assets/media/logos/logo.svg"/>
                </a>
            </div>
            <div className="aside-menu-wrapper flex-column-fluid" id="kt_aside_menu_wrapper">
                <div id="kt_aside_menu" className="aside-menu my-4" data-menu-vertical="1" data-menu-scroll="1"
                     data-menu-dropdown-timeout="500">
                    <ul className="menu-nav">
                        <li className="menu-item menu-item-active center" aria-haspopup="true">
                            <a href="/#/debt-fee" className="menu-link">
                                <span className="svg-icon menu-icon">
                                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                      <g id="Group_309" data-name="Group 309" transform="translate(-35 -108)">
                                        <rect id="Frame" width="24" height="24" transform="translate(35 108)"
                                              fill="#01579b" opacity="0"/>
                                        <path id="Bill"
                                              d="M18,5.559v5.5a2.614,2.614,0,0,1-.93,2.033,3.2,3.2,0,0,1-2.195.824h-.69a1.127,1.127,0,0,1-.154-.01,1.03,1.03,0,0,1-.153-.029l-10.735.039a3.229,3.229,0,0,1-2.214-.824A2.61,2.61,0,0,1,0,11.06V0H14.185V5.559Zm-5.444,6.709V1.648H1.648V11.06a1.089,1.089,0,0,0,.422.844,1.58,1.58,0,0,0,1.073.364ZM4.1,4.1H9.814V5.731H4.1Zm0,3.259H8.186V9.009H4.1Zm10.773,4.907a1.592,1.592,0,0,0,1.064-.364,1.078,1.078,0,0,0,.431-.844V7.188H14.185v5.08Z"
                                              transform="translate(38 113)" fill="#90a4ae"/>
                                      </g>
                                  </svg>
                                </span>
                                <span className="menu-text">Danh s??ch n??? ph??</span>
                            </a>
                        </li>
                        <li className="menu-item center" aria-haspopup="true" >
                            <a href="/#/transaction" className="menu-link">
                                <span className="svg-icon menu-icon">
                                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                      <g id="Group_308" data-name="Group 308" transform="translate(-35 -156)">
                                        <rect id="Frame" width="24" height="24" transform="translate(35 156)"
                                              fill="#90a4ae" opacity="0"/>
                                        <path id="Chart"
                                              d="M5.579,1.471A1.42,1.42,0,0,1,6.009.43,1.418,1.418,0,0,1,7.05,0h3.9A1.418,1.418,0,0,1,11.99.43a1.42,1.42,0,0,1,.43,1.041V4.49h3.63A1.96,1.96,0,0,1,18,6.44v5.636a1.845,1.845,0,0,1-.574,1.367,1.89,1.89,0,0,1-1.376.564H1.949a1.892,1.892,0,0,1-1.376-.564A1.848,1.848,0,0,1,0,12.076V9.382A1.845,1.845,0,0,1,.573,8.016a1.892,1.892,0,0,1,1.376-.564h3.63ZM1.949,9.076a.284.284,0,0,0-.22.1.305.305,0,0,0-.086.21v2.694a.294.294,0,0,0,.086.22.3.3,0,0,0,.22.086h3.63V9.076ZM10.8,1.624H7.2V12.382H10.8ZM12.42,12.382h3.63a.3.3,0,0,0,.22-.086.294.294,0,0,0,.086-.22V6.44a.3.3,0,0,0-.306-.307H12.42Z"
                                              transform="translate(38 161)" fill="#90a4ae"/>
                                      </g>
                                  </svg>
                                </span>
                                <span className="menu-text">Danh s??ch giao d???ch</span>
                            </a>
                        </li>
                    </ul>
                    <div className="btn-hdsd text-center">
                        <a className="btn btn-hover-bg-light" href="guide.html">
                            <span className="svg-icon svg-icon-primary svg-icon-2x">
                             <img className="ic_guide" style={{width:24, height:24}}
                                  src="assets/media/svg/icons/24x24-guide.svg"/>
                            </span>
                            <span className="guide-text">H?????ng d???n s??? d???ng</span></a>
                    </div>
                </div>
            </div>
        </div>
    )

}
