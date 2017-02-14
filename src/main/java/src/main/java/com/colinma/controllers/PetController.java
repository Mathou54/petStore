package com.colinma.controllers;

import com.colinma.controllers.exceptions.NoSuchDataException;
import com.colinma.model.Pet;
import com.colinma.services.PetService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * {@link Controller} of {@link Pet}s.
 */
@Controller
@RequestMapping(value = "/api/pet", produces = "application/json")
public class PetController {

	@Autowired
	private PetService petService;

	/**
	 * Get the {@link List} of {@link Pet}s.<br />
	 * URL: GET <code>/pet</code>
	 *
	 * @return the {@link List} of {@link Pet}s.
	 */
	@RequestMapping(method = RequestMethod.GET)
	@ResponseBody
	public List<Pet> list() {
		return this.petService.get();
	}

	/**
	 * Get a {@link Pet} by its id.<br />
	 * URL: GET <code>/pet/id</code>
	 *
	 * @return the {@link Pet}.
	 */
	@RequestMapping(value = "/{id}", method = RequestMethod.GET)
	@ResponseBody
	public Pet get(@PathVariable long id) {
		Pet pet = this.petService.get(id);
		if (pet == null) {
			throw new NoSuchDataException("Pet not found");
		}
		return pet;
	}

	/**
	 * Create a {@link Pet}.<br />
	 * URL: PUT <code>/pet</code>
	 *
	 * @return the {@link Pet}.
	 */
	@RequestMapping(method = RequestMethod.POST)
	@ResponseBody
	public Pet create(@RequestBody Pet pet) {
		return this.petService.add(pet);
	}

	/**
	 * Update a {@link Pet}.<br />
	 * URL: PUT <code>/pet</code>
	 *
	 * @return the {@link Pet}.
	 */
	@RequestMapping(method = RequestMethod.PUT)
	@ResponseBody
	public Pet update(@RequestBody Pet pet) {
		return this.petService.update(pet);
	}

	/**
	 * Delete a {@link Pet}.<br />
	 * URL: DELETE <code>/pet/id</code>
	 */
	@RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
	@ResponseBody
	public void remove(@PathVariable long id) {
		this.petService.delete(id);
	}
}
