package com.petstore;

import com.petstore.model.Pet;
import com.petstore.repositories.PetRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class PetstoreApplication {

	public static void main(String[] args) {
		SpringApplication.run(PetstoreApplication.class, args);
	}

	/**
	 * Code adding data for demo purpose.
	 */
	@Bean
	public CommandLineRunner demo(PetRepository repository) {
		return (args) -> {
			// Save a couple of pets
			repository.save(new Pet("Bauer", true, Pet.PetType.dog, true, 1));
			repository.save(new Pet("O'Brian", false, Pet.PetType.cat, true, 2));
			repository.save(new Pet("Bauer", true, Pet.PetType.fish, false, 3));
			repository.save(new Pet("Palmer", false, Pet.PetType.dog, false, 4));
			repository.save(new Pet("Dessler", true, Pet.PetType.cat, true, 5));
			repository.save(new Pet("Roger", false, Pet.PetType.fish, true, 6));
			repository.save(new Pet("Tom", false, Pet.PetType.cat, true, 18));
			repository.save(new Pet("Helder the Golden Fish", false, Pet.PetType.dog, true, 108));
			repository.save(new Pet("Céline the Dolphin", true, Pet.PetType.cat, true, 22));
			repository.save(new Pet("Bobo the Dodo", false, Pet.PetType.dog, false, 500));
			repository.save(new Pet("Gerald the Narwhal", false, Pet.PetType.fish, true, 1262));
		};
	}
}
