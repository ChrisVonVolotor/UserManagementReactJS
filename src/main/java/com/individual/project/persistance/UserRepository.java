package com.individual.project.persistance;

import com.individual.project.Users.UserCreation;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UserRepository extends JpaRepository<UserCreation, Long> {
    List<UserCreation> findByFirstNameContainingIgnoreCaseOrLastNameContainingIgnoreCase(String partial, String partial2);
    List<UserCreation> findByFirstNameContainingIgnoreCase(String partial);
    List<UserCreation> findByLastNameContainingIgnoreCase(String partial);
    List<UserCreation> findByAccountNumber(Long exact);
    UserCreation findByAccountNumberEquals(Long exact);

}
