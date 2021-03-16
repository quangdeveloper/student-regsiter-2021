package vn.vnpay.register.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import vn.vnpay.register.entity.Role;
import vn.vnpay.register.entity.User;

import java.util.List;

public interface RoleRepository extends JpaRepository<Role, Long> {

    @Query("select r from Role r")
    List<Role> findAll();
}
