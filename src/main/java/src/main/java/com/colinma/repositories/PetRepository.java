package com.colinma.repositories;

import com.colinma.model.Pet;
import org.springframework.data.repository.CrudRepository;

/**
 * Created by colinma on 10/02/2017.
 */
public interface PetRepository extends CrudRepository<Pet, Long> {

    Pet findById(final long id);
}
