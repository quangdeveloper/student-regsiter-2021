package vn.vnpay.register.service;

import vn.vnpay.register.dto.ResponseDTO;
import vn.vnpay.register.entity.User;

import java.util.List;

public interface UserService {

    User findByUsername(String username );
    List<User> findAllUser();
}
