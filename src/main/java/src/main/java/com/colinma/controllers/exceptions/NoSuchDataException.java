package com.colinma.controllers.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

/**
 * {@link Exception} to return when the data is not found.
 */
@ResponseStatus(HttpStatus.NOT_FOUND)
public class NoSuchDataException extends RuntimeException {
	/**
	 * {@link Exception} to return when the data is not found.
	 *
	 * @param msg The message to display.
	 */
	public NoSuchDataException(String msg) {
		super(msg);
	}
}
