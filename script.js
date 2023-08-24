function volume_sphere() {
    //Write your code here
	let radius=document.getElementById("radius");
	let rad=radius.volume;
	const volume=document.getElementById("volume");
  volume.value=3.14*rad*rad*rad;
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
