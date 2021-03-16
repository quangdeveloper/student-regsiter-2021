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
import vn.vnpay.register.service.UserService;
import vn.vnpay.register.util.Constant;

@RestController
@RequestMapping("/user")
public class UserController {


    private final Logger logger = LoggerFactory.getLogger(UserController.class);

    @Autowired
    private UserService userService;

    @PostMapping("/find_by_username")
    public ResponseEntity<ResponseDTO> getListUser(@RequestBody LoginRequest loginRequest) {

        logger.info("call api /find_by_username ");
        return ResponseEntity.ok().body(
                ResponseDTO.builder()
                        .map(userService.findAllUser())
                        .code(Constant.RESPONSE.CODE.OK)
                        .message(Constant.RESPONSE.MESSAGE.OK)
                        .build()
        );
    }

}
