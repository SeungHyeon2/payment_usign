package uplus.co.kr.bizdocu.contract;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/main/intro")
public class ContractGuideController {

	@GetMapping("/Definition")
	public String Charge() {
		return "main/intro/Definition";
	}
	
	@GetMapping("/Charge")
	public String Definition() {
		return "main/intro/Charge";
	}
	
}
