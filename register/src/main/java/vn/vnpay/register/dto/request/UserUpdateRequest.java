package vn.vnpay.register.dto.request;

import lombok.Data;
import org.hibernate.validator.constraints.Length;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

@Data
public class UserUpdateRequest {


    private Long id;

    @NotNull(message = "Username not null")
    @NotBlank(message = "Username not blank")
    @Length(min = 10, message = "Username mỏe then ten word")
    private String username;

    private String password;

    private String fullName;

    private Integer age;

    private String address;

    private String email;
}
