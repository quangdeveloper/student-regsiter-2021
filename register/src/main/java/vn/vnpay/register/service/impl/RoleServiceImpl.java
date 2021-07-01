package vn.vnpay.register.service.impl;

import com.google.common.collect.ImmutableMap;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import vn.vnpay.register.dto.ActionDTO;
import vn.vnpay.register.dto.PageDTO;
import vn.vnpay.register.dto.request.RoleNewRQ;
import vn.vnpay.register.entity.Role;
import vn.vnpay.register.exception.GeneralException;
import vn.vnpay.register.repository.RoleRepository;
import vn.vnpay.register.service.RoleService;
import vn.vnpay.register.util.Constant;


@Service
public class RoleServiceImpl implements RoleService {

    private final Logger log = LoggerFactory.getLogger(this.getClass());

    private final Logger logger = LoggerFactory.getLogger(RoleServiceImpl.class);

    @Autowired
    private RoleRepository roleRepository;


    @Override
    public PageDTO findAll() {

        return PageDTO.builder()
                .content(roleRepository.findAll())
                .total(roleRepository.findAll().size())
                .build();
    }

    @Override
    public ActionDTO createRole(RoleNewRQ roleNewRQ) {

      Role role = roleRepository.findByName(roleNewRQ.getName());
        if (role != null) {
            logger.error("GeneralException: ");
            throw new GeneralException(Constant.RESPONSE.CODE.C409, Constant.RESPONSE.MESSAGE.C409_USER);
        }

        Role newRole = Role.builder()
                .name(roleNewRQ.getName())
                .status(1)
                .build();
        try {
            return new ActionDTO(ImmutableMap.builder()
                    .put("newUser", roleRepository.save(newRole))
                    .build());

        } catch (Exception ex) {
            log.error("Database exception ", ex);
            return new ActionDTO(ImmutableMap.builder()
                    .build());
        }


    }

    @Override
    public ActionDTO updateRole(RoleNewRQ roleNewRQ) {

       Role role = Role.builder()
               .id(roleNewRQ.getId())
               .name(roleNewRQ.getName())
               .status(1)
               .build();
        try {
            return new ActionDTO(ImmutableMap.builder()
                    .put("newUser", roleRepository.save(role))
                    .build());

        } catch (Exception ex) {
            log.error("Database exception ", ex);
            return new ActionDTO(ImmutableMap.builder()
                    .build());
        }
    }
}
