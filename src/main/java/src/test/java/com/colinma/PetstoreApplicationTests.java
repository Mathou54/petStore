package com.colinma;

import com.colinma.repositories.PetRepository;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

@RunWith(SpringRunner.class)
@SpringBootTest
public class PetstoreApplicationTests {

	@Autowired
	private PetRepository petRepository;

	/**
	 * Removing data added for demo purpose
	 *
	 * @see PetstoreApplication#demo(PetRepository)
	 */
	@Before
	public void cleanDatabase() {
		this.petRepository.deleteAll();
	}

	@Test
	public void contextLoads() {
	}

}
