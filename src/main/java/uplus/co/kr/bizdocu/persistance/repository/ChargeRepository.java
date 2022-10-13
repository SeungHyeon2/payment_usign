package uplus.co.kr.bizdocu.persistance.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import uplus.co.kr.bizdocu.persistance.entity.ChargeVO;

@Repository
public interface ChargeRepository extends JpaRepository<ChargeVO, String>{

	
//	@Query(value = "SELECT use_count FROM user WHERE id = :id", nativeQuery=true)
//	int getCount(@Param("id") String id);
	
	List<ChargeVO> findAll();
	
	// ChargeVO에서 상품 count 추출
	@Query(value = "SELECT count FROM user WHERE name = :name", nativeQuery=true)
	int getCount(@Param("name") String name);
	
	// ChargeVO에서 상품 count 추출
	@Query(value = "SELECT camount FROM user WHERE name = :name", nativeQuery=true)
	int getCamount(@Param("name") String name);
	
	// ChargeVO에서 상품 count 추출
	@Query(value = "SELECT pamount FROM user WHERE name = :name", nativeQuery=true)
	int getPamount(@Param("name") String name);
	
}
