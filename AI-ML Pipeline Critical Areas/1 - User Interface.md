1 - User Interface

	-- Typically, a Web and/or a mobile application, from which statistical data is going to be manually inputted by a user
	-- Possible threats and/or vulnerabilities:
		--- For a general Web application, all the typical points mentioned by OWASP are valid;
		--- Injection Flaws - SQL Injection (*), Code Injection (*), HTML Injection, Cross-Site Scripting
			---- Solution: Input Sanitization
		--- Authentication Flaws - Unencrypted Passwords in Storage and/or Transit, Exposed or Predictable Session Data, Session Fixation, Session Hijacking
			---- Solution: Password Encryption/Hashing, Session Data Safe Generation and Encryption, Authentication Timeouts, HTTPS Criptography, "Secure" flag on Cookies
		--- Security Misconfiguration - Running outdated/vulnerable server and application software, Running in debug mode and/or revealing error handling information, Having directory listing enabled, Running unnecessary services, Not changing default keys and passwords
			---- Solution: Using up-to-date software versions, Following industry standards and recommendations for Web server configuration
		--- Sensitive Data Exposure - Showing sensitive data in URLs, Exposing sensitive data in Cookies, Using unencrypted data transfer, Storing unencrypted data
			---- Solution: Not using URLs to convey sensitive data, Setting the "secure" flag on Cookies, Using encrypted HTTPS connection for data transit, Encrypting stored sensitive data
		--- Authorization Flaws - Missing access control for specific functionalities
			---- Solution: Implementing role-based access control

(*) - Item may have direct impact on the AI/ML aspect itself

References: https://www.toptal.com/security/10-most-common-web-security-vulnerabilities
