## 2 - API/Server
#### Typically, an endpoint externally accessible over the Internet, through which separate parts of the application communicate

- Possible threats and/or vulnerabilities:

	- For a general HTTP API, all the typical points mentioned by OWASP are valid;

 	- **Injection Flaws** (\*) - SQL injection, NoSQL injection, Code injection
		- Solution(s):
			- Incoming request data sanitization
			- Performing active data validation against data types and patterns

	- **Authentication Flaws** - Unencrypted passwords in transit, Credential stuffing and/or brute-force attacks, Lack of token validation
		- Solution(s):
			- Password encryption/hashing
			- Authentication request timeouts
			- Token authenticity, signature and expiration validation
			- HTTPS(TLS) criptography
			- Setting the Cookies' "Secure" flag on headers

	- **Authorization Flaws** - Missing access control for specific paths/functionalities
		- Solution(s):
			- Implementing role-based access control for each endpoint and request type

	- **Security Misconfiguration** - Running outdated/vulnerable server and application software, Running in debug mode and/or revealing error handling information, Running unnecessary services, Not changing default keys and passwords
		- Solution(s):
			- Using up-to-date software versions
			- Following industry standards and recommendations for API server configuration
			- Restricting accessible endpoints and request types (HTTP verbs)
			- Implementing Cross-Origin Resource Sharing (CORS) policy
			
	- **Sensitive Data Exposure** - Returning unfiltered sensitive/excessive data on requests, Using unencrypted data transfer
		- Solution(s):
			- Not relying on another portion of the application to filter sensitive data
			- Implementing a schema-based request/response validation mechanism
			- Using encrypted HTTPS (TLS) connection for data in transit
			- Setting the Cookies' "Secure" and "HttpOnly" flags on headers
			
	- **Resource Exhaustion** (\*) - Unlimited resource numbers for server applications, Unlimited request rate, Unlimited maximum incoming payload size, Unrestricted pagination limit
		- Solution(s):
			- Limiting hardware resource levels for server applications
			- Limiting the amount of requests over time for a same user
			- Restricting the maximum incoming data size per request
			- Setting maximum pagination parameters
			
	- **Mass Assignment** (\*) - Lack of data validation/sanitization mechanism, Lack of whitelist/blacklist property restriction on endpoints
		- Solution(s):
			- Implementing a schema-based request/response validation mechanism
			- Implementing a whitelist/blacklist mechanism to specify properties of the object to be altered

(\*) - Item may have direct impact on the AI/ML aspect itself

References:

- https://owasp.org/www-project-api-security/
