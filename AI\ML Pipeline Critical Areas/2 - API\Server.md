## 2 - API/Server
#### Typically, an endpoint externally accessible over the Internet, through which separate parts of the application communicate

- Possible threats and/or vulnerabilities:

	- For a general HTTP API, all the typical points mentioned by OWASP are valid;

 	- **Injection Flaws** (\*) - SQL injection, NoSQL injection, Code injection
		- Solution(s):
			- Input Sanitization
			- Performing Active Data Validation Against Data Types and Patterns

	- **Authentication Flaws** - Unencrypted passwords in transit, Credential stuffing and/or brute-force attacks, Lack of token validation
		- Solution(s):
			- Password Encryption/Hashing - HTTPS (TLS) Cryptography
   			- Request Throttling
			- Authentication Timeouts
			- Authentication Validation - Token authenticity, signature and expiration validation
			- Setting the Appropriate Security Flags on Cookies - "Secure", "HttpOnly" and "SameSite"

	- **Authorization Flaws** - Missing access control for specific paths/functionalities
		- Solution(s):
			- Role-Based Access Control - For each endpoint and request type

	- **Security Misconfiguration** - Running outdated/vulnerable server and application software, Running in debug mode and/or revealing error handling information, Running unnecessary services, Not changing default keys and passwords
		- Solution(s):
			- Up-to-date Software Versions
			- Disabling Debug Mode
   			- Changing Default Values
			- Implementing Cross-Origin Resource Sharing (CORS) Policy
			
	- **Sensitive Data Exposure** - Returning unfiltered sensitive/excessive data on requests, Using unencrypted data transfer
		- Solution(s):
			- Encrypted Communication - HTTPS (TLS) Cryptography
   			- Return Minimal Data
			
	- **Resource Exhaustion** (\*) - Unlimited resource numbers for server applications, Unlimited request rate, Unlimited maximum incoming payload size, Unrestricted pagination limit
		- Solution(s):
			- Request Throttling
			- Limited Payload Sizes
			- Maximum Pagination Parameters
   			- Limiting Hardware Resource Levels for Server Applications
			
	- **Mass Assignment** (\*) - Lack of data validation/sanitization mechanism, Lack of whitelist/blacklist property restriction on endpoints
		- Solution(s):
			- Properties Whitelist - Schema-based request/response validation mechanism with specific properties of the object to be altered

(\*) - Item may have direct impact on the AI/ML aspect itself

References:

- https://owasp.org/www-project-api-security/
