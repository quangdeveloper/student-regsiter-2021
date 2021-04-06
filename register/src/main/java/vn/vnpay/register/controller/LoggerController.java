package vn.vnpay.register.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class LoggerController {

    @PostMapping("/logger")
    public ResponseEntity processLoggerFE(@RequestBody Object ob) {
        System.out.println(ob.toString());
        return ResponseEntity.ok("Success");
    }
}
