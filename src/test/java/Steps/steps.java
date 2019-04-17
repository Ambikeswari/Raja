package Steps;

import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.ie.InternetExplorerDriver;

import cucumber.api.Scenario;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class steps {
	 WebDriver driver =null;
	
	
	@Given("^Application loaded in the browser$")
	public void application_loaded_in_the_browser() throws Throwable {
		
		
		 System.setProperty("webdriver.ie.driver", "E:\\IEDriverServer.exe");
	 		
	        
		 driver = new InternetExplorerDriver();
		
		driver.manage().window().maximize();
		driver.get("https://www.facebook.com/");

		
	    
	}

	@When("^I enter Username$")
	public void i_enter_Username() throws Throwable {
		driver.findElement(By.id("email")).sendKeys("ambi_mca@ymail.com",Keys.TAB);
	   
	}

	@When("^Password$")
	public void password() throws Throwable {
		driver.findElement(By.id("pass")).sendKeys("ambi@123",Keys.TAB);
	   
	}

	@When("^Click on Login$")
	public void click_on_Login() throws Throwable {
		driver.findElement(By.id("loginbutton")).click();
	    
	}
	
	

	@Then("^Application loaded succcessfully$")
	public void application_loaded_succcessfully() throws Throwable {
		System.out.println("Successful Login");
	    
	}
	
	@When("^Enter the search (.*)$")
	public void enter_the_search_Selenium(String val) throws Throwable {
		 
		driver.findElement(By.name("q")).sendKeys(val);
	   
	}

	@Then("^Get the results$")
	public void get_the_results() throws Throwable {
	   System.out.println("Searching the word"); 
	}
	@Given("^Application loaded in the google browser$")
	public void application_loaded_in_the_google_browser() throws Throwable {
		
		
		 System.setProperty("webdriver.ie.driver", "E:\\IEDriverServer.exe");
	 		
	        
		 driver = new InternetExplorerDriver();
		
		driver.manage().window().maximize();
		driver.get("https://www.google.com/");

		
	    
	}
@Before
public void getscenario(Scenario s)
{
	System.out.println(s.getName());
}



	



}
