package uplus.co.kr.bizdocu.service;

import java.util.HashMap;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.fasterxml.jackson.databind.JsonNode;

@Service
public class PaymentService {
	
	private final Logger logger = LoggerFactory.getLogger(getClass());	
	
	public Map<String, String> payload(String orderId, Long amount){
		
		Map<String, String> payloadMap = new HashMap<>();
		payloadMap.put("orderId", orderId);
		payloadMap.put("amount", String.valueOf(amount));
		
		return payloadMap;
	}
	
	public Map<String, Object> checkStatus(ResponseEntity<JsonNode> responseEntity) {
		JsonNode successNode = responseEntity.getBody();
		
		Map<String, Object> map = new HashMap<>();
		map.put("orderId", successNode.get("orderId").asText());
		
		logger.info("orderId : " + successNode.get("orderId").asText());
		
		String secret = successNode.get("secret").asText();
		map.put("secret", secret);
		
		return map;
	}
	
}
