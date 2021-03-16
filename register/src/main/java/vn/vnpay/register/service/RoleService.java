package vn.vnpay.register.service;

import vn.vnpay.register.entity.Role;
import vn.vnpay.register.entity.User;

import java.util.List;

public interface RoleService {

    List<Role> findAll();
}
