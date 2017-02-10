package com.colinma;

import com.colinma.model.Pet;
import com.colinma.repositories.PetRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class PetstoreApplication {

    public static void main(String[] args) {
        SpringApplication.run(PetstoreApplication.class, args);
    }

    @Bean
    public CommandLineRunner demo(PetRepository repository) {
        return (args) -> {
            // Save a couple of pets
            repository.save(new Pet("Bauer"));
            repository.save(new Pet("O'Brian"));
            repository.save(new Pet("Bauer"));
            repository.save(new Pet("Palmer"));
            repository.save(new Pet("Dessler"));
        };
    }
}
