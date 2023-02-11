## 3 - Feature Store/Database
#### Typically, a storage space managed and served by an application, in which general information and ML data itself can be kept

- Possible threats and/or vulnerabilities:

    - For a general Web application, all the typical points mentioned by OWASP are valid;

    - **Security Misconfiguration** - Running outdated/vulnerable DBMS versions, Running in debug mode and/or revealing error handling information, Not changing default keys and passwords, Leaving the database server externally accessible through the Internet
        - Solution: Using up-to-date software versions, Following industry standards and recommendations for DBMS configuration, Restricting database access to the internal/private network

    - **Authentication Flaws** - Unencrypted credentials in transit while establishing connection
        - Solution: Enforcing encrypted (TLS) connection when accessing the database server

	- **Authorization Flaws** - Using highly privileged database user accounts
		- Solution: Restricting permissions of database accounts when they are used by another portions of the system
			
	- **Sensitive Data Exposure** - Using unencrypted data transfer, Storing unencrypted data
		- Solution: Using encrypted (TLS) connection for data transit, Encrypting stored data
			
    - **Data Loss** (\*) - Missing backup plan, Unprotected backup files
		- Solution: Structuring a data backup plan, Securing already backed up information

    - **Resource Exhaustion** (\*) - Unlimited resource numbers for database server applications, Allowing unlimited simultaneous database connections
		- Solution: Limiting hardware resource levels for database server applications, Limiting the amount of open database connections at a time

(\*) - Item may have direct impact on the AI/ML aspect itself

References:

- https://www.datasunrise.com/potential-db-threats/10-common-vulnerabilities/
- https://www.darkreading.com/vulnerabilities-threats/the-10-most-common-database-vulnerabilities
