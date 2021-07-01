import React from "react";
import './aside.css';
import nav from "./nav";
import classnames from 'classnames';
import SubTabs from "./SubTabs";

const  Aside = (props) => {
    const { location } = props

    const menu = nav;
    return (

        <div style={{marginLeft: 300, marginTop: 100}}>

            <SubTabs/>

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
                            {menu.map((m, idx)=> m && (
                                <li key={idx}
                                    className={classnames("menu-item menu-item-submenu", {"menu-item-here menu-item-open": m.children.map(m => m.link).indexOf(location.pathname) > -1})}
                                    data-menu-toggle="hover">
                                    <p className="menu-link menu-toggle">
                                <span className="svg-icon menu-icon">
                                  {m.logo}
                                </span>
                                        <span className="menu-text">{m.name}</span>
                                        <i className="menu-arrow"></i>
                                    </p>
                                    <div className="menu-submenu">
                                        <ul className="menu-subnav">
                                            {m.children.map((c, _idx) =>
                                                c.unallow ?
                                                    (
                                                        <li key={_idx}
                                                            className={classnames("menu-item", {"menu-item-active": location.pathname === c.link})}>
                                                            <a href="javacripts:;" className="menu-link">
                                                                <i className="menu-bullet menu-bullet-dot">
                                                                    <span></span>
                                                                </i>
                                                                <span className="menu-text">{c.name}</span>
                                                            </a>
                                                        </li>
                                                    )
                                                    : (
                                                        <li key={_idx}
                                                            className={classnames("menu-item", {"menu-item-active": location.pathname === c.link})}>
                                                            <a href={c.link} className="menu-link">
                                                                <i className="menu-bullet menu-bullet-dot">
                                                                    <span></span>
                                                                </i>
                                                                <span className="menu-text">{c.name}</span>
                                                            </a>
                                                        </li>
                                                    ))}
                                        </ul>
                                    </div>
                                </li>
                            ))}
                        </ul>
                        <div className="btn-hdsd text-center">
                            <a className="btn btn-hover-bg-light" href="guide.html">
                            <span className="svg-icon svg-icon-primary svg-icon-2x">
                             <img className="ic_guide" style={{width:24, height:24}}
                                  src="assets/media/svg/icons/24x24-guide.svg"/>
                            </span>
                                <span className="guide-text">Hướng dẫn sử dụng</span></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default  Aside;
