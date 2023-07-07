## 1 - User Interface
#### Typically, a Web and/or a mobile application, from which statistical data is going to be manually inputted and or consumed by a user

- Possible threats and/or vulnerabilities:
	
	- For a general Web application, all the typical points mentioned by OWASP are valid;
		
	- **Injection Flaws** - SQL injection (\*), NoSQL injection (\*), Code injection (\*), HTML injection, Cross-site scripting
		- Solution(s):
  			- Input sanitization
			
	- **Authentication Flaws** - Unencrypted passwords in transit, Exposed or predictable session data, Credential stuffing and/or brute-force attacks, Session fixation, Session hijacking
		- Solution(s):
  			- Password encryption/hashing
  			- Session data safe generation and encryption
  			- Authentication timeouts
  			- HTTPS(TLS) criptography
  			- Setting the "Secure" flag on Cookies

	- **Authorization Flaws** - Missing access control for specific paths/functionalities
		- Solution(s):
  			- Implementing role-based access control for each path
			
	- **Security Misconfiguration** - Running outdated/vulnerable server and application software, Running in debug mode and/or revealing error handling information, Having directory listing enabled, Running unnecessary services, Not changing default keys and passwords
		- Solution(s):
  			- Using up-to-date software versions
  			- Following industry standards and recommendations for Web server configuration
			
	- **Sensitive Data Exposure** - Showing sensitive data in URLs, Exposing sensitive data in Cookies, Using unencrypted data transfer, Storing unencrypted data
		- Solution(s):
  			- Not using URLs to convey sensitive data
  			- Setting the "Secure" and "HttpOnly" flags on Cookies
  			- Using encrypted HTTPS (TLS) connection for data transit
  			- Encrypting stored sensitive data

(\*) - Item may have direct impact on the AI/ML aspect itself

References:

- https://owasp.org/Top10/
- https://www.toptal.com/security/10-most-common-web-security-vulnerabilities
