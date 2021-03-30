package vn.vnpay.register.entity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Table(name = "TB_STUDENT")
@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class Student {

    @Id
    @Column(name = "N_ID")
    @SequenceGenerator(name="seq",sequenceName="STUDENT_SEQ",  allocationSize = 1)
    @GeneratedValue(strategy=GenerationType.SEQUENCE, generator="seq")
    private Long id;

    @Column(name = "S_NAME")
    private String name;

    @Column(name = "S_ADDRESS")
    private String address;

    @Column(name = "S_CMND")
    private String cmnd;

    @Column(name = "S_NATIONAL")
    private String national;

    @Column(name = "S_PASSPORT")
    private String passport;

    @Column(name = "S_PHONE")
    private String phone;

    @Column(name = "S_EMAIL")
    private String email;

    @Column(name = "D_BIRTHDAY")
    private String birthday;

    @Column(name = "N_STATUS")
    private Integer status;

    @Column(name = "D_CREATED_DATE")
    private String createdDate;

    @Column(name = "N_COURSE_ID")
    private Integer courseId;

    @Column(name = "N_PAYMENT_TYPE_ID")
    private Integer paymentTypeId;

    @Column(name = "N_SCHOLARSHIP_TYPE_ID")
    private Integer scholarshipType;

    @Column(name = "N_START_YEAR_WISH")
    private Integer startYearWish;
}
