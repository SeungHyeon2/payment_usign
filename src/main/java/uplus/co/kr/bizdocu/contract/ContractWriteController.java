package uplus.co.kr.bizdocu.contract;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;


// 전자계약 - 계약작성
@Controller
@RequestMapping("/bizdocu")
public class ContractWriteController {

	// 계약작성 - 통합 양식 보관함
	@GetMapping("/ContractDocumentList")
	public String ContractDocumentList(Model model) {
		
		return "bizdocu/ContractDocumentList";
	}
	
	// 계약작성 - 계약서 작성
	@GetMapping("/ContractList")
	public String ContractList(Model model) {
		
		return "bizdocu/ContractList";
	}
	
}
