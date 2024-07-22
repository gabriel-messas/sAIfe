## 1 - User Interface
#### Typically, a Web and/or a mobile application, from which statistical data is going to be manually inputted and or consumed by a user

- Possible threats and/or vulnerabilities:
	
	- For a general Web application, all the typical points mentioned by OWASP are valid;
		
	- **Injection Flaws** - SQL injection (\*), NoSQL injection (\*), Code injection (\*), HTML injection, Cross-site scripting
		- Solution(s):
  			- Input Sanitization
			
	- **Authentication Flaws** - Unencrypted passwords in transit, Exposed or predictable session data, Credential stuffing and/or brute-force attacks, Session fixation, Session hijacking
		- Solution(s):
  			- Password Encryption - HTTPS (TLS) Cryptography
  			- Session Data Safe Handling
  			- Authentication Timeouts - Pre-determined token expiration times
  			- Setting the Appropriate Security Flags on Cookies - "Secure", "HttpOnly" and "SameSite"

	- **Authorization Flaws** - Missing access control for specific paths/functionalities
		- Solution(s):
  			- Role-Based Access Control - For each path
			
	- **Security Misconfiguration** - Running outdated/vulnerable server and application software, Running in debug mode and/or revealing error handling information, Having directory listing enabled, Running unnecessary services, Not changing default keys and passwords
		- Solution(s):
  			- Up-to-date Software Versions
  			- Disabling Debug Mode
  			- Disabling Directory Listing
  			- Changing Default Values
			
	- **Sensitive Data Exposure** - Showing sensitive data in URLs, Exposing sensitive data in Cookies, Using unencrypted data transfer, Storing unencrypted data
		- Solution(s):
  			- Encrypted Communication - HTTPS (TLS) Cryptography
  			- URL Protection - Not using URL parameters to convey sensitive unencrypted data
  			- Storage Protection - Not storing sensitive unencrypted data in browser storage

(\*) - Item may have direct impact on the AI/ML aspect itself

References:

- https://owasp.org/Top10/
- https://www.toptal.com/security/10-most-common-web-security-vulnerabilities
