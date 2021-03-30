package vn.vnpay.register.entity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Table(name = "TB_COURSE")
@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class Course {

    @Id
    @Column(name = "N_ID")
    @SequenceGenerator(name="seq",sequenceName="COURSE_SEQ", allocationSize = 1)
    @GeneratedValue(strategy=GenerationType.SEQUENCE, generator="seq")
    private Long id;

    @Column(name = "S_NAME")
    private String name;

    @Column(name = "D_START_DATE")
    private Integer startDate;

    @Column(name = "D_END_DATE")
    private Integer endDate;

    @Column(name = "N_TRAINNING_SYSTEM")
    private Integer trainningSystem;

    @Column(name = "N_FEE")
    private Integer fee;

    @Column(name = "S_DESCRIPTION")
    private String description;

    @Column(name = "N_STATUS")
    private Integer status;
}
