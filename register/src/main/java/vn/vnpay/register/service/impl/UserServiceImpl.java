package vn.vnpay.register.service.impl;

import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import vn.vnpay.register.dto.PageDTO;
import vn.vnpay.register.dto.request.UserFilterRequest;
import vn.vnpay.register.entity.User;
import vn.vnpay.register.repository.UserRepository;
import vn.vnpay.register.service.UserService;

import java.util.List;

@Service
@Slf4j
public class UserServiceImpl implements UserService {

    @Autowired
    private UserRepository userRepository;

    @Override
    public User findByUsername(String username) {
         return userRepository.findbyUsername(username);
    }

    @Override
    public PageDTO findByFilter(UserFilterRequest userFilterRequest) {

        Pageable pageable = PageRequest.of(userFilterRequest.getPageNo(),
                userFilterRequest.getPageSize());

        Page<User> page = userRepository.findByFilter(userFilterRequest.getKeyword(), userFilterRequest.getStatus(), pageable);
        final  long total = page.getTotalElements();

        return PageDTO.builder()
                .content(page.toList())
                .total(total)
                .build();
    }
}
