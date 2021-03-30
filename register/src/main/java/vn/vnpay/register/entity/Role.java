package vn.vnpay.register.entity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Table(name = "TB_ROLE")
@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class Role {

    @Id
    @Column(name = "N_ID")
    @SequenceGenerator(name="seq",sequenceName="ROLE_SEQ", allocationSize = 1)
    @GeneratedValue(strategy=GenerationType.SEQUENCE, generator="seq")
    private Long id;

    @Column(name = "S_NAME")
    private String name;

    @Column(name = "N_STATUS")
    private Integer status;
}
