## Case Study - ConsistencIA Application - Solution Gathering

### User Interface
For this category, the following detected vulnerabilities have the respective associated solutions for ConsistencIA:

- Injection Flaws
  - Input Sanitization: the majority of Streamlit-based output ele-
ments already has data sanitization against the most well-known
types of injection flaws (just like most modern Web frameworks),
such as HTML and JavaScript DOM injection. The important
part is actually being careful when using pure HTML elements
and/or when transferring raw untreated input data to another
part of the application (e.g. to the API, for database query or ML
model inference), where mitigating actions should be taken.
- Authentication Flaws
  - Password Encryption: authentication-related sensitive data must
be encrypted while in transit to other parts of the application
(e.g. to the API, for validation), for instance, by using a secure
communication channel, such as HTTPS(TLS);
  - Session Data Safe Handling: Streamlit (just like most modern
Web frameworks) already has its safe way of dealing with ses-
sions. Nevertheless, guidelines are: session ID names must not be
common/default; the ID itself should be long and random enough
to prevent brute-force attacks; the content encoded must not be
meaningful enough to disclose information in case of an attack;
session data must only travel through encrypted connections (such
as HTTPS);
  - Authentication Timeouts: expiring login sessions and invalidat-
ing temporary authentication tokens regularly is important, as to
avoid compromising safety in the case of a breach;
  - Setting the Appropriate Security Flags on Cookies: if using cook-
ies to carry session data, the ‘Secure’, ‘HttpOnly’ and ‘SameSite’
flags must be present on the ‘Set-Cookie’ headers;
- Authorization Flaws
  - Role-Based Access Control: implementing restrictions based on
the level of access of each user (as directory/path protection) guar-
antees they are not going to be shown restricted content for their
role.
- Security Misconfiguration
  - Up-to-date Software Versions: making sure the Streamlit library
and all the accessory software installed are in their last versions
helps avoiding possible problems;
  - Disabling Debug Mode: not revealing debug and/or error handling
information can make a possible intruder’s life harder as they get
less insights into the system’s way of functioning;
  - Disabling Directory Listing: not revealing the server’s internal
folder/file structure is important to reduce the amount of infor-
mation available for a possible malicious person;
  - Changing Default Values: not using default/standard keys and
passwords for application configuration is critical as this is gener-
ally the most trivial attack tried by a hacker.
- Sensitive Data Exposure
  - Encrypted Communication: using a cryptographed channel to
transmit information (such as a TLS-backed HTTPS connection)
is highly recommended, as a possible network intruder cannot ac-
cess the actual content of the requests;
  - URL Protection: not using URL (path or query) parameters to
convey sensitive unencrypted data is a good practice   - even over
encrypted connections   - as they get easily shown on the client
browser and can be accessed in many ways;
  - Storage Protection: avoiding storing sensitive unencrypted data
in browser storage mechanisms (Local Storage, Session Storage
and Indexed DB) is important, as to avoid a possible data leak in
case of a XSS (Cross-Site Scripting) attack.

### API/Server
For this category, the following detected vulnerabilities have the respective associated solutions for ConsistencIA:

- Injection Flaws
  - Input Sanitization: when receiving input data coming from an-
other part of the application (e.g. from the User Interface, for
database query or ML model inference), mitigating actions should
be taken to clean the incoming content before actually using it,
in order to avoid SQL/NoSQL injection attacks or ML-specific
attacks. For the former, for instance, making use of the appro-
priate database connector functions is a good solution, as they
have built-in statement preparation and argument sanitization.
For the latter, a more complex cleaning algorithm should be used
to prepare the data;
  - Performing Active Data Validation Against Data Types and Pat-
terns: incoming data must also be validated against pre-determined
types and patterns right as the request is received.
- Authentication Flaws
  - Password Encryption/Hashing: authentication-related sensitive
data must be encrypted while in transit from other parts of the
application (e.g. from the User Interface, for validation), for in-
stance, by using a secure communication channel, such as HTTPS
(TLS). User credentials should also be hashed when received, and
not used as plain text;
  - Authentication Timeouts: expiring login sessions and invalidat-
