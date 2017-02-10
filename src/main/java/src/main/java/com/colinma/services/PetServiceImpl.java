package com.colinma.services;

import com.colinma.model.Pet;
import com.colinma.repositories.PetRepository;
import org.apache.commons.collections4.IteratorUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional
public class PetServiceImpl implements PetService {

	@Autowired
	private PetRepository petRepository;

	@Override
	@Transactional(readOnly = true)
	public List<Pet> get() {
		return IteratorUtils.toList(this.petRepository.findAll().iterator());
	}

	@Override
	@Transactional(readOnly = true)
	public Pet get(long id) {
		return this.petRepository.findOne(id);
	}

	@Override
	public Pet add(Pet pet) {
		return this.petRepository.save(pet);
	}

	@Override
	public Pet update(Pet pet) {
		return this.petRepository.save(pet);
	}

	@Override
	public void delete(long id) {
		this.petRepository.delete(id);
	}
}
