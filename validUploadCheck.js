document.getElementById('loadButton').style.visibility = "hidden";

document.getElementById('fileToLoad').onchange = function () {
	var validUpload = false;  
	var ext = this.value.split(".");
	 
	if( ext.length === 1 || ( ext[0] === "" && ext.length === 2 ) ) {
		return "";
	}
	  
	var checkExt = ext.pop().toLowerCase();
	var fileSize = this.files[0].size;
	  
	if (checkExt != "txt") {
		alert("Error: You can only upload .txt files.");
		document.getElementById('fileToLoad').value= null;
	}

	if(fileSize == 0){
		alert("Error: You can't upload empty files.");
		document.getElementById('fileToLoad').value= null;
	} else {
		validUpload = true;
		document.getElementById('loadButton').style.visibility = "visible";
	}  
};