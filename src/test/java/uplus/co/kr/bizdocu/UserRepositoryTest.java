package uplus.co.kr.bizdocu;

import org.junit.jupiter.api.Test;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import uplus.co.kr.bizdocu.persistance.repository.UserRepository;

@SpringBootTest
class UserRepositoryTest {

	private final Logger logger = LoggerFactory.getLogger(getClass());
	
	@Autowired
	UserRepository userRepository;
	
	
	@Test
	public void test() {
		String com = userRepository.getCompany("CTEST001");
		logger.info(com);
	}

}
