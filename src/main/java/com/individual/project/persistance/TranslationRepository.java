
package com.individual.project.persistance;

import com.individual.project.Users.TranslationCreation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TranslationRepository extends JpaRepository<TranslationCreation, Long> {
    List<TranslationCreation> findByLanguageCode(String lang);
    List<TranslationCreation> findAll();
}
