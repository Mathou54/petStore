package com.petstore.services;

import com.petstore.PetstoreApplicationTests;
import com.petstore.model.Pet;
import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.ArrayList;
import java.util.List;


public class PetServiceTest extends PetstoreApplicationTests {

	private static final String PET_NAME = "petName";
	private static final boolean PET_NEW = true;
	private static final Pet.PetType PET_TYPE = Pet.PetType.fish;
	private static final boolean PET_HIGHLIGHTED = false;
	private static final long PET_AGE = 42;

	@Autowired
	private PetService petService;

	private List<Pet> pets;

	@Before
	public void before() {
		this.pets = new ArrayList<>();

		pets.add(new Pet("Bauer", true, Pet.PetType.dog, true, 1));
		pets.add(new Pet("O'Brian", false, Pet.PetType.cat, true, 2));
		pets.add(new Pet("Bauer", true, Pet.PetType.fish, false, 3));
		pets.add(new Pet("Palmer", false, Pet.PetType.dog, false, 4));
		pets.add(new Pet("Dessler", true, Pet.PetType.cat, true, 5));
		pets.add(new Pet("Roger", false, Pet.PetType.fish, true, 6));

		this.petService.add(this.pets.get(0));
		this.petService.add(this.pets.get(1));
		this.petService.add(this.pets.get(2));
		this.petService.add(this.pets.get(3));
		this.petService.add(this.pets.get(4));
		this.petService.add(this.pets.get(5));
	}

	@Test
	public void test_get() {
		List<Pet> get = this.petService.get();

		Assert.assertEquals(this.pets.size(), get.size());
		Assert.assertEquals(this.pets, get);
	}

	@Test
	public void test_getOne() {
		Pet get = this.petService.get(this.pets.get(0).getId());

		Assert.assertEquals(this.pets.get(0), get);
	}

	@Test
	public void test_add() {
		Pet expected = new Pet(PET_NAME, PET_NEW, PET_TYPE, PET_HIGHLIGHTED, PET_AGE);
		Pet actual = this.petService.add(expected);

		Assert.assertEquals(expected, actual);
	}

	@Test
	public void test_update() {
		Pet expected = this.petService.get(this.pets.get(0).getId());
		expected.setName(PET_NAME);
		Pet actual = this.petService.update(expected);

		Assert.assertEquals(expected, actual);
	}

	@Test
	public void test_delete() {
		Pet deleted = this.petService.get(this.pets.get(0).getId());
		this.petService.delete(this.pets.get(0).getId());

		Assert.assertEquals(this.pets.size() - 1, this.petService.get().size());
		Assert.assertFalse(this.petService.get().contains(deleted));
	}

}