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


### Method Application Steps

![sAIfe Process](https://github.com/user-attachments/assets/1a07f003-377f-480e-bea3-93d269e91379)

1. The developer builds the Architecture Diagram: a visual conceptual model that represents their system's architecture. sAIfe provides a set of guidelines to assist the developer through this construction (Architecture Diagram Guidelines, explained below). This step helps them perform an abstraction process on the architecture in question, identifying points that may require attention from the security perspective. Within sAIfe, these points are referred to as Application Parts;
2. After that, for each of the Application Parts - now, in the diagram, referred to as Critical Areas - the developer checks the respective list of possible threats - also provided by sAIfe in its ([Critical Area Detailed Document](https://github.com/gabriel-messas/sAIfe/tree/main/Critical%20Area%20Detailed%20Documents)) - and selects the items applicable to their software application;
3. Finally, for each of the threats selected, they pick, from the respective list of possible mitigation forms, all the entries applicable to the system under analysis. This mitigation list is part of sAIfe and, like the list of possible threats, is compiled from multiple information sources about cybersecurity and AI.

#### Architecture Diagram Guidelines
Initially, the developer should virtually segment the layers of the system to be analyzed according to the following level of abstraction: front-end - encompassing components a user can directly interact with and/or that are the initial source of data - and back-end - regarding elements that are not directly accessible by the user and/or only receive data from other parts of the application itself. This segmentation will more easily highlight the involved components, that should feature, for instance, amongst others: user interfaces and sensors, under the front-end scope, and server applications, databases and ML assets, under the back-end section. These elements do not need to be specialized (such as identifying a specific language or vendor). 
For a general ML system, sAIfe considers there could be typically four principal Critical Areas (with zero or more occurrences of each): User Interface applications (for data entry and output visualization); APIs/Servers (to interconnect different parts of the application and exchange data); Databases/Feature Stores (to hold all the non-volatile data); and Machine Learning models (to actually make inferences). To help the developer with a more concrete example, sAIfe provides the Reference Architecture Diagram: a ready-made graphical diagram of an example ML-based software application, created according to the method's guidelines.


### Elements' Structures
- Architecture Diagram
	- Critical Areas
		- Application Parts
		- Connections between Application Parts

- Critical Area Detailed Documents
	- Element Description
	- Vulnerabilities
		- Solutions


### Elements' Explanations
- Architecture Diagram: contains the architecture of an entire AI/ML application, portraying every possible computational element participating in the process, along with the connections established between each of them.
- Application Part: computational element of an AI/ML application
- Connection between Application Parts: data communication channel coming to or going from an application part
- Critical Area: relevant section of an AI/ML application in which security flaws are feasible to happen. It is composed by an application part and the connections immediately surrounding it. For a general system, there are typically going to be four principal critical areas: user interface applications (for data entry and output visualization); an API/server (to connect different parts of the application and exchange data); a Machine Learning model (to actually calculate inferences); and a Feature Store/database (to hold all the non-volatile data).
- Element Description: short description about the application part in question
- Vulnerability: possible weakness/failure point the Critical Area at issue might have
- Solution: suggested prevention action for the respective vulnerability
