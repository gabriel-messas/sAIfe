## 3 - Database/Feature Store
#### Typically, a storage space managed and served by an application, in which general information and ML data itself can be kept

- Possible threats and/or vulnerabilities:

	- **Authentication Flaws** - Unencrypted credentials in transit while establishing connection
		- Solution(s):
  			- Password Encryption - Using encrypted (TLS) connection when accessing the database server

	- **Authorization Flaws** - Using highly privileged database user accounts
		- Solution(s):
  			- Least Privilege Account - Restricting permissions of database accounts

	- **Security Misconfiguration** - Running outdated/vulnerable DBMS versions, Running in debug mode and/or revealing error handling information, Not changing default keys and passwords, Leaving the database server externally accessible through the Internet
		- Solution(s):
			- Up-to-date Software Versions
			- Disabling Debug Mode
   			- Changing Default Values
			- Private Network - Restricting database access to the internal/private network
			
	- **Sensitive Data Exposure** - Using unencrypted data transfer, Storing unencrypted data
		- Solution(s):
			- Encrypted Communication - Using encrypted (TLS) connection for data transit
			- Encrypted Data at Rest

	- **Resource Exhaustion** (\*) - Unlimited resource numbers for database server applications, Allowing unlimited simultaneous database connections
		- Solution(s):
			- Limiting Hardware Resource Levels for Database Server Applications
			- Limited Connections - Limiting the amount of open database connections at a time

	- **Data Loss** (\*) - Missing backup plan, Unprotected backup files
		- Solution(s):
			- Backup Plan
			- Backup Protection - Securing already backed up information



(\*) - Item may have direct impact on the AI/ML aspect itself

References:

- https://www.datasunrise.com/potential-db-threats/10-common-vulnerabilities/
- https://www.darkreading.com/vulnerabilities-threats/the-10-most-common-database-vulnerabilities
