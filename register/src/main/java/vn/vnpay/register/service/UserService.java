package vn.vnpay.register.service;

import vn.vnpay.register.dto.ActionDTO;
import vn.vnpay.register.dto.PageDTO;
import vn.vnpay.register.dto.request.UserFilterRequest;
import vn.vnpay.register.dto.request.UserNewRequest;
import vn.vnpay.register.dto.request.UserUpdateRequest;
import vn.vnpay.register.entity.User;


public interface UserService {

    User findByUsername(String username );
    PageDTO findByFilter(UserFilterRequest userFilterRequest);
    ActionDTO createUser(UserNewRequest userNewRequest);
    ActionDTO updateUser(UserUpdateRequest user);
    ActionDTO blockAndUnlockUser(UserUpdateRequest user);
}
