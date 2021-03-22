package vn.vnpay.register.dto.request;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class UserFilterRequest {

    @Builder.Default
    private Integer pageNo = 1;

    @Builder.Default
    private Integer pageSize = 10;

    private String keyword;

    private Integer status;
}
