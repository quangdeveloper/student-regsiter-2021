package vn.vnpay.register.entity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Table(name = "TB_SCHOLARSHIP_TYPE")
@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class ScholarshipType {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "N_ID")
    private Long id;

    @Column(name = "S_NAME")
    private String name;

}
