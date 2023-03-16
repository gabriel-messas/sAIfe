# sAIfe - AI/ML Secure Framework

### Artificial Intelligence/Machine Learning Application and Pipeline Security-Focused Development Framework

<!-- [AI/ML Pipeline Diagram](/AI-ML%20Pipeline%20Diagram.svg) -->

![AI_ML Pipeline Numbered](https://user-images.githubusercontent.com/40281674/223287863-f0fa3666-c235-4adc-9138-354ad53bfa47.svg)
|:--:|
| __*Typical AI/ML Pipeline Diagram*__ |

<br/>

### Framework Application Steps
- Create an infrastructure diagram of the entire application to be analyzed, including main elements and communications between them
- Compare the created diagram with the one provided by the framework and advance only the overlapping/similar elements to the next step
- For each of the resulting elements, proceed to check the respective "Critical Area" detailed document
- For each "Critical Area" detailed document, run through the vulnerabilities list and pick the ones applicable to the application in question
- For each of the filtered vulnerabilities, apply to the system at issue as many of the solutions provided as possible


### Elements' Structures
- Infrastructure Diagram
  - Critical Areas
    - Application Parts
    - Connections between Application Parts

- Critical Area Detailed Document
  - Element Description
  - Vulnerabilities
    - Solutions


### Elements' Explanations
- Infrastructure Diagram: contains the architecture of an entire AI/ML application, portraying every possible computational element participating in the process, along with the connections established between each of them.
- Application Part: computational element of an AI/ML application
- Connection between Application Parts: data communication channel coming and/or going from an application part
- Critical Area: relevant section of an AI/ML application in which security flaws are feasible to happen. It is composed by an application part and the connections immediately surrounding it. For a general system, there are typically going to be four principal critical areas: user interface applications (for data entry and output visualization); an API/server (to connect different parts of the application and exchange data); a Machine Learning model (to actually calculate inferences); and a Feature Store/database (to hold all the non-volatile data).
- Element Description: short description about the application part in question
- Vulnerabilities: possible weaknesses/failure points the critical area at issue might have
- Solutions: suggested prevention actions for the respective vulnerability
