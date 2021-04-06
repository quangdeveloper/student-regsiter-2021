package vn.vnpay.register.service.impl;

import com.google.common.collect.ImmutableBiMap;
import com.google.common.collect.ImmutableMap;
import lombok.extern.slf4j.Slf4j;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import vn.vnpay.register.dto.ActionDTO;
import vn.vnpay.register.dto.PageDTO;
import vn.vnpay.register.dto.request.UserFilterRequest;
import vn.vnpay.register.dto.request.UserNewRequest;
import vn.vnpay.register.dto.request.UserUpdateRequest;
import vn.vnpay.register.entity.User;
import vn.vnpay.register.exception.GeneralException;
import vn.vnpay.register.repository.UserRepository;
import vn.vnpay.register.service.RoleService;
import vn.vnpay.register.service.UserService;
import vn.vnpay.register.util.Constant;

@Service
@Slf4j
public class UserServiceImpl implements UserService {

    private final Logger logger = LoggerFactory.getLogger(this.getClass());

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Override
    public User findByUsername(String username) {
        return userRepository.findbyUsername(username);
    }

    @Override
    public ActionDTO createUser(UserNewRequest userNewRequest) {

        User user = userRepository.findbyUsername(userNewRequest.getUsername());
        if (user != null) {
            logger.error("GeneralException: ");
            throw new GeneralException(Constant.RESPONSE.CODE.C409, Constant.RESPONSE.MESSAGE.C409_USER);
        }

        User newUser = User.builder()
                .username(userNewRequest.getUsername())
                .password(passwordEncoder.encode(userNewRequest.getPassword()))
                .fullname(userNewRequest.getFullname())
                .address(userNewRequest.getAddress())
                .age(userNewRequest.getAge())
                .email(userNewRequest.getEmail())
                .status(1)
                .build();
        try {
            return new ActionDTO(ImmutableMap.builder()
                    .put("newUser", userRepository.save(newUser))
                    .build());

        } catch (Exception ex) {
            log.error("Database exception ", ex);
            return new ActionDTO(ImmutableMap.builder()
                    .build());
        }


    }

    @Override
    public ActionDTO updateUser(UserUpdateRequest userUpdateRequest) {

        User newUser = User.builder()
                .id(userUpdateRequest.getId())
                .username(userUpdateRequest.getUsername())
                .password(userRepository.findbyUsername(userUpdateRequest.getUsername()).getPassword())
                .fullname(userUpdateRequest.getFullName())
                .address(userUpdateRequest.getAddress())
                .age(userUpdateRequest.getAge())
                .email(userUpdateRequest.getEmail())
                .status(1)
                .build();
        try {
            userRepository.save(newUser);
        } catch (Exception ex) {
            log.error("Database exception ", ex);
        }

        return new ActionDTO(ImmutableMap.builder()
                .put("200", " Function success")
                .build());
    }

    @Override
    public ActionDTO blockAndUnlockUser(UserUpdateRequest user) {
        try {
            User newUser = userRepository.findbyUsername(user.getUsername());
            newUser.setStatus(user.getStatus());
            userRepository.save(newUser);
        } catch (Exception ex) {
            log.error("Database exception ", ex);
        }

        return new ActionDTO(ImmutableMap.builder()
                .put("200", " Function success")
                .build());
    }

    @Override
    public PageDTO findByFilter(UserFilterRequest userFilterRequest) {

        Pageable pageable = PageRequest.of(userFilterRequest.getPageNo() - 1,
                userFilterRequest.getPageSize());

        Page<User> page = userRepository.findByFilter(userFilterRequest.getKeyword(), userFilterRequest.getStatus(), pageable);
        final long total = page.getTotalElements();

        return PageDTO.builder()
                .content(page.toList())
                .total(total)
                .build();
    }
}
