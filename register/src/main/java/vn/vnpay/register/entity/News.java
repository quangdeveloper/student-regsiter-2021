package vn.vnpay.register.entity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Table(name = "TB_NEWS")
@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class News {

    @Id
    @Column(name = "N_ID")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "S_NAME")
    private String name;

    @Column(name = "S_CONTENT")
    private String content;

    @Column(name = "S_THUMNAIL")
    private String thumnail;

    @Column(name = "S_AUTHOR")
    private String author;

    @Column(name = "S_CREATED_DATE")
    private String createdDate;

    @Column(name = "N_STATUS")
    private Integer status;
}
