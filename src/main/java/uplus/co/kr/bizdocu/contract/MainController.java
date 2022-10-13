package uplus.co.kr.bizdocu.contract;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

import uplus.co.kr.bizdocu.persistance.repository.UserRepository;
import uplus.co.kr.bizdocu.service.UserService;

@Controller
public class MainController {

	private final Logger logger = LoggerFactory.getLogger(getClass());
	
	@Autowired
	UserService userService;
	
	@RequestMapping("/main")
	public String toMain(Model model) {
		
		
		// 회사 이름
		String company = userService.getUserCompany("CTEST001");
		model.addAttribute("company", company);
		// 담당자 이름
		String name = userService.getUserName("CTEST001");
		model.addAttribute("name", name);
		// 사업자 번호
		int bnumber = userService.getUserBnumber("CTEST001");
		model.addAttribute("bnumber", bnumber);
		// 서비스 유형
		String service_type = userService.getUserServiceType("CTEST001");
		model.addAttribute("service_type", service_type);
		// 충전 잔액
		int charging_amount = userService.getUserChargingAmount("CTEST001");
		model.addAttribute("charging_amount", charging_amount);
		// 남은 충전 건수
		int use_count = userService.getUserCount("CTEST001");
		model.addAttribute("use_count", use_count);
		
		
		
//		String bnumber = userService.getUser(tmp).getBnumber()+"";
//		logger.info("bnumber : " + bnumber);
//		mv.addObject("bnumber", bnumber);
	
		
		
		return "main";
	}
}
