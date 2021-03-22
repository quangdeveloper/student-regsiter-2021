package vn.vnpay.register.entity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Table(name = "TB_FOREIGN_LANGUAGE")
@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class ForeignLanguage {

    @Id
    @Column(name = "N_ID")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "N_LISTEN")
    private Integer listen;

    @Column(name = "N_READ")
    private Integer read;

    @Column(name = "N_WRITE")
    private Integer write;

    @Column(name = "N_SPEAK")
    private Integer speak  ;
}
