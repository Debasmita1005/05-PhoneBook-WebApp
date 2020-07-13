package com.pbw.exception;

import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

@ControllerAdvice
public class PhoneBookExceptionHandler {
	
	@ExceptionHandler(value = PhoneBookAppException.class)
	public String handlePhoneBookException() {
		return "error";
	}
	
	/*
	 * @ExceptionHandler(value = NullPointerException.class) public String
	 * handleNullPointerException() { return "error"; }
	 */
}
