package vn.vnpay.register.repository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import vn.vnpay.register.dto.request.UserFilterRequest;
import vn.vnpay.register.entity.User;

public interface UserRepository extends JpaRepository<User, Long> {

    @Query("select u from User u where u.username = :username")
    User findbyUsername(String username);

    @Query("select  u from User  u where (:status is null or u.status = :status) " +
            "and (:keyword is null or :keyword = '' or u.fullname like %:keyword%) ")
    Page<User> findByFilter(String keyword, Integer status, Pageable pageable);
}
