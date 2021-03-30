package vn.vnpay.register.entity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Table(name = "TB_PAYMENT_TYPE")
@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class PaymentType {

    @Id
    @SequenceGenerator(name="seq",sequenceName="PAYMENT_TYPE_SEQ", allocationSize = 1)
    @GeneratedValue(strategy=GenerationType.SEQUENCE, generator="seq")
    @Column(name = "N_ID")
    private Long id;

    @Column(name = "S_NAME")
    private String name;

}
