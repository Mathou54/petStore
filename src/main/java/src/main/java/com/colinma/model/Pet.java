package com.colinma.model;

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
