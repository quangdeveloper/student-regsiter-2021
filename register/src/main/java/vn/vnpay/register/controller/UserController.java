package vn.vnpay.register.controller;


import io.swagger.annotations.ApiParam;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import vn.vnpay.register.dto.ResponseDTO;
import vn.vnpay.register.dto.request.LoginRequest;
import vn.vnpay.register.dto.request.UserFilterRequest;
import vn.vnpay.register.dto.request.UserNewRequest;
import vn.vnpay.register.dto.request.UserUpdateRequest;
import vn.vnpay.register.service.UserService;
import vn.vnpay.register.util.Constant;

@RestController
@RequestMapping("/user")
public class UserController {


    private final Logger logger = LoggerFactory.getLogger(UserController.class);

    @Autowired
    private UserService userService;

    @PostMapping("/find_by_filter")
    public ResponseEntity<ResponseDTO> findByFilter(@RequestBody UserFilterRequest request) {

        logger.info("call api /find_by_filter ");
        return ResponseEntity.ok().body(
                ResponseDTO.builder()
                        .map(userService.findByFilter(request))
                        .code(Constant.RESPONSE.CODE.OK)
                        .message(Constant.RESPONSE.MESSAGE.OK)
                        .build()
        );
    }

    @PostMapping("/create")
    public ResponseEntity<ResponseDTO> createUser(@RequestBody UserNewRequest userNewRequest) {

        logger.info("call api /create ");
        return ResponseEntity.ok().body(
                ResponseDTO.builder()
                        .map(userService.createUser(userNewRequest))
                        .code(Constant.RESPONSE.CODE.OK)
                        .message(Constant.RESPONSE.MESSAGE.OK)
                        .build()
        );
    }


    @PostMapping("/update")
    public ResponseEntity<ResponseDTO> updateUser(@RequestBody UserUpdateRequest user) {

        logger.info("call api /create ");
        return ResponseEntity.ok().body(
                ResponseDTO.builder()
                        .map(userService.updateUser(user))
                        .code(Constant.RESPONSE.CODE.OK)
                        .message(Constant.RESPONSE.MESSAGE.OK)
                        .build()
        );
    }

    @PostMapping("/block")
    public ResponseEntity<ResponseDTO> blockUser(@RequestBody UserUpdateRequest user) {

        logger.info("call api blockUser ");
        return ResponseEntity.ok().body(
                ResponseDTO.builder()
                        .map(null)
                        .code(Constant.RESPONSE.CODE.OK)
                        .message(Constant.RESPONSE.MESSAGE.OK)
                        .build()
        );
    }

    @PostMapping("/login")
    public ResponseEntity<ResponseDTO> login(@RequestBody LoginRequest user) {

        logger.info("call api login");
        return ResponseEntity.ok().body(
                ResponseDTO.builder()
                        .map(user)
                        .code(Constant.RESPONSE.CODE.OK)
                        .message(Constant.RESPONSE.MESSAGE.OK)
                        .build()
        );
    }




}
