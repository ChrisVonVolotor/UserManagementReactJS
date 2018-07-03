package com.individual.project.rest;

import com.individual.project.Users.UserCreation;
import com.individual.project.constants.Constants;
import com.individual.project.persistance.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = Constants.USERS)
public class UserController {

   private UserRepository userRepository;

    @Autowired
    public UserController(UserRepository userRepository){
        this.userRepository = userRepository;
    }

    @RequestMapping(value = Constants.GET_ALL_USERS, method = RequestMethod.GET)
    public List<UserCreation> getAll(){
        return userRepository.findAll();
    }

    @RequestMapping(value = Constants.SEARCH_ALL, method = RequestMethod.GET)
    public List<UserCreation> getByFullName(@PathVariable String partial){
      return userRepository.findByFirstNameContainingIgnoreCaseOrLastNameContainingIgnoreCase(partial, partial);


    }

    @RequestMapping(value = Constants.SEARCH_FIRST_NAME, method = RequestMethod.GET)
    public List<UserCreation> getByFirstName(@PathVariable String partial){
        return userRepository.findByFirstNameContainingIgnoreCase(partial);
    }

    @RequestMapping(value = Constants.SEARCH_LAST_NAME, method = RequestMethod.GET)
    public List<UserCreation> getByLastName(@PathVariable String partial){
        return userRepository.findByLastNameContainingIgnoreCase(partial);

    }

    @RequestMapping(value = Constants.SEARCH_ACCOUNT_NUMBER, method = RequestMethod.GET)
    public List<UserCreation> getByAccountNumber(@PathVariable long exact){
        return userRepository.findByAccountNumber(exact);
    }

    @RequestMapping(value = Constants.CREATE_USER, method = RequestMethod.POST)
    public List<UserCreation> create(@RequestBody UserCreation userCreation){
        userRepository.save(userCreation);

        return userRepository.findAll();
    }

    @RequestMapping(value = Constants.UPDATE_USER, method = RequestMethod.PUT)
    public List<UserCreation> update(@RequestBody UserCreation userCreation, @PathVariable long exact){
        UserCreation userCreation1 = userRepository.findByAccountNumberEquals(exact);
        userCreation1.setFirstName(userCreation.getFirstName());
        userCreation1.setLastName(userCreation.getLastName());
        userRepository.save(userCreation);

        return userRepository.findAll();
    }

    @RequestMapping(value = Constants.DELETE_USER, method = RequestMethod.POST)
    public List<UserCreation> remove(@PathVariable long accountNumber){
        userRepository.deleteById(accountNumber);
        return  userRepository.findAll();
    }
}
