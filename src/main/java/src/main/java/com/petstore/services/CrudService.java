package com.petstore.services;

import java.util.List;

/**
 * Define standard function for getting, adding, updating and deleting an object T.
 *
 * @param <T> The class to manage.
 */
public interface CrudService<T> {

    /**
     * Return all the objects of T.
     *
     * @return
     */
    List<T> get();

    /**
     * Find one object by its id.
     *
     * @param id Id of the object.
     * @return The found object.
     */
    T get(long id);

    /**
     * Add an object.
     *
     * @param object Object to add.
     * @return The added object.
     */
    T add(T object);

    /**
     * Update an existing object.
     *
     * @param object The object to update.
     * @return The updated object.
     */
    T update(T object);

    /**
     * delete an object by its id.
     *
     * @param id Id of the object to delete.
     */
    void delete(long id);
}
