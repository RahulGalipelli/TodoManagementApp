package com.todosapp.rest.webservices.restful_web_services.helloworld;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins="http://localhost:4200")
@RestController
public class HelloWorldController {
	
	@GetMapping("/hello-world")
    public String helloWorld(){
        return "Hello World!";
    }
	
	@GetMapping("/hello-world-bean")
    public HelloWorldBean helloWorldBean(){
        return new HelloWorldBean("Hello World!");
    }
	
	@GetMapping("/hello-world/path-variable/{name}")
    public HelloWorldBean helloWorldPathVariable(@PathVariable String name){
		//throw new RuntimeException("Some error has occurred. Contact support **__**");
        return new HelloWorldBean(String.format("Hello World! - changed, %s", name));
    }
}
