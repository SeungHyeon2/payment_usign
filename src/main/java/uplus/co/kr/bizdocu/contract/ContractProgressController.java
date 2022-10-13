package uplus.co.kr.bizdocu.contract;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

// 전자계약 - 계약진행
@Controller
@RequestMapping("/bizdocu")
public class ContractProgressController {
	
	// 계약진행 - 계약서 송신함
	@GetMapping("/ContractSend")
	public String ContractSend(Model model) {
		
		return "bizdocu/ContractSend";
	}
	
	// 계약진행 - 계약서 수신함
	@GetMapping("/ContractReceive")
	public String ContractReceive(Model model) {
		
		return "bizdocu/ContractReceive";
	}
	
	// 계약진행 - 계약서 완료보관함
	@GetMapping("/ContractComplete")
	public String ContractComplete(Model model) {
		
		return "bizdocu/ContractComplete";
	}
	
}
