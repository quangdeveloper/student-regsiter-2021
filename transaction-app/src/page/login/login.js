import React, {lazy} from 'react';
import './login.css';

const Login = () => {
    return (
        <div id="login-body" className="d-flex flex-column flex-root">
            {/*<!--beginLogin*/}
            <div className="login login-1 login-signin-on d-flex flex-column flex-lg-row flex-column-fluid bg-white"
                 id="kt_login">
                {/*<!--begin::Aside*/}
                <div className="login-aside d-flex flex-column flex-row-auto" style={{backgroundColor: "#70BDE0"}}>
                    {/*<!--begin::Aside Bottom*/}
                    <div
                        className="aside-img d-flex flex-row-fluid bgi-no-repeat bgi-position-y-bottom bgi-position-x-center"
                        style={{backgroundImage: "url(assets/media/bg/mask_group_1.jpg)"}}></div>
                    {/*<!--end::Aside Bottom--*/}
                </div>
                {/*<!--begin::Aside--*/}
                {/*<!--begin::Content--*/}
                <div
                    className="login-content flex-row-fluid d-flex flex-column justify-content-center position-relative overflow-hidden p-7 mx-auto">
                    {/*<!--begin::Content body--*/}
                    <div className="d-flex flex-column-fluid flex-center">
                        {/*<!--begin::Signin--*/}
                        <div className="login-form login-signin">
                            {/*<!--begin::Form--*/}
                            <form className="form" noValidate="novalidate" id="kt_login_signin_form">
                                {/*<!--begin::Title--*/}
                                <div className="text-center pb-13 pt-lg-0 pt-5">
                                    <h3 className="text-dark font-main">Provider Site</h3>
                                    <span className="text-muted"> Hệ thống quản lý thu nợ trực tuyến cho các đơn vị<br/>Hành chính công</span>
                                </div>
                                {/*<!--begin::Title--*/}
                                {/*<!--begin::Form group--*/}
                                <div className="form-group">
                                    <div className="input-group input-group-left">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text">
                                              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25"
                                                   viewBox="0 0 25 25">
                                                <g id="Group_319" data-name="Group 319"
                                                   transform="translate(-914.5 -354.5)">
                                                  <rect id="Frame" width="24" height="24" transform="translate(915 355)"
                                                        fill="#90a4ae"
                                                        stroke="#707070" strokeWidth="1" opacity="0"/>
                                                  <path id="User"
                                                        d="M0,14.341V10.884l.514-.216c.065-.026.15-.059.255-.1s.231-.091.376-.158c.237-.093.473-.188.712-.287s.467-.194.69-.285l.061-.03.059-.03c.119-.038.227-.079.326-.117s.2-.079.305-.119a3.521,3.521,0,0,1,2.785.04,4.57,4.57,0,0,0,.969.3,4.978,4.978,0,0,0,.949.1,4.959,4.959,0,0,0,.947-.1,4.534,4.534,0,0,0,.969-.3,3.551,3.551,0,0,1,1.392-.307,3.51,3.51,0,0,1,1.394.267c.105.04.206.079.305.119s.208.079.326.117l.061.03.059.03q.337.137.692.285c.237.1.473.194.71.287.146.067.271.117.376.158l.257.1.514.216v3.457H14.321v-2.33a.185.185,0,0,1-.051-.01.11.11,0,0,1-.049-.03c-.237-.091-.475-.186-.712-.285l-.69-.287a.274.274,0,0,1-.071-.028.142.142,0,0,0-.049-.03c-.119-.04-.227-.079-.326-.119s-.194-.079-.287-.117a2.035,2.035,0,0,0-.75-.14,1.7,1.7,0,0,0-.73.158,6.058,6.058,0,0,1-1.325.407A7.1,7.1,0,0,1,8,11.655a7.108,7.108,0,0,1-1.284-.127,6.007,6.007,0,0,1-1.323-.407,1.7,1.7,0,0,0-.732-.158,2.035,2.035,0,0,0-.75.14c-.091.038-.188.079-.285.117s-.208.079-.328.119a.142.142,0,0,0-.049.03.247.247,0,0,1-.069.028l-.692.287q-.355.149-.71.285a.117.117,0,0,1-.051.03.188.188,0,0,1-.049.01v2.33ZM11.793,3.793a3.659,3.659,0,0,1-1.106,2.688A3.661,3.661,0,0,1,8,7.585a3.657,3.657,0,0,1-2.686-1.1A3.659,3.659,0,0,1,4.207,3.793,3.665,3.665,0,0,1,5.314,1.117,3.645,3.645,0,0,1,8,0a3.648,3.648,0,0,1,2.686,1.117,3.665,3.665,0,0,1,1.106,2.676m-2.3-1.481a2.122,2.122,0,0,0-2.984,0,2,2,0,0,0-.621,1.481,2.029,2.029,0,0,0,.621,1.5,2.127,2.127,0,0,0,2.984,0,2.03,2.03,0,0,0,.623-1.5,2,2,0,0,0-.623-1.481"
                                                        transform="translate(919 360)" fill="#90a4ae"/>
                                                </g>
                                              </svg>
                                            </span>
                                        </div>
                                        <input className="form-control" placeholder="Tên đăng nhập" type="text"
                                               name="username" autoComplete="off"/>
                                    </div>
                                </div>
                                {/*<!--end::Form group--*/}
                                {/*<!--begin::Form group--*/}
                                <div className="form-group">
                                    <div className="input-group input-group-left">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text">
                                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                   viewBox="0 0 24 24">
                                                <g id="Group_320" data-name="Group 320"
                                                   transform="translate(-915 -425)">
                                                  <rect id="Rectangle_74" data-name="Rectangle 74" width="24"
                                                        height="24"
                                                        transform="translate(915 425)" fill="#90a4ae" opacity="0"/>
                                                  <path id="Path_15" data-name="Path 15"
                                                        d="M17.753,2.773,20,5.917,17.715,8.672h-2.13l-1.093-.84-1.152.84H11.777V6.933h1l1.738-1.27,1.66,1.27h.722l.918-1.093-.957-1.328H10.683a2.907,2.907,0,0,1,.048.42c.007.148.01.295.01.438a5.336,5.336,0,0,1-.41,2.09A5.511,5.511,0,0,1,7.46,10.332a5.336,5.336,0,0,1-2.09.41,5.348,5.348,0,0,1-2.09-.41A5.516,5.516,0,0,1,.41,7.46,5.336,5.336,0,0,1,0,5.37,5.348,5.348,0,0,1,.41,3.28,5.52,5.52,0,0,1,3.28.41,5.348,5.348,0,0,1,5.37,0,5.218,5.218,0,0,1,8.143.762a5.309,5.309,0,0,1,1.935,2.012ZM7.938,2.8A3.494,3.494,0,0,0,5.37,1.738,3.5,3.5,0,0,0,2.8,2.8,3.5,3.5,0,0,0,1.738,5.37,3.494,3.494,0,0,0,2.8,7.938,3.5,3.5,0,0,0,5.37,9,3.5,3.5,0,0,0,7.938,7.938,3.5,3.5,0,0,0,9,5.37,3.5,3.5,0,0,0,7.938,2.8M4.14,4.14a1.654,1.654,0,0,1,1.212-.508,1.676,1.676,0,0,1,1.23.508A1.654,1.654,0,0,1,7.09,5.352,1.736,1.736,0,0,1,5.352,7.09,1.654,1.654,0,0,1,4.14,6.582a1.676,1.676,0,0,1-.508-1.23A1.654,1.654,0,0,1,4.14,4.14"
                                                        transform="translate(917 432)" fill="#90a4ae"/>
                                                </g>
                                              </svg>
                                            </span>
                                        </div>
                                        <input className="form-control" placeholder="Mật khẩu" type="password"
                                               name="password" autoComplete="off"/>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="row">
                                        <div className="col-7 text-left checkbox-inline">
                                            <label className="checkbox">
                                                <input type="checkbox" name="Checkboxes1"/>
                                                <span></span>Duy trì đăng nhập</label>
                                        </div>
                                        <div className="col-5 text-right">
                                            <a href="javascript:;"
                                               className="text-primary text-hover-primary pt-5"
                                               id="kt_login_forgot">Quên mật khẩu?</a>
                                        </div>
                                    </div>
                                </div>
                                {/*<!--end::Form group--*/}
                                {/*<!--begin::Action--*/}
                                <div className="pb-lg-0 pb-5">
                                    <button type="button" id="kt_login_signin_submit"
                                            className="btn btn-primary btn-block font-size-h6 px-8 py-4 my-3 mr-3">Đăng
                                        nhập
                                    </button>
                                </div>
                                {/*<!--end::Action--*/}
                            </form>
                            {/*<!--end::Form--*/}
                        </div>
                        {/*<!--end::Signin--*/}
                        {/*<!--begin::Signup--*/}
                        <div className="login-form login-signup">
                            {/*<!--begin::Form--*/}
                            <form className="form" noValidate="novalidate" id="kt_login_signup_form">
                                {/*<!--begin::Title--*/}
                                <div className="pb-13 pt-lg-0 pt-5 text-center">
                                    <p className="text-dark font-main">Gửi yêu cầu thành công!</p>
                                    <p className="text-muted">Thông tin mật khẩu mới đã được gửi vào hòm thư đăng ký.
                                        <br/>Vui lòng kiểm tra email và làm theo hướng dẫn.</p>
                                </div>
                                {/*<!--end::Title--*/}
                                {/*<!--begin::Form group--*/}
                                <div className="form-group d-flex flex-wrap pb-lg-0 pb-3">
                                    <button type="button" id="BackToLogin"
                                            className="btn btn-block btn-primary font-size-h6 px-8 py-4 my-3 mr-4">
                                        Quay lại đăng nhập
                                    </button>
                                </div>
                                {/*<!--end::Form group--*/}
                            </form>
                            {/*<!--end::Form--*/}
                        </div>
                        {/*<!--end::Signup--*/}
                        {/*<!--begin::Forgot--*/}
                        <div className="login-form login-forgot">
                            {/*<!--begin::Form--*/}
                            <form className="form" noValidate="novalidate" id="kt_login_forgot_form">
                                {/*<!--begin::Title--*/}
                                <div className="pb-13 pt-lg-0 pt-5 text-center">
                                    <p className="text-dark font-main">Yêu cầu cấp mật khẩu mới</p>
                                    <p className="text-muted">
                                        <span
                                            className="row_1">Vui lòng nhập email đăng ký tài khoản vào ô dưới để</span>
                                        <span className="row_2">được cấp lại mật khẩu mới</span></p>
                                </div>
                                {/*<!--end::Title--*/}
                                {/*<!--begin::Form group--*/}
                                <div className="form-group">
                                    <div className="input-group input-group-left">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text">
                                              <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="24" height="24" viewBox="0 0 24 24">
                                                  <defs>
                                                  <clipPath id="clipPath">
                                                    <rect id="Rectangle_119" data-name="Rectangle 119" width="18" height="13.701" transform="translate(0 0)" fill="#90a4ae"/>
                                                  </clipPath>
                                                </defs>
                                                <g id="Group_321" data-name="Group 321"
                                                   transform="translate(-915 -437)">
                                                  <rect id="Rectangle_120" data-name="Rectangle 120" width="24" height="24" transform="translate(915 437)" fill="#fff" opacity="0"/>
                                                  <g id="Group_186" data-name="Group 186" transform="translate(918 442)" clipPath="url(#clip-path)">
                                                    <path id="Path_28" data-name="Path 28" d="M17.518.5A1.677,1.677,0,0,1,18,1.707V11.993a1.674,1.674,0,0,1-.482,1.2,1.575,1.575,0,0,1-1.185.5H1.668a1.576,1.576,0,0,1-1.186-.5A1.678,1.678,0,0,1,0,11.993V1.707A1.681,1.681,0,0,1,.482.5,1.579,1.579,0,0,1,1.668,0H16.333a1.579,1.579,0,0,1,1.185.5M9,7.031,1.708,2.069v9.924H16.293V1.908ZM4.219,1.707,9,4.941l4.581-3.234Z" fill="#90a4ae"/>
                                                  </g>
                                                </g>
                                              </svg>
                                            </span>
                                        </div>
                                        <input className="form-control" type="email" placeholder="Email đăng ký" name="email" autoComplete="off"/>
                                    </div>
                                </div>
                                {/*<!--end::Form group--*/}
                                {/*<!--begin::Form group--*/}
                                <div className="form-group pb-lg-0 text-center">
                                    <button type="button" id="kt_login_forgot_submit" className="btn btn-block btn-primary font-size-h6 px-8 py-4 my-3 mr-4">Gửi yêu cầu</button>
                                    <a id="kt_login_forgot_cancel" className="text-primary text-hover-primary d-inline-block px-8 py-4 my-3" href="javascript:;">Quay lại đăng nhập</a>
                                </div>
                                {/*<!--end::Form group--*/}
                            </form>
                            {/*<!--end::Form--*/}
                        </div>
                        {/*<!--end::Forgot--*/}
                    </div>
                    {/*<!--end::Content body--*/}
                    {/*<!--begin::Content footer--*/}
                    <div className="text-center py-7 py-lg-0">
                        <a className="btn btn-hover-bg-light" href="guide.html">
                            <span className="svg-icon svg-icon-primary svg-icon-2x">
                              <img className="ic_guide" style={{width: 24, height: 24}} src="assets/media/svg/icons/24x24-guide.svg"/>
                            </span> Hướng dẫn sử dụng
                        </a>
                    </div>
                    {/*<!--end::Content footer--*/}
                </div>
                {/*<!--end::Content--*/}
            </div>
            {/*<!--end::Login--*/}
        </div>
    );
}
export default Login
