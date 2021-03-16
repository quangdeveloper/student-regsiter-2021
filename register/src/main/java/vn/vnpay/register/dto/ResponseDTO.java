package vn.vnpay.register.dto;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.SuperBuilder;
import org.springframework.util.StringUtils;

@Data
@SuperBuilder
@AllArgsConstructor
@NoArgsConstructor
@JsonPropertyOrder({"map", "code", "message"})
public class ResponseDTO {

    @JsonIgnore
    private Object map;

    private String code;

    private String message;

    @JsonProperty("map")
    public Object getBody() {

        if (map != null && map instanceof ActionDTO) {
            return ((ActionDTO) map).getValue();
        }
        if (!StringUtils.hasText(message)) {
            this.message = "no message";
        }
        return map;
    }

}
