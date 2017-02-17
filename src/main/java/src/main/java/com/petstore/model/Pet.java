package com.petstore.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.io.Serializable;

/**
 * Class representing a pet.
 */
@Entity
public class Pet implements Serializable {

	public enum PetType {
		dog, cat, fish;
	}

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long id;
	private String name;
	private boolean isNew;
	private PetType type;
	private boolean isHighlighted;
	private long age;

	public Pet() {
	}

	public Pet(String name, boolean isNew, PetType type, boolean isHighlighted, long age) {
		this.name = name;
		this.isNew = isNew;
		this.type = type;
		this.isHighlighted = isHighlighted;
		this.age = age;
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public boolean isNew() {
		return isNew;
	}

	public void setNew(boolean aNew) {
		isNew = aNew;
	}

	public PetType getType() {
		return type;
	}

	public void setType(PetType type) {
		this.type = type;
	}

	public boolean isHighlighted() {
		return isHighlighted;
	}

	public void setHighlighted(boolean highlighted) {
		isHighlighted = highlighted;
	}

	public long getAge() {
		return age;
	}

	public void setAge(long age) {
		this.age = age;
	}

	@Override
	public boolean equals(Object o) {
		if (this == o) return true;
		if (o == null || getClass() != o.getClass()) return false;

		Pet pet = (Pet) o;

		if (id != pet.id) return false;
		if (isNew != pet.isNew) return false;
		if (isHighlighted != pet.isHighlighted) return false;
		if (age != pet.age) return false;
		if (name != null ? !name.equals(pet.name) : pet.name != null) return false;
		return type == pet.type;

	}

	@Override
	public int hashCode() {
		int result = (int) (id ^ (id >>> 32));
		result = 31 * result + (name != null ? name.hashCode() : 0);
		result = 31 * result + (isNew ? 1 : 0);
		result = 31 * result + (type != null ? type.hashCode() : 0);
		result = 31 * result + (isHighlighted ? 1 : 0);
		result = 31 * result + (int) (age ^ (age >>> 32));
		return result;
	}

	@Override
	public String toString() {
		return "Pet{" +
				"id=" + id +
				", name='" + name + '\'' +
				", isNew=" + isNew +
				", type=" + type +
				", isHighlighted=" + isHighlighted +
				", age=" + age +
				'}';
	}
}
