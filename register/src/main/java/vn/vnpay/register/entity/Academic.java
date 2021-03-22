package vn.vnpay.register.entity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Table(name = "TB_ACADEMIC")
@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class Academic {

    @Id
    @Column(name = "N_ID")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "N_SCHOOL_NAME")
    private String schoolName;

    @Column(name = "D_START_YEAR")
    private Integer startYear;

    @Column(name = "D_END_YEAR")
    private Integer endYear;

    @Column(name = "N_JPA10")
    private Integer jpa10;

    @Column(name = "N_JPA11")
    private Integer jpa11;

    @Column(name = "N_JPA12")
    private Integer jpa12;

    @Column(name = "S_ACHIVEMENT_SPEC")
    private String achivementSpec;

}
