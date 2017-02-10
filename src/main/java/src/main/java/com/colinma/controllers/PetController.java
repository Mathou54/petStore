package com.colinma.controllers;

import com.colinma.controllers.exceptions.NoSuchDataException;
import com.colinma.model.Pet;
import com.colinma.services.PetService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

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
}
