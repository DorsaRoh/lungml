# LungML

## 💡 Inspiration

The overarching idea was sparked by the infamous fight against lung cancer and lung disease. Not only have such maladies killed millions of individuals worldwide, but they has also indirectly harmed our collective well-being as a species. Indeed, vulnerable populations, as well as ill patients, can no longer meet with their doctors at their typical hospital, due to the risks such contact poses in terms of the ongoing pandemic. In addition, physicians can only identify the risk of lung disease with a bewildering and terrifying 20% accuracy, despite being responsible for 32% of all deaths in the world. Not to mention, lung cancer is the leading cause of death amongst all types of cancer. Despite acquiring over 4 million cases per year, and can occur with the subtlest of symptoms that, in reality, require immediate medical treatment, most patients simply cannot access the help they need. 

As a result, we noticed the urgency for a reliable, convenient, and accurate mechanism to correctly self-diagnose patients who potentially suffer from pulmonary illnesses. We learned about the most common and severe conditions plaguing third-world nations, countless areas that do not have proper access to medical care, and typically find out about major medical issues when its too late. We strove to change this, and allow people to become informed about their health consistently, easily, and effectively. 

## 💻 What LungML Does

- LungML is an application that allows images of Pulmonary Chest X-Ray's to be used to detect if a patient has manifestations of lung cancer or lung disease using computer vision and machine learning.
- Enables the accessibility of accurate diagnosis of a patient for maximum convenience and reliability.
- As an app created for Third World countries & rural areas, it is for individuals who do not have access to medical support nor fast and efficient examination. LungML is designed to be used frequently to evaluate the severity of pulmonary conditions, & to provide users with knowledge of their current health.

## 🔨 How LungML is Built

The Machine Learning model was created using TensorFlow, and then was converted into a TensorflowJS model. When the user clicks on the 'Diagnose' button, the request is sent to the backend server which calls the model with all its weights and factors, and then takes the input image and diagnoses whether or not the patient has pulmonary disease or cancer. The front end was made using HTML, CSS and JavaScript, and the server side programming was created using nodeJS.
