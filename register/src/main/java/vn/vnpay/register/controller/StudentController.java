package vn.vnpay.register.controller;

import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;

import org.springframework.web.bind.annotation.RestController;
import vn.vnpay.register.dto.ResponseDTO;
import vn.vnpay.register.service.StudentService;
import vn.vnpay.register.util.Constant;

@RestController
@Slf4j
public class StudentController {

    @Autowired
    private StudentService studentService;

    @PostMapping("/all")
    public ResponseEntity<ResponseDTO> getListUser() {

        log.info("call api /all ");
        return ResponseEntity.ok().body(
                ResponseDTO.builder()
                        .map(studentService.findAll())
                        .code(Constant.RESPONSE.CODE.OK)
                        .message(Constant.RESPONSE.MESSAGE.OK)
                        .build()
        );
    }

}
