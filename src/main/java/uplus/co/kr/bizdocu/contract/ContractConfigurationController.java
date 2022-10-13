package uplus.co.kr.bizdocu.contract;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

//전자계약 - 환경설정
@Controller
@RequestMapping("/bizdocu")
public class ContractConfigurationController {

	// 환경설정 - 환경설정
	@GetMapping("/Preferences")
	public String Preferences(Model model) {
		
		return "bizdocu/Preferences";
	}
	
	// 환경설정 - 주소록관리
	@GetMapping("/ContractAddrList")
	public String ContractAddrList(Model model) {
		
		return "bizdocu/ContractAddrList";
	}
	
	// 환경설정 - 부서관리
	@GetMapping("/Department")
	public String Department(Model model) {
		
		return "bizdocu/Department";
	}	

	// 환경설정 - 계좌관리
	@GetMapping("/BankAccount")
	public String BankAccount(Model model) {
		
		return "bizdocu/BankAccount";
	}
	
	// 환경설정 - 카테고리관리
	@GetMapping("/Category")
	public String Category(Model model) {
		
		return "bizdocu/Category";
	}	
}
