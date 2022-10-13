package uplus.co.kr.bizdocu;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

import uplus.co.kr.bizdocu.service.UserService;

@Controller
public class ApplicationController {

	UserService userService;
	
	@GetMapping("/")
	public String index() {
		return "index";
	}
	
	@GetMapping("/tiles/dashboard")
	public String dashboard() {
		
		return "tiles/dashboard";
	}
	
}
