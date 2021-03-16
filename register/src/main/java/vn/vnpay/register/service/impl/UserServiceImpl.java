package vn.vnpay.register.service.impl;

import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
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
    public List<User> findAllUser() {

        return null;
    }
}
