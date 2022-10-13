package uplus.co.kr.bizdocu.persistance.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import org.hibernate.annotations.DynamicUpdate;

import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;

@NoArgsConstructor(access = AccessLevel.PUBLIC)
@Getter
@Entity
@Data
@AllArgsConstructor
@Table(name="user")
@DynamicUpdate
public class UserVO {

	@Id
	@Column(name = "idx")
	private int idx;
	
	@Column(name = "id")
	private String id;
	
	@Column(name = "password")
	private String password;
	
	@Column(name = "company")
	private String company;
	
	@Column(name = "name")
	private String name;
	
	@Column(name = "bnumber")
	private int bnumber;
	
	@Column(name = "service_type")
	private String service_type;
	
	@Column(name = "charging_amount")
	private int charging_amount;
	
	@Column(name = "use_count")
	private int use_count;
	
	@Builder
	UserVO(String id, String password, String company, String name, int bnumber, String service_type, int charging_amount ,int use_count) {
		this.id = id;
		this.password = password;
		this.company = company;
		this.name = name;
		this.bnumber = bnumber;
		this.service_type = service_type;
		this.charging_amount = charging_amount;
		this.use_count = use_count;
	}
	
}
