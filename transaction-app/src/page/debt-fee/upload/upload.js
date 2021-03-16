import React from "react";

export default function Upload() {
    return (
        <div className="modal-dialog modal-lg" role="document" style={{maxWidth: 600}}>
            <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="">
                        <div className="row row-10">
                            <div className="col-auto">
                                Upload danh sách nợ phí
                            </div>
                        </div>
                    </h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <i aria-hidden="true" className="ki ki-close"></i>
                    </button>
                </div>
                <div className="modal-body">
                    <div className="col-lg-12">
                        <div className="dropzone dropzone-multi" id="kt_dropzone_4">
                            <div className="dropzone-panel mb-lg-0 mb-2">
                                <a className="dropzone-select btn btn-light-primary font-weight-bold btn-sm" >Chọn tệp</a>
                                <a className="dropzone-remove-all btn btn-light-primary font-weight-bold btn-sm">Thay đổi</a>
                            </div>
                            <div className="dropzone-items">
                                <div className="dropzone-item" style={{display: "none"}}>
                                    <div className="dropzone-file">
                                        <div className="dropzone-filename" title="some_image_file_name.jpg">
                                            <span data-dz-name="">ffff</span>
                                            <strong>(
                                                <span data-dz-size="">340kb</span>)</strong>
                                        </div>
                                        <div className="dropzone-error" data-dz-errormessage=""></div>
                                    </div>
                                    <div className="dropzone-progress">
                                        <div className="progress">
                                            <div className="progress-bar bg-primary" role="progressbar"
                                                 aria-valuemin="0" aria-valuemax="100" aria-valuenow="0"
                                                 data-dz-uploadprogress=""></div>
                                        </div>
                                    </div>
                                    <div className="dropzone-toolbar">
                                <span className="dropzone-start">
                                    <i className="flaticon2-arrow"></i>
                                </span>
                                        <span className="dropzone-cancel" data-dz-remove="" style={{display: "none"}}>
                                    <i className="flaticon2-cross"></i>
                                </span>
                                        <span className="dropzone-delete" data-dz-remove="">
                                    <i className="flaticon2-cross"></i>
                                </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <span className="form-text text-muted">Dung lượng tối đã upload 1MB</span>
                    </div>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-light-primary" data-dismiss="modal"
                            style={{minWidth: 100}}>Hủy
                    </button>
                    <button type="button" className="btn btn-primary" style={{minWidth: 120}}>Cập Nhật</button>
                </div>
            </div>
        </div>
    )
}
