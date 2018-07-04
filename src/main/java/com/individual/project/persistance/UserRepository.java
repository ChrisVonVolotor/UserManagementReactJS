package com.individual.project.persistance;

import com.individual.project.Users.UserCreation;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UserRepository extends JpaRepository<UserCreation, Long> {
    List<UserCreation> findByFirstNameContainingIgnoreCaseOrLastNameContainingIgnoreCaseOrderByAccountNumber(String partial, String partial2);
    List<UserCreation> findByFirstNameContainingIgnoreCaseOrderByFirstName(String partial);
    List<UserCreation> findByLastNameContainingIgnoreCaseOrderByLastName(String partial);
    List<UserCreation> findByAccountNumberOrderByAccountNumber(Long exact);
    UserCreation findByAccountNumberEquals(Long exact);

}
