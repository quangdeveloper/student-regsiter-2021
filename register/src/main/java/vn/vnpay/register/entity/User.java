package vn.vnpay.register.entity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Table(name = "TB_USER")
@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class User {

    @Id
    @Column(name = "N_ID")
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private Long id;

    @Column(name = "S_USERNAME")
    private String username;

    @Column(name = "S_PASSWORD")
    private String password;

    @Column(name = "S_FULLNAME")
    private String fullname;

    @Column(name = "S_ADDRESS")
    private String address;

    @Column(name = "N_AGE")
    private Integer age;

    @Column(name = "N_STATUS")
    private Integer status;

    @Column(name = "S_EMAIL")
    private String email;

}
