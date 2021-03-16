package vn.vnpay.register.util;

import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import vn.vnpay.register.security.UserPrincipal;

public class SecurityUtil {

    public SecurityUtil() {
    }

    public static Long getCurrentUserId() {

        final Authentication authentication = SecurityContextHolder.getContext().getAuthentication();

        if (authentication != null){

            final  Object o = authentication.getPrincipal();

            if (o instanceof UserPrincipal){
                UserPrincipal userPrincipal = (UserPrincipal) o;
                return userPrincipal.getId();
            }
        }
        return 0L;
    }
}
