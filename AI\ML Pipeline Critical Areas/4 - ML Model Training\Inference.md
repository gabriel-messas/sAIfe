## 4 - ML Model Training\Inference
#### Typically, the main step, whose entity is being/has been trained on a set of data and generates inferences when provided with inputs

- Possible threats and/or vulnerabilities:

	- **Training-time vulnerabilities**
		- **Training Data Integrity Flaws** - Susceptibility to unwanted training data alterations, Lack of protection against malicious input manipulation
			- Solution: Implementing strict access management policies to limit direct access to training data, Applying input filtering/manipulation detection techniques, Robustifying the model, Retraining with adversarial samples (Adversarial training)

	- **Inference-time vulnerabilities**
		- **Inference Output Integrity Flaws** - Susceptibility to returning wrongful inference results, Lack of protection against malicious input manipulation, Absence of rate limit/timeout for inference requests, Excess of information returned in inference outputs
			- Solution: Implementing rate limit/timeout for inference requests, Reducing the amount of information returned in results (e.g. probabilities/percentages), Applying input filtering/manipulation detection techniques, Robustifying the model

		- **Model Logic Confidentiality Flaws** - Susceptibility to exposing critical model characteristics through inference results, Excess of information returned in inference outputs
			- Solution: Implementing rate limit/timeout for inference requests, Reducing the amount of information returned in results (e.g. probabilities/percentages)

		- **Training Data Confidentiality Flaws** - Susceptibility to directly or indirectly exposing private information of the training data used, Absence of rate limit/timeout for inference requests, Excess of information returned in inference outputs
			- Solution: Implementing rate limit/timeout for inference requests, Reducing the amount of information returned in results (e.g. probabilities/percentages)

	- **General-time vulnerabilities**
		- **Model Logic Integrity Flaws** - Susceptibility to alteration and/or corruption of the ML logic/algorithm itself, Lack of security to access application internals
			- Solution: Implementing strict access management policies to limit direct access to the application source code and contents

	- Possible general solutions/preventions
		- [STRONG] Customized inputs on client-side that should pass - in a determined way - a validation on the model's server-side. This method would work similarly to the known public/private-key pair authentication: only a legitimate actor would possess the information on how to modify the input data being sent in a way that it would succeed the validation tests.
		- [WEAK] When dealing with classifiers, hide the class probabilities and only output the most likely class as the result.
		- [AVERAGE] Gradient masking: change the model's function from smooth to abrupt, to avoid suffering significant output differences caused by slight input changes.
	
	- General notes
		- Adversarial examples are hard to defend against because they require machine learning models to produce good outputs for every possible input. Most of the time, ML models work very well, but only work on a very small amount of all the many possible inputs they might encounter. Lots of strategies fail because they are not adaptive: they may block one kind of attack, but leave another vulnerability open to an attacker who knows about the defenses being used.
		- Targeted defenses are, among others, robustness to distribution drifts (maintaining the best performance when the training and runtime data differ); privacy preservation (restricting the amount of information exposed by a learned model); fairness (preventing biased outputs) and accountability (providing explanations to the results) assurance.
		- Against training-time attacks, considering the main problem as data poisoning, the majority of the defenses rely on developing a way to identify portions of data that do not match the expected trend. Removing these outliers - preferentially, before they event get processed - would, theoretically, guard the model.
		- Against inference-time attacks, on the other hand, defenses lie, principally, on trying to reduce data exposition. Gradient masking is one of the options for doing so, as it makes small perturbations less likely to trigger significant output changes, slowing down a malicious exploratory attack. Another alternative is training explicitly on adversarial settings, i.e., feeding the model with malicious inputs, but with the correct label/decision. This way, the system would be more prepared to deal with a real attack scenario.
		- When it comes to privacy, reducing the exposure of data on the outputs can be done via randomizing the parameters and/or predictions, at the expense of accuracy (technique called differential privacy).

(\*) - Item may have direct impact on the AI/ML aspect itself

References:

- https://www.datasciencecentral.com/top-7-data-security-threats-to-ai-and-ml/
- https://towardsdatascience.com/poisoning-attacks-on-machine-learning-1ff247c254db
- https://towardsdatascience.com/evasion-attacks-on-machine-learning-or-adversarial-examples-12f2283e06a1
- https://ieeexplore.ieee.org/stamp/stamp.jsp?arnumber=8685687
