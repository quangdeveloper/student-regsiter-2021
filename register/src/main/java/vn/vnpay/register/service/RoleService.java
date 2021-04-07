package vn.vnpay.register.service;

import vn.vnpay.register.dto.ActionDTO;
import vn.vnpay.register.dto.PageDTO;
import vn.vnpay.register.dto.request.RoleNewRQ;
import vn.vnpay.register.dto.request.UserNewRequest;
import vn.vnpay.register.dto.request.UserUpdateRequest;
import vn.vnpay.register.entity.Role;
import vn.vnpay.register.entity.User;

import java.util.List;

public interface RoleService {

    PageDTO findAll();
    ActionDTO createRole(RoleNewRQ roleNewRQ);
    ActionDTO updateRole(RoleNewRQ roleNewRQ);

}
