package uplus.co.kr.bizdocu.service;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import lombok.RequiredArgsConstructor;
import uplus.co.kr.bizdocu.persistance.entity.UserVO;
import uplus.co.kr.bizdocu.persistance.repository.UserRepository;

@Service
@RequiredArgsConstructor
public class UserService {

	private final Logger logger = LoggerFactory.getLogger(getClass());
	
	@Autowired
	private final UserRepository userRepository;
	
	// 전체 사용자 리스트
//	public List<UserVO> getAllUsers() {
//		return userRepository.findAll();
//	}
	
	public UserVO getUser(String id) {
		return userRepository.findOneById(id);
	}
			
	// id로 사용자별 회사명 리턴
	public String getUserCompany(String id) {
		return userRepository.getCompany(id);
	}
	
	// id로 사용자별 담당자 리턴
	public String getUserName(String id) {
		return userRepository.getName(id);
	}
	
	// id로 사용자별 사업자번호 리턴
	public int getUserBnumber(String id) {
		return userRepository.getBnumber(id);
	}
	
	// id로 사용자별 서비스 유형 리턴
	public String getUserServiceType(String id) {
		return userRepository.getServiceType(id);
	}
	
	// id로 사용자별 충전량 리턴
	public int getUserChargingAmount(String id) {
		return userRepository.getChargingAmount(id);
	}
	
	// id로 사용자별 남은 사용건수 리턴
	public int getUserCount(String id) {
		return userRepository.getCount(id);
	}
	
	
	// 사용건수 충전
	public void chargeCount(int count, String id) {
		
		UserVO user = new UserVO();
		user = userRepository.findOneById(id);
		int beforeCount = user.getUse_count();
		int afterCount = beforeCount + count;
		userRepository.updateCount(id, afterCount);
		//user.setUse_count(afterCount);
		
	}
	
	// 금액 충전
	public void chargeAmount(int charging_amount, String id) {
		UserVO user = new UserVO();
		user = userRepository.findOneById(id);
		int beforeCharge = user.getCharging_amount();
		int afterCharge = beforeCharge + charging_amount;
		userRepository.updateCharging(id, afterCharge);
		//user.setCharging_amount(afterCharge);
	}
	
}
