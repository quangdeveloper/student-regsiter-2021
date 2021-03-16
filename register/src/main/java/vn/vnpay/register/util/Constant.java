package vn.vnpay.register.util;

public interface Constant {

    interface TypeEmail {
        String SIMPLE = "simple";
        String MIME = "mime";
    }

    interface TypeFile {
        String AVATAR = "Avatar";
        String PRODUCT = "Product";
        String FLOWER = "Flower";
    }

    interface RESPONSE {
        /**
         * lỗi này return ra 1 danh sách kết quả
         */
        String RS = "rs";
        String PO_CODE = "code";
        String PO_MSG = "message";

        interface CODE {

            String OK = "200";
            String C400 = "400";
            String C404 = "404";
            String C409 = "409";
            String C403 = "403";

            String ERROR = "999";

        }

        interface MESSAGE {

            String OK = "Thực hiện thành công";

            String C400 = "Bad gateway";

            String C400_DATA = "Dữ liệu rỗng";

            String C404 = "Không tìm thấy dữ liệu";
            String C404_DELETE = "Dữ liệu không tồn tại";

            String C404_ROLE = "Không tìm thấy được quyền này";
            String C404_USER = "Không tìm thấy người dùng";

            String C409 = "Tài nguyên đã tồn tại";
            String C409_ROLE = "Quyền này đã tồn tại";
            String C409_USER = "Tài khoản đã tồn tại";


            String ERROR = "Lỗi không xác định";

            String EMPTY_LIST = "Danh sách rỗng";

        }

        interface JSON_KEY {
            String RETURN_VALUE = "Return value";
        }
    }

}
