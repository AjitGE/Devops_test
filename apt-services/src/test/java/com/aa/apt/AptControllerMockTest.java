package com.aa.apt;

import static org.assertj.core.api.Assertions.assertThat;
import static org.mockito.Mockito.mock;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;

import com.aa.apt.controller.AptController;

@RunWith(SpringRunner.class)
@SpringBootTest
public class AptControllerMockTest {
	
	@Autowired
	AptController aptController;
	
	private MockMvc mockMvc;
	
	@Before
	public void setup(){
		this.mockMvc = MockMvcBuilders.standaloneSetup(aptController).build();
	}
	
	@Test
	public void testAptController() {
		assertThat(aptController).isNotNull();
	}
			
	@Test
	public void testGetPromoNegative() throws Exception {
		aptController = mock(AptController.class);
		this.mockMvc.perform(get("/")
		.accept(MediaType.parseMediaType("application/json;charset=UTF-8")))
		.andExpect(status().is(404));
	}
	
	/*
	@Test
	public void testGetPromoPositive() throws Exception {
		aptController = mock(AptController.class);
		this.mockMvc.perform(get("/api/search/P468B:false")
		.accept(MediaType.parseMediaType("application/json;charset=UTF-8")))
		.andExpect(status().isOk());

		
	}
	*/

}
