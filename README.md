# sAIfe - AI/ML Secure Framework

### Artificial Intelligence/Machine Learning Application and Pipeline Security-Focused Development Framework

<br/>

![Reference Architecture Diagram](/Diagrams/Reference%20Architecture%20Diagram.svg)
|:--:|
| __*sAIfe's Reference Architecture Diagram*__ |

<br/>

### sAIfe

sAIfe is a framework for development of secure applications that include AI/ML capabilities.
It is focused on providing software systems with higher levels of security - by reducing risks and preventing vulnerabilities - through an innovative protocol with prescriptive steps, to be applied by the concerned developer(s) during architectural design, an early stage of the Software Development Life Cycle.


### Framework Application Steps
1. Create an infrastructure diagram of the entire application to be analyzed, including main elements and communications between them
2. Compare the created diagram with the generic one provided by the framework and advance only the overlapping/similar elements to the next step
3. For each of the resulting elements, proceed to check the respective "Critical Area" detailed document. For each of these, run through the vulnerabilities list and pick the ones applicable to the application in question
5. For each of the filtered vulnerabilities, apply to the system at issue as many of the solutions provided as possible


### Elements' Structures
- Infrastructure Diagram
	- Critical Areas
		- Application Parts
		- Connections between Application Parts

- Critical Area Detailed Documents
	- Element Description
	- Vulnerabilities
		- Solutions


### Elements' Explanations
- Infrastructure Diagram: contains the architecture of an entire AI/ML application, portraying every possible computational element participating in the process, along with the connections established between each of them.
- Application Part: computational element of an AI/ML application
- Connection between Application Parts: data communication channel coming to or going from an application part
- Critical Area: relevant section of an AI/ML application in which security flaws are feasible to happen. It is composed by an application part and the connections immediately surrounding it. For a general system, there are typically going to be four principal critical areas: user interface applications (for data entry and output visualization); an API/server (to connect different parts of the application and exchange data); a Machine Learning model (to actually calculate inferences); and a Feature Store/database (to hold all the non-volatile data).
- Element Description: short description about the application part in question
- Vulnerability: possible weakness/failure point the Critical Area at issue might have
- Solution: suggested prevention action for the respective vulnerability
