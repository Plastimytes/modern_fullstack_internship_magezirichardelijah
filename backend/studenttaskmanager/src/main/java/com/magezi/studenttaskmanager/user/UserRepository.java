package com.magezi.studenttaskmanager.user;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {

    Optional<User> findByEmail(String email); //Finding User by email

    Optional<User> findByUsername(String username); //Spring Security load User

    //Check if a user exists by email or username
    Boolean existsByEmail(String email);

    Boolean existsByUsername(String username);
}