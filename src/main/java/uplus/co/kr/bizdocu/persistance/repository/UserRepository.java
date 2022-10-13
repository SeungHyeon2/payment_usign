package uplus.co.kr.bizdocu.persistance.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import uplus.co.kr.bizdocu.persistance.entity.UserVO;

@Repository
public interface UserRepository extends JpaRepository<UserVO, String>{

	UserVO findOneById(String id);
	
	List<UserVO> findAll();
	
	// User에서 업체명 추출
	@Query(value = "SELECT company FROM user WHERE id = :id", nativeQuery=true)
	String getCompany(@Param("id") String id);
	
	// User에서 담당자 추출
	@Query(value = "SELECT name FROM user WHERE id = :id", nativeQuery=true)
	String getName(@Param("id") String id);
	
	// User에서 사업자번호 추출
	@Query(value = "SELECT bnumber FROM user WHERE id = :id", nativeQuery=true)
	int getBnumber(@Param("id") String id);
	
	// User에서 서비스유형 추출
	@Query(value = "SELECT service_type FROM user WHERE id = :id", nativeQuery=true)
	String getServiceType(@Param("id") String id);
	
	// User에서 충전량 추출
	@Query(value = "SELECT charging_amount FROM user WHERE id = :id", nativeQuery=true)
	int getChargingAmount(@Param("id") String id);
	
	// User에서 발행가능수 추출
	@Query(value = "SELECT use_count FROM user WHERE id = :id", nativeQuery=true)
	int getCount(@Param("id") String id);
	
	// User에서 충전량 업데이트
	@Transactional
	@Modifying
	@Query(value = "UPDATE user SET charging_amount = :charging_amount WHERE id = :id", nativeQuery = true)
	void updateCharging(@Param("id") String id, @Param("charging_amount") int charging_amount);
	
	// User에서 사용횟수 업데이트
	@Transactional
	@Modifying
	@Query(value = "UPDATE user SET use_count = :use_count WHERE id = :id", nativeQuery = true)
	void updateCount(@Param("id") String id, @Param("use_count") int use_count);

}
