## 4 - Machine Learning Model
#### Typically, the main part, whose entity is being/has been trained on a set of data and generates inferences when provided with inputs

- Possible threats and/or vulnerabilities:

	- **Training-time vulnerabilities**
		- **Training Data Integrity Flaws** - Susceptibility to unwanted training data alterations (Data Poisoning Attack), Lack of protection against malicious input manipulation
			- Solution:
				- Protecting Training Data - Implementing strict access management policies to limit direct access to training data
				- Input Filtering - Applying input filtering techniques
				- Manipulation Detection - Robustifying the model to detect manipulated inputs
				- Adversarial Training - Retraining with adversarial samples
				- Periodic Data Checks - Periodic data integrity checks and outlier removal

	- **Inference-time vulnerabilities**
		- **Inference Output Integrity Flaws** - Susceptibility to returning wrongful inference results (Model Evasion Attack), Lack of protection against malicious input manipulation, Absence of rate limit/timeout for inference requests, Excess of information returned in inference outputs
			- Solution:
   				- Inference Request Rate Limiting - Implementing rate limit/timeout for inference requests
				- Minimal Inference Data Output - Reducing the amount of information returned in results (e.g. probabilities/percentages)
				- Input Filtering - Applying input filtering techniques
				- Manipulation Detection - Robustifying the model to detect manipulated inputs
				- Adversarial Training - Retraining with adversarial samples

		- **Model Logic Confidentiality Flaws** - Susceptibility to exposing critical model characteristics through inference results (Model Extraction Attack), Excess of information returned in inference outputs
			- Solution:
				- Inference Request Rate Limiting - Implementing rate limit/timeout for inference requests
				- Minimal Inference Data Output - Reducing the amount of information returned in results (e.g. probabilities/percentages)

		- **Training Data Confidentiality Flaws** - Susceptibility to directly or indirectly exposing private information of the training data used (Membership Inference/Data Reconstruction Attack), Absence of rate limit/timeout for inference requests, Excess of information returned in inference outputs
			- Solution:
				- Inference Request Rate Limiting - Implementing rate limit/timeout for inference requests
				- Minimal Inference Data Output - Reducing the amount of information returned in results (e.g. probabilities/percentages)

	- **General-time vulnerabilities**
		- **Model Logic Integrity Flaws** - Susceptibility to alteration and/or corruption of the ML logic/algorithm itself, Lack of security to access application internals
			- Solution:
				- Model Code Protection - Implementing strict access management policies to limit direct access to the application source code and contents

References:

- https://www.datasciencecentral.com/top-7-data-security-threats-to-ai-and-ml/
- https://towardsdatascience.com/poisoning-attacks-on-machine-learning-1ff247c254db
- https://towardsdatascience.com/evasion-attacks-on-machine-learning-or-adversarial-examples-12f2283e06a1
- https://ieeexplore.ieee.org/stamp/stamp.jsp?arnumber=8685687
