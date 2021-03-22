package vn.vnpay.register.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Builder;
import lombok.Data;

import java.util.Collections;

@Builder
@Data
public class PageDTO {

    @JsonProperty("list")
    @Builder.Default
    private Object content = Collections.emptyList();

    @Builder.Default
    private long total = 0;
}
