# LungML

Using Machine Learning to Diagnose Lung Cancer

## Awards 

3x hackathon award winner.

<ul>
  <li>Second Place Overall at Cognition Hackathon (top 2 out of 1000+ participants)
  <ul><li>Healthcare Track Winner + Best Girl's Team at Cognition Hackathon </ul></li>
  <ul>
  <li>Best Design at NeoHacks 2.0</li>
  <li>First Place Overall + Wolfram Award at VividHacks</li>
  </ul>
  
# About

## 💡 Inspiration
The overarching idea was sparked by the infamous fight against lung cancer and lung disease. Not only have such maladies killed millions of individuals worldwide, but they have also indirectly harmed our collective well-being as a species. Indeed, vulnerable populations, as well as ill patients, can no longer meet with their doctors at their typical hospital, due to the risks such contact poses in terms of the ongoing pandemic. In addition, physicians can only identify the risk of lung disease with a bewildering and terrifying 30% accuracy, despite lung-related illnesses being responsible for millions of deaths annually. Not to mention, lung cancer is the leading cause of death among all types of cancer. Despite acquiring over 4 million cases per year, and occurring with the subtlest of symptoms that, in reality, require immediate medical attention, most patients simply cannot access the help they need.

My youngest sister—Sophie— was recently diagnosed with stage four bronchial (lung) cancer. The issue was that the disease was not properly diagnosed by the doctors once it had begun, and her condition was left untreated for months. Had she been properly diagnosed prior, would she have gotten the necessary medical treatment to handle the disease, and she could have avoided escalating to stage four cancer.

Lung disease is a serious malady that primarily affects your lungs. For instance, the bacteria that cause tuberculosis are spread from one person to another. Tuberculosis is presently one of the 10 top causes of death and the leading case from a single infectious agent (greater than AIDS/HIV). In 2019, approximately 10 million people acquired tuberculosis worldwide, resulting in a multitude of deaths caused by poor diagnoses of the disease. If tuberculosis can be identified, it can be easily treated with the use of antibiotics, but without a proper diagnosis by medical practitioners, there are a plethora of unnecessary deaths happening every year due to such a disease.

As a result, LungML noticed the urgency for a reliable, convenient, and accurate mechanism to correctly diagnose patients who potentially suffer from pulmonary illnesses. We learned about the most common and severe conditions plaguing third-world nations, and countless areas that do not have proper access to medical care. Striving to change these ongoing predicaments, and to allow people to become informed about their health consistently, easily, and effectively: LungML was created.

## 💻 What LungML Does
LungML is an application that allows images of Pulmonary Chest X-Ray's, as well as MRI scans, to be used to detect if a patient has manifestations of lung cancer or lung disease using computer vision and machine learning.
Enables the accessibility of accurate diagnosis of a patient for maximum convenience and reliability.
As an app additionally created for Third World countries & rural areas, it is also for individuals who do not have access to medical support or fast and efficient examination. LungML is designed to be used frequently to evaluate the severity of pulmonary conditions, and to provide users with knowledge of their current health.

## 🔨 How LungML is Built
The Machine Learning model was created using TensorFlow, and then was converted into a TensorflowJS model. When the user clicks on the 'Diagnose' button, the request is sent to the backend server which calls the model with all its weights and factors, and then takes the input image and diagnoses whether or not the patient has pulmonary disease or cancer. The front end was made using HTML, CSS and JavaScript, and the server side programming was created using nodeJS.

## 🔜 What's next for LungML
Future endeavours for LungML include scalability, as well as deployment of the model on a cloud service such as google cloud. This would increase client-side performance. Additionally, future plans include the creation of a database of all the images the users upload, and passing those images through a data pipeline for preprocessing the images. Afterwards, saving those images from the user into a dataset for the model to train on weekly. This allows the model to be up to date and constantly improving, especially in terms of its accuracy, and ability in reducing bias due to the large variety of unique x-ray images. In addition, expanding the use case of LungML to other medical conditions like cardiovascular diseases and brain tumours, by implementing more models.

## 🧠 Challenges Ran Into
The first challenge ran into was the backend. Through the use of Flask for the backend initially, many issues and compile errors were accumulating. The server-side code was subsequently switched to Golang, but then LungML had issues with POST and GET requests that couldn't be solved in time. An eventual consensus was reached to utilize node.js for the server-side programming and it worked great with using JavaScript as it allowed LungML to easily implement server-side programming for the website. For the front end, LungML is built upon HTML, CSS and JavaScript because there were many issues accumulated when using a frontend framework like react. When initially training the model, there was a diagnostic accuracy of 63%, but with proper tuning and training, LungML diagnoses with a percentage accuracy well above 90%.

## 🏅 Accomplishments for LungML
LungML is proud of to have created such an accurate model in TensorFlow. Initially, there was very little experience with deep learning and TensorFlow prior to the hackathon, so creating a machine learning model that is accurate is an immense accomplishment. Additionally, LungML is proud to have been created in fighting the battle against pulmonary disease, with the potential to help save the lives of many people around the world.

