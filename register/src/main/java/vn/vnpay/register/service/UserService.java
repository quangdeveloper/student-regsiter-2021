package vn.vnpay.register.service;

import vn.vnpay.register.dto.PageDTO;
import vn.vnpay.register.dto.ResponseDTO;
import vn.vnpay.register.dto.request.UserFilterRequest;
import vn.vnpay.register.entity.User;

import java.util.List;

public interface UserService {

    User findByUsername(String username );
    PageDTO findByFilter(UserFilterRequest userFilterRequest);
}
