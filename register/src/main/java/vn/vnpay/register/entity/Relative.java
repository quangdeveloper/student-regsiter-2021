package vn.vnpay.register.entity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Table(name = "TB_RELATIVE")
@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class Relative {

    @Id
    @Column(name = "N_ID")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "S_NAME")
    private String name;

    @Column(name = "N_GENDER")
    private Integer gender;

    @Column(name = "S_PHONE")
    private String phone;

    @Column(name = "S_ADDRESS")
    private String address;

    @Column(name = "S_RELATION")
    private String relation;

    @Column(name = "S_JOB")
    private String job;

}
