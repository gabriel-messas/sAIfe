## Case Study - ConsistencIA Application - Critical Area Analysis Report

### User Interface
For this category, the following vulnerabilities can be exploited and pose
a threat to ConsistencIA:

- Injection Flaws – as the Streamlit-hosted Website is going to have input
sections;
- Authentication Flaws – as the Website users – for selected functions –
are going to have to authenticate to prove their legitimacy;
- Authorization Flaws – as some functions must only be accessible by
users with specific roles;
- Security Misconfiguration – as the Streamlit Webserver will have to be
set up properly;
- Sensitive Data Exposure – as the data shown and the communication
via HTTP requests must not leak critical information to users or third-
parties.

### API/Server
For this category, the following vul-
nerabilities can be exploited and pose a threat to ConsistencIA:

- Injection Flaws – as the API is going to receive inputs coming both
from the Website and from the sensors;
- Authentication Flaws – as the users – for determined endpoints – are
going to have to authenticate to prove their legitimacy;
- Authorization Flaws – as some server functions must only be accessible
by users with specific roles;

- Security Misconfiguration – as the Python Flask server will have to be
set up properly, following industry standards.
- Sensitive Data Exposure – as the data returned by the API and the
communication via HTTP requests must not leak critical information
to users or third-parties;
- Resource Exhaustion – as multiple simultaneous requests to the server
may cause computational problems;
- Mass Assignment – as write-operation endpoints might compromise
other data that should not be in scope;

### Database/Feature Store
For this category, the
following vulnerabilities can be exploited and pose a threat to ConsistencIA:

- Authentication Flaws – as the connection requests between the API
and the databases might expose credential information;
- Authorization Flaws – as an unnecessarily highly-privileged database
user account can generate risks;
- Security Misconfiguration – as both database servers will have to be
set up properly, following industry standards;
- Sensitive Data Exposure – as both data in rest and in transit cannot
be leaked to unallowed third-parties;
- Resource Exhaustion – as unlimited database connection channels might
cause computational problems;
- Data Loss – as the data stored cannot be permanently lost due to
unforeseen circumstances.

### Machine Learning Model
For this category, the following vulnerabilities can be exploited and pose a threat to ConsistencIA:

- Training Data Integrity Flaws – as malicious inputs can cause unwanted
model alterations;
- Inference Output Integrity Flaws – as maliciously crafted inputs can
generate wrongful inference results;
- Model Logic Confidentiality Flaws – as critical information about the
model can be exposed if it was not set up properly;
- Training Data Confidentiality Flaws – as private information contained
in the training data can get exposed through inference results;
- Model Logic Integrity Flaws – as the model algorithm itself can get
altered by malicious attackers.
