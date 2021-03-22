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

}
