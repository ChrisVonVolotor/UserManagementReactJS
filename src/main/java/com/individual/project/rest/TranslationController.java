

package com.individual.project.rest;

import com.individual.project.Users.TranslationCreation;
import com.individual.project.constants.Constants;
import com.individual.project.persistance.TranslationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = Constants.TRANSLATIONS)
public class TranslationController {

    private TranslationRepository translationRepository;

    @Autowired
    public TranslationController(TranslationRepository translationRepository){
        this.translationRepository = translationRepository;
    }

    @RequestMapping(value = Constants.GET_THIS_TRANS, method = RequestMethod.GET)
    public List<TranslationCreation> getByLanguage(@PathVariable String lang){
        return translationRepository.findByLanguageCode(lang);
    }

    @RequestMapping(value = Constants.GET_ALL_TRANS, method = RequestMethod.GET)
    public List<TranslationCreation> getByLanguage(){
        return translationRepository.findAll();
    }

    @RequestMapping(value = Constants.ADD_TRANS, method = RequestMethod.POST)
    public List<TranslationCreation> create(@RequestBody TranslationCreation translationCreation){
        translationRepository.save(translationCreation);

        return translationRepository.findAll();
    }}
