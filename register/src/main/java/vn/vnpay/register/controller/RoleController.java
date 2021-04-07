package vn.vnpay.register.controller;


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
import vn.vnpay.register.dto.request.RoleNewRQ;
import vn.vnpay.register.service.RoleService;
import vn.vnpay.register.service.UserService;
import vn.vnpay.register.util.Constant;

@RestController
@RequestMapping("/role")
public class RoleController {

    private final Logger logger = LoggerFactory.getLogger(RoleController.class);

    @Autowired
    private RoleService roleService;

    @PostMapping("/get_all")
    public ResponseEntity<ResponseDTO> getList() {

        logger.info("call api /get_all ");
        return ResponseEntity.ok().body(
                ResponseDTO.builder()
                        .map(roleService.findAll())
                        .code(Constant.RESPONSE.CODE.OK)
                        .message(Constant.RESPONSE.MESSAGE.OK)
                        .build()
        );
    }

    @PostMapping("/create")
    public ResponseEntity<ResponseDTO> createRole(@RequestBody  RoleNewRQ role) {

        logger.info("call api /create ");
        return ResponseEntity.ok().body(
                ResponseDTO.builder()
                        .map(roleService.createRole(role))
                        .code(Constant.RESPONSE.CODE.OK)
                        .message(Constant.RESPONSE.MESSAGE.OK)
                        .build()
        );
    }

    @PostMapping("/update")
    public ResponseEntity<ResponseDTO> updateRole( @RequestBody RoleNewRQ role) {

        logger.info("call api /update ");
        return ResponseEntity.ok().body(
                ResponseDTO.builder()
                        .map(roleService.updateRole(role))
                        .code(Constant.RESPONSE.CODE.OK)
                        .message(Constant.RESPONSE.MESSAGE.OK)
                        .build()
        );
    }





}
