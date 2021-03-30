package vn.vnpay.register.service.impl;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import vn.vnpay.register.entity.Role;
import vn.vnpay.register.repository.RoleRepository;
import vn.vnpay.register.service.RoleService;
import java.util.List;

@Service
public class RoleServiceImpl implements RoleService {

    private final Logger logger = LoggerFactory.getLogger(RoleServiceImpl.class);

    @Autowired
    private RoleRepository roleRepository;


    @Override
    public List<Role> findAll() {

        return roleRepository.findAll();
    }

    @Override
    public void createRole() {
        roleRepository.save(Role.builder()
                .name("test vui 1")
        .build());
    }
}
