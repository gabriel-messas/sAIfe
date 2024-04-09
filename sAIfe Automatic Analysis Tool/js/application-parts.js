//*************************************************************************************************
//*************************************** APPLICATION PARTS' CONTENTS *****************************
//*************************************************************************************************

function getAcronym(string) {
	return string
		.split(/\s/)
		.reduce((accumulator, word) => accumulator + word.charAt(0), '');
}

function getStructuredContentForApplicationPart (applicationPart, applicationPartCount) {
	const ap = apData[applicationPart];

	let content =
		`<div id="apModal" style="display: flex; flex-direction: column; justify-content: flex-start;
			align-items: center; height: 100%; overflow: auto; padding-right: 2%;">
			<h1>${ap.name}</h1>
			<div style="font-weight: 500;">
				${ap.description}
				<br/><br/>
				Possible threats and/or vulnerabilities:
				<br/><br/>`;
	
	for (const threat of ap.threats) {
		content += `<div style="width: 100%;">
						<span onclick="collapseThreat(this)" ${threat.solutions?.length > 0 ? 'class="collapsed"' : 'class="empty"' } style="cursor: pointer;">${threat.name}</span>
						<br/>`;
		if (threat.solutions?.length > 0) {
			content += `<div style="display: none;">Solution(s):
							<br/>`;

			for (const solution of threat.solutions) {
				let acronym = `${getAcronym(ap.name)}-${getAcronym(threat.name)}-${getAcronym(solution.name)}`;
				content += `	<input type="checkbox" id="${acronym}-${applicationPartCount}" ${getCurrentValue(`${acronym}-${applicationPartCount}`) ? "checked" : ""} onchange="toggleCheckbox(this)">${solution.name}</input>`;
				content += `	<br/>`;
			}

			content += `</div>`;
		}
		content += `</div>
					<br/>`;
	}

	content += `${ap.observation || ''}`;
	content += '</div>';
	content += '</div>';

	return content;
}

function collapseThreat(element) {
	element.classList.toggle('collapsed');
	const nextElement = element.nextElementSibling.nextElementSibling;
	if (nextElement.style.display === 'none') {
		nextElement.style.display = 'block';
	} else {
		nextElement.style.display = 'none';
	}
}

function toggleCheckbox(checkbox) {
	if (checkbox.checked) {
		checkbox.setAttribute('checked', 'checked');
		localStorage.setItem(checkbox.id, true);
	} else {
		checkbox.removeAttribute('checked');
		localStorage.removeItem(checkbox.id);
	}
}

function getCurrentValue(id) {
	return Boolean(localStorage.getItem(id) || false);
}

