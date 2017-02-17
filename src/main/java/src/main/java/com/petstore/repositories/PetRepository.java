package com.petstore.repositories;

import com.petstore.model.Pet;
import org.springframework.data.repository.CrudRepository;

/**
 * {@link CrudRepository} of {@link Pet}s.
 */
public interface PetRepository extends CrudRepository<Pet, Long> {
}