ing temporary authentication tokens regularly is important, as to
avoid compromising safety in the case of a breach;
  - Authentication Validation: enforcing authentication validation for
every single request/endpoint guarantees the user is still properly
legitimate;
  - Setting the Appropriate Security Flags on Cookies: if using cook-
ies to carry session data, the ‘Secure’, ‘HttpOnly’ and ‘SameSite’
flags must be present on the ‘Set-Cookie’ headers.
- Authorization Flaws
  - Role-Based Access Control: implementing restrictions based on
the level of access of each user (as endpoint protection) guarantees
they are not going to be able to perform a restricted request for
their role   - such as a model training operation.
- Security Misconfiguration
  - Up-to-date Software Versions: making sure the Flask library and
all the accessory software installed are in their last versions helps
avoiding possible problems;
  - Disabling Debug Mode: not revealing debug and/or error handling
information can make a possible intruder’s life harder as they get
less insights into the system’s way of functioning;
  - Changing Default Values: not using default/standard keys and
passwords for application configuration is critical as this is gener-
ally the most trivial attack tried by a hacker;
  - Implementing Cross-Origin Resource Sharing (CORS) Policy: re-
stricting access to the API from unallowed origins.
- Sensitive Data Exposure
  - Encrypted Communication: using a cryptographed channel to
transmit information (such as a TLS-backed HTTPS connection)
is highly recommended, as a possible network intruder cannot ac-
cess the actual content of the requests;
  - Return Minimal Data: returning the smallest number of prop-
erties for an object is a good practice, as it can avoid exposing
unnecessary sensitive information.
- Resource Exhaustion
  - Request Throttling: limiting the amount of requests (including au-
thentication ones) a user can make in a given period of time to the
the Flask API helps preventing possible credential stuffing/brute-
force attacks and possible Denial of Service (DoS) attacks by ex-
hausting computational resources, which would cause inference
unavailability;
  - Limited Payload Sizes: defining a maximum size for incoming/outgoing
data per request (and implementing pagination, when possible)
can help improving performance, preventing bottlenecks and un-
availability;
  - Maximum Pagination Parameters: defining a maximum size for
returned paginated content can avoid performance drops and re-
source exhaustion;
  - Limiting Hardware Resource Levels for Server Applications: spec-
ifying maximum computational resource limits can avoid RAM
memory or CPU overload under heavy traffic.
- Mass Assignment
  - Properties Whitelist: setting up a schema-based validation mech-
anism (restricting specific attributes to be received/returned in
requests) prevents a malicious person from accessing out-of-scope
data.

### Database/Feature Store
For this category, the following detected vulnerabilities have the respective associated solutions for ConsistencIA:

- Authentication Flaws
  - Password Encryption: authentication-related sensitive data must
be encrypted while in transit from/to other parts of the applica-
tion (e.g. from the API, to establish a connection), for instance,
by using a secure communication channel, such as one with the
TLS protocol.
- Authorization Flaws
  - Least Privilege Account: when being accessed by a normal ser-
vice that is only going to run queries, an unnecessarily highly-
privileged database user account can generate risks, in the case
of a breach, exposing the training data and models parameters to
risks.
- Security Misconfiguration
  - Up-to-date Software Versions: making sure both the Redis and the
MySQL server instances are in their last versions helps avoiding
possible problems;
  - Disabling Debug Mode: not revealing debug and/or error handling
information can make a possible intruder’s life harder as they get
less insights into the system’s way of functioning;
  - Changing Default Values: not using default/standard keys and
passwords for server configuration is critical as this is generally
the most trivial attack tried by a hacker;
  - Private Network: not leaving the databases exposed to public/external
network is critical, as the API   - on the internal private network   -
is the only element with real necessity of exchanging data with it.
- Sensitive Data Exposure
  - Encrypted Communication: using a cryptographed channel to
