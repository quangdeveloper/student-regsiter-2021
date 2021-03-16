package vn.vnpay.register.security;

import com.fasterxml.jackson.annotation.JsonIgnore;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import vn.vnpay.register.entity.User;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;
import java.util.Objects;
import java.util.stream.Collectors;

public class UserPrincipal implements UserDetails {

    private Long id;

    private String username;

    @JsonIgnore
    private String password;

    private Collection<? extends GrantedAuthority> authorities;

    private Integer active;

    public UserPrincipal() {
    }

    public UserPrincipal(final User user) {

        List<GrantedAuthority> authorities = new ArrayList<>();

        this.id = user.getId();

        this.username = user.getUsername();

        this.password = user.getPassword();

        this.authorities = authorities;

        this.active = user.getStatus();
    }


    public Long getId() {
        return id;
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return authorities;
    }

    @Override
    public String getPassword() {
        return password;
    }

    @Override
    public String getUsername() {
        return username;
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }

    @Override
    public boolean equals(Object obj) {
        if (obj == this) return true;

        if (obj == null || obj.getClass() != getClass()) return false;

        UserPrincipal userPrincipal = (UserPrincipal) obj;

        return Objects.equals(id, userPrincipal.id);
    }

    @Override
    public int hashCode() {

        return Objects.hashCode(id);
    }
}


