package com.colinma.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

/**
 * {@link Controller} allowing to redirect angular routes to index.html in order to access the angular route (avoid 404 except in / route).
 */
@Controller
@RequestMapping({"/pet", "/pet/**"})
public class ApplicationController {

	@RequestMapping(method = RequestMethod.GET)
	public String index() {
		return "forward:/index.html";
	}
}
