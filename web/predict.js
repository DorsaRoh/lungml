/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
particlesJS.load('particles-js', 'static/particles.json', function() {
    console.log('callback - particles.js config loaded');
});


function previewImage(event) {
	const reader = new FileReader()
	const imageField = document.getElementById("image-field")

	reader.onload = function () {
		if(reader.readyState == 2){
			imageField.src = reader.result
		}
	}

	reader.readAsDataURL(event.target.files[0]);

}


        
async function run() {
	const model = await tf.automl.loadImageClassification('../sigmodel/model.json');
	const image = document.getElementById('image-field');
	const predictions = await model.classify(image);
	console.log(predictions);
	let result = document.getElementById("result");
	let tuberculosis = Math.ceil(predictions[1].prob * 100);
	let normal =  Math.ceil(predictions[0].prob * 100)
	if (tuberculosis > normal) {
		document.getElementById("result").innerHTML = `This patient has tuberculosis! (Predicted with ${tuberculosis}% accuracy)` 
	}
	else if (normal > tuberculosis){
		document.getElementById("result").innerHTML = `This patient is normal! (Predicted with ${normal}% accuracy)`
	}
}