const apData = {
	'User Interface': {
		name: 'User Interface',
		description: 'Typically, a Web and/or a mobile application, from which statistical data is going to be manually inputted and/or consumed by a user.',
		threats: [
			{
				name: 'For a general Web application, all the typical points mentioned by <a target="_blank" href="https://owasp.org/Top10/">OWASP</a> are valid'
			},
			{
				name: 'Injection Flaws - SQL injection (*), NoSQL injection (*), Code injection (*), HTML injection, Cross-site scripting',
				solutions: [
					{
						name: 'Input sanitization',
						code: 'ui-if-is'
					}
				]
			},
			{
				name: 'Authentication Flaws - Unencrypted passwords in transit, Exposed or predictable session data, Credential stuffing and/or brute-force attacks, Session fixation, Session hijacking',
				solutions: [
					{
						name: 'Password encryption/hashing',
						code: 'ui-authef-peh'
					},
					{
						name: 'Session data safe generation and encryption',
						code: 'ui-authef-sdsge'
					},
					{
						name: 'Authentication timeouts',
						code: 'ui-authef-at'
					},
					{
						name: 'HTTPS(TLS) criptography',
						code: 'ui-authef-htc'
					},
					{
						name: 'Setting the "Secure" flag on Cookies',
						code: 'ui-authef-ssfc'
					}	
				]
			},
			{
				name: 'Authorization Flaws - Missing access control for specific paths/functionalities',
				solutions: [
					{
						name: 'Implementing role-based access control for each path',
						code: 'ui-authof-irbacfp'
					}
				]
			},
			{
				name: 'Security Misconfiguration - Running outdated/vulnerable server and application software, Running in debug mode and/or revealing error handling information, Having directory listing enabled, Running unnecessary services, Not changing default keys and passwords',
				solutions: [
					{
						name: 'Using up-to-date software versions',
						code: 'ui-sm-uutdsv'
					},
					{
						name: 'Following industry standards and recommendations for Web server configuration',
						code: 'ui-sm-fisrfwsc'
					}
				]
			},
			{
				name: 'Sensitive Data Exposure - Showing sensitive data in URLs, Exposing sensitive data in Cookies, Using unencrypted data transfer, Storing unencrypted data',
				solutions: [
					{
						name: 'Not using URLs to convey sensitive data',
						code: 'ui-sde-nuutcsd'
					},
					{
						name: 'Setting the "Secure" and "HttpOnly" flags on Cookies',
						code: 'ui-sde-sshofc'
					},
					{
						name: 'Using encrypted HTTPS(TLS) connection for data transit',
						code: 'ui-sde-uehtcfdt'
					},
					{
						name: 'Encrypting stored sensitive data',
						code: 'ui-sde-essd'
					}
				]
			}
		],
		observation: '(*) - Item may have direct impact on the AI/ML aspect itself'
	},
	'API/Server': {
		name: 'API/Server',
		description: 'Typically, an endpoint externally accessible over the Internet, through which separate parts of the application communicate.',
		threats: [
			{
				name: 'For a general HTTP API, all the typical points mentioned by <a target="_blank" href="https://owasp.org/www-project-api-security/">OWASP</a> are valid'
			},
			{
				name: 'Injection Flaws (*) - SQL injection, NoSQL injection, Code injection',
				solutions: [
					{
						name: 'Incoming request data sanitization',
						code: 'as-if-irds'
					},
					{
						name: 'Performing active data validation against data types and patterns',
						code: 'as-if-padvadtp'
					}
				]
			},
			{
				name: 'Authentication Flaws - Unencrypted passwords in transit, Credential stuffing and/or brute-force attacks, Lack of token validation',
				solutions: [
					{
						name: 'Password encryption/hashing',
						code: 'as-authef-peh'
					},
					{
						name: 'Authentication request timeouts',
						code: 'as-authef-art'
					},
					{
						name: 'Token authenticity, signature and expiration validation',
						code: 'as-authef-tasev'
					},
					{
						name: 'HTTPS(TLS) criptography',
						code: 'as-authef-htc'
					},
					{
						name: 'Setting the Cookies\' "Secure" flag on headers',
						code: 'as-authef-scsfh'
					}	
				]
			},
			{
				name: 'Authorization Flaws - Missing access control for specific paths/functionalities',
				solutions: [
					{
						name: 'Implementing role-based access control for each endpoint and request type',
						code: 'as-authof-irbacfeert'
					}
				]
			},
			{
				name: 'Security Misconfiguration - Running outdated/vulnerable server and application software, Running in debug mode and/or revealing error handling information, Running unnecessary services, Not changing default keys and passwords',
				solutions: [
					{
						name: 'Using up-to-date software versions',
						code: 'as-sm-uutdsv'
					},
					{
						name: 'Following industry standards and recommendations for API server configuration',
						code: 'as-sm-fisrfwsc'
					},
					{
						name: 'Restricting accessible endpoints and request types (HTTP verbs)',
					},
					{
						name: 'Implementing Cross-Origin Resource Sharing (CORS) policy'
					}
				]
			},
			{
				name: 'Sensitive Data Exposure - Returning unfiltered sensitive/excessive data on requests, Using unencrypted data transfer',
				solutions: [
					{
						name: 'Not relying on another portion of the application to filter sensitive data',
					},
					{
						name: 'Implementing a schema-based request/response validation mechanism',
					},
					{
						name: 'Using encrypted HTTPS(TLS) connection for data transit',
					},
					{
						name: 'Setting the Cookies\' "Secure" and "HttpOnly" flags on headers',
					}
				]
			},
			{
				name: 'Resource Exhaustion (*) - Unlimited resource numbers for server applications, Unlimited request rate, Unlimited maximum incoming payload size, Unrestricted pagination limit',
				solutions: [
					{
						name: 'Limiting hardware resource levels for server applications',
					},
					{
						name: 'Limiting the amount of requests over time for a same user'
					},
					{
						name: 'Restricting the maximum incoming data size per request'
					},
					{
						name: 'Setting maximum pagination parameters'
					}
				]
			},
			{
				name: 'Mass Assignment (*) - Lack of data validation/sanitization mechanism, Lack of whitelist/blacklist property restriction on endpoints',
				solutions: [
					{
						name: 'Implementing a schema-based request/response validation mechanism'
					},
					{
						name: 'Implementing a whitelist/blacklist mechanism to specify properties of the object to be altered'
					}
				]
			}
		],
		observation: '(*) - Item may have direct impact on the AI/ML aspect itself'
	},
	'Database/Feature Store': {
		name: 'Database/Feature Store',
		description: 'Typically, a storage space managed and served by an application, in which general information and ML data itself can be kept.',
		threats: [
			{
				name: 'Authentication Flaws - Unencrypted credentials in transit while establishing connection',
				solutions: [
					{
						name: 'Enforcing encrypted (TLS) connection when accessing the database server'
					}
				]
			},
			{
				name: 'Authorization Flaws - Using highly privileged database user accounts',
				solutions: [
					{
						name: 'Restricting permissions of database accounts when they are used by other portions of the system'
					}
				]
			},
			{
				name: 'Security Misconfiguration -  Running outdated/vulnerable DBMS versions, Running in debug mode and/or revealing error handling information, Not changing default keys and passwords, Leaving the database server externally accessible through the Internet',
				solutions: [
					{
						name: 'Using up-to-date software versions'
					},
					{
						name: 'Following industry standards and recommendations for DBMS configuration'
					},
					{
						name: 'Restricting database access to the internal/private network'
					}
				]
			},
			{
				name: 'Sensitive Data Exposure - Using unencrypted data transfer, Storing unencrypted data',
				solutions: [
					{
						name: 'Using encrypted (TLS) connection for data transit'
					},
					{
						name: 'Encrypting stored data'
					}
				]
			},
			{
				name: 'Data Loss (*) - Missing backup plan, Unprotected backup files',
				solutions: [
					{
						name: 'Structuring a data backup plan'
					},
					{
						name: 'Securing already backed up information'
					}
				]
			},
			{
				name: 'Resource Exhaustion (*) - Unlimited resource numbers for database server applications, Allowing unlimited simultaneous database connections',
				solutions: [
					{
						name: 'Limiting hardware resource levels for database server applications',
					},
					{
						name: 'Limiting the amount of open database connections at a time'
					}
				]
			}
		],
		observation: '(*) - Item may have direct impact on the AI/ML aspect itself'
	},
	'ML Model': {
		name: 'ML Model',
		description: 'Typically, the main part, whose entity is being/has been trained on a set of data and generates inferences when provided with inputs.',
		threats: [
			{
				name: 'Training Data Integrity Flaws - Susceptibility to unwanted training data alterations, Lack of protection against malicious input manipulation',
				solutions: [
					{
						name: 'Implementing strict access management policies to limit direct access to training data'
					},
					{
						name: 'Applying input filtering/manipulation detection techniques'
					},
					{
						name: 'Robustifying the model'
					},
					{
						name: 'Retraining with adversarial samples (Adversarial training)'
					},
					{
						name: 'Periodic data integrity checks and outlier removal'
					}
				]
			},
			{
				name: 'Inference Output Integrity Flaws - Susceptibility to returning wrongful inference results, Lack of protection against malicious input manipulation, Absence of rate limit/timeout for inference requests, Excess of information returned in inference outputs',
				solutions: [
					{
						name: 'Implementing rate limit/timeout for inference requests'
					},
					{
						name: 'Reducing the amount of information returned in results (e.g. probabilities/percentages)'
					},
					{
						name: 'Applying input filtering/manipulation detection techniques'
					},
					{
						name: 'Robustifying the model'
					},
					{
						name: 'Retraining with adversarial samples (Adversarial training)'
					}
				]
			},
			{
				name: 'Model Logic Confidentiality Flaws - Susceptibility to exposing critical model characteristics through inference results, Excess of information returned in inference outputs',
				solutions: [
					{
						name: 'Implementing rate limit/timeout for inference requests'
					},
					{
						name: 'Reducing the amount of information returned in results (e.g. probabilities/percentages)'
					}
				]
			},
			{
				name: 'Training Data Confidentiality Flaws - Susceptibility to directly or indirectly exposing private information of the training data used, Absence of rate limit/timeout for inference requests, Excess of information returned in inference outputs',
				solutions: [
					{
						name: 'Implementing rate limit/timeout for inference requests'
					},
					{
						name: 'Reducing the amount of information returned in results (e.g. probabilities/percentages)'
					}
				]
			},
			{
				name: 'Model Logic Integrity Flaws - Susceptibility to alteration and/or corruption of the ML logic/algorithm itself, Lack of security to access application internals',
				solutions: [
					{
						name: 'Implementing strict access management policies to limit direct access to the application source code and contents'
					}
				]
			}
		],
	}
}