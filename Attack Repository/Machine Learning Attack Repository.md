## Machine Learning Attack Repository

- Possible threats and/or vulnerabilities:

	- **Training-time-focused attacks**
		- Poisoning: tries to manipulate the model by altering the training data being fed to it
			- Label manipulation: switches or alters input labels (in a supervised classifier) in order to degrade the model's future performance
			- Input manipulation
				- Direct poisoning of learning inputs: alters features of the data being input in order to change the future trained model for a specific behaviour
				- Indirect poisoning of the learning inputs (before pre-processing): poisons the data before pre-processing only to disturb model training unspecifically

	- **Inference-time-focused attacks**
		- Exploratory: tries to induce determined outputs by varying the input provided
		- Oracle/model extraction: tries to extract the model itself by providing inputs, analyzing and combining their results
		- Evasion/input manipulation
			- Direct manipulation of model inputs: alters the feature values processed by the model to get different predictions
				- Source-target misclassification/targeted: does so with the intention of getting a specific classification
				- Simple misclassification/untargeted: does so with the intention of getting any different than optimal classification
			- Indirect manipulation of model inputs (before pre-processing): alters the data processed by the model before pre-processing to get abnormal predictions
		- Membership inference: tries to figure out whether a determined set of inputs was part of the model's training data
		- Model inversion/training data extraction: attempts to reverse engineer the inferred results to recover training data

	- **General-time attacks**
		- Logic corruption: alters the ML logic/algorithm itself and the way it learns and infers outputs

References:

- https://www.datasciencecentral.com/top-7-data-security-threats-to-ai-and-ml/
- https://towardsdatascience.com/poisoning-attacks-on-machine-learning-1ff247c254db
- https://towardsdatascience.com/evasion-attacks-on-machine-learning-or-adversarial-examples-12f2283e06a1
- https://ieeexplore.ieee.org/stamp/stamp.jsp?arnumber=8685687
