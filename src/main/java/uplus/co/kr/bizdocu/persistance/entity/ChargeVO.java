package uplus.co.kr.bizdocu.persistance.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Entity(name="charge")
public class ChargeVO {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "idx")
	private int idx;
	
	@Column(name = "name")
	private String name;
	
	@Column(name = "camount")
	private int camount;
	
	@Column(name = "pamount")
	private int pamount;
	
	@Column(name = "count")
	private int count;
	
	@Builder
	public ChargeVO(String name, int camount, int pamount, int count) {
		this.name = name;
		this.camount = camount;
		this.pamount = pamount;
		this.count = count;
	}
}