transmit information (such as a TLS-backed HTTPS connection)
is highly recommended, as a possible network intruder cannot ac-
cess the actual content of the requests;
  - Encrypted Data at Rest: encrypting the data stored in the databases
is a good practice, as, even in the case of a security breach, an at-
tacker in possession of this data cannot access the actual content
  - mainly, the training data   - without decrypting it.
- Resource Exhaustion
  - Limiting Hardware Resource Levels for Server Applications: spec-
ifying maximum computational resource limits can avoid RAM
memory or CPU overload under heavy traffic;
  - Limited Connections: defining a maximum amount of database
client connections simultaneously open can help improving per-
formance, preventing bottlenecks and unavailability.
- Data Loss
  - Backup Plan: having periodic backup routines scheduled is a good
practice, as to avoid permanently losing information, in the case
of an unforeseen event;
  - Backup Protection: backed-up information must be protected and
encrypted, as, even in the case of a security breach, an attacker in
possession of this data cannot access the actual content without
decrypting it.

### Machine Learning Model
For this category, the following detected vulnerabilities have the respective associated solutions for ConsistencIA:

- Training Data Integrity Flaws
  - Protecting Training Data: limiting direct access to training data
stored in the MySQL database   - from any unnecessary portions
of the application or from manual procedures   - is a good practice,
as it restricts points of flaw;
  - Input Filtering: running a pre-training analysis (before actually
applying the ML model) on the incoming data   - against pre-
determined parameters/criteria   - can detect highly significant out-
liers and less sophisticated manipulations;
  - Manipulation Detection: developing a preventive algorithm, with
an input manipulation detection technique tailored to the specific
ML model in use, although very complex   - as it has to encompass
very diverse kinds of data variation   -, can be effective against
adversarial attacks;
  - Adversarial Training: using the adversarial attack inputs them-
selves to retrain the ML model   - but, then, with the right asso-
ciated output   - is an effective way of robustifying the algorithm
and preparing it to deal with further poisoning attempts;
  - Periodic Data Checks: running passive regular analyses on the
training data stored in the MySQL database   - to check the values
against pre-determined parameters/criteria   - can detect highly
significant outliers and less sophisticated manipulations, in order
to trigger a reactive measure.
- Inference Output Integrity Flaws
  - Inference Request Rate Limiting: limiting the amount of inference
requests a user can make   - in a determined period of time   - is a
safe restriction technique not to release exceeding information on
the model internals. It prevents a possible attacker from running
countless queries with various input values, combining them to get
insights and assembling their own “truth table” on the targeted
model (similar to a model evasion attack). With this artifact, the
abuser can “clone the model” and gradually generate a specific
input that would return their expected inference output;
  - Minimal Inference Data Output: returning the lowest possible
amount of information (explanations, percentages, additional model
logic values and parameters)   - besides the direct inference output
itself   - is also a good practice, as not to release exceeding insights
into the model way of functioning;
  - Input Filtering: similar to the solution presented for the section
“Training Data Integrity Flaws” above;
  - Manipulation Detection: similar to the solution presented for the
section “Training Data Integrity Flaws” above;
  - Adversarial Training: similar to the solution presented for the
section “Training Data Integrity Flaws” above.
- Model Logic Confidentiality Flaws
  - Inference Request Rate Limiting: similar to the solution presented
for the section “Inference Output Integrity Flaws” above;
  - Minimal Inference Data Output: similar to the solution presented
for the section “Inference Output Integrity Flaws” above.
- Training Data Confidentiality Flaws
  - Inference Request Rate Limiting: similar to the solution presented
for the section “Inference Output Integrity Flaws” above;
  - Minimal Inference Data Output: similar to the solution presented
for the section “Inference Output Integrity Flaws” above.
- Model Logic Integrity Flaws
  - Model Code Protection: limiting direct access to the model al-
gorithm and to its parameters stored in the MySQL database   -
from any unnecessary portions of the application or from manual
procedures   - is a good practice, as it restricts points of flaw.
