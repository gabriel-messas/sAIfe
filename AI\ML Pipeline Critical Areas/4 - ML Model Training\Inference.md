## 4 - ML Model Training\Inference
#### Typically, the main step, whose entity is being/has been trained on a set of data and generates inferences when provided with inputs

- Possible threats and/or vulnerabilities:

	- **Training-time-focused attacks**
		- Poisoning: tries to manipulate the model by altering the training data being fed to it
			- Label manipulation: switches or alters input labels (in a supervised classifier) in order to degrade the model's future performance
			- Input manipulation
				- Direct poisoning of learning inputs: alters features of the data being input in order to change the future trained model for a specific behaviour
				- Indirect poisoning of the learning inputs: poisons the data before pre-processing only to disturb model training unspecifically
			- Solution: Implementing strict access management policies to limit direct access to training data, Applying input filtering/manipulation detection techniques, Robustifying the model

	- **Inference-time-focused attacks**
		- Exploratory: tries to induce determined outputs by varying the input provided
			- Solution: Implementing rate limit/timeout for inference requests, Reducing the amount of information returned (e.g. probabilities/percentages)
		- Oracle/model extraction: tries to extract the model itself by providing inputs, analyzing and combining their results
			- Solution: Implementing rate limit/timeout for inference requests, Reducing the amount of information returned (e.g. probabilities/percentages)
		- Direct manipulation of model inputs: alters the feature values processed by the model to get different predictions
			- Source-target misclassification/targeted: does so with the intention of getting a specific classification
			- Simple misclassification/untargeted: does so with the intention of getting any different than optimal classification
		- Indirect manipulation of model inputs: alters the feature values processed by the model to get different predictions
		- Membership inference: tries to figure out whether a determined set of inputs was part of the model's training data in order to clone the model
		- Model inversion/training data extraction: with access to the model and its predictions, attempts to reverse engineer the results to recover training data

	- **General-time attacks**
		- Logic corruption: alters the ML logic/algorithm itself and the way it learns and infers outputs
			- Implementing strict access management policies to limit direct access to the application source code and contents

	- Possible solutions/preventions
	-- [STRONG] Customized inputs on client-side that should pass - in a determined way - a validation on the model's server-side. This method would work similarly to the known public/private-key pair authentication: only a legitimate actor would possess the information on how to modify the input data being sent in a way that it would succeed the validation tests.
	-- [WEAK] When dealing with classifiers, hide the class probabilities and only output the most likely class as the result.
	-- [AVERAGE] Gradient masking: change the model's function from smooth to abrupt, to avoid suffering significant output differences caused by slight input changes.
	
	- Adversarial examples are hard to defend against because they require machine learning models to produce good outputs for every possible input. Most of the time, ML models work very well, but only work on a very small amount of all the many possible inputs they might encounter. Lots of strategies fail because they are not adaptive: they may block one kind of attack, but leave another vulnerability open to an attacker who knows about the defenses being used.
	- Targeted defenses are, among others, robustness to distribution drifts (maintaining the best performance when the training and runtime data differ); privacy preservation (restricting the amount of information exposed by a learned model); fairness (preventing biased outputs) and accountability (providing explanations to the results) assurance.
	- Against training-time attacks, considering the main problem as data poisoning, the majority of the defenses rely on developing a way to identify portions of data that do not match the expected trend. Removing these outliers - preferentially, before they event get processed - would, theoretically, guard the model.
	- Against inference-time attacks, on the other hand, defenses lie, principally, on trying to reduce data exposition. Gradient masking is one of the options for doing so, as it makes small perturbations less likely to trigger significant output changes, slowing down a malicious exploratory attack. Another alternative is training explicitly on adversarial settings, i.e., feeding the model with malicious inputs, but with the correct label/decision. This way, the system would be more prepared to deal with a real attack scenario.
	- When it comes to privacy, reducing the exposure of data on the outputs can be done via randomizing the parameters and/or predictions, at the expense of accuracy (technique called differential privacy).

(\*) - Item may have direct impact on the AI/ML aspect itself

References:

- https://www.datasciencecentral.com/top-7-data-security-threats-to-ai-and-ml/
- https://towardsdatascience.com/poisoning-attacks-on-machine-learning-1ff247c254db
- https://ieeexplore.ieee.org/stamp/stamp.jsp?arnumber=8685687
