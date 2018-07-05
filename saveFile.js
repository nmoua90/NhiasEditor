function saveTextAsFile() {
	var textToSave = document.getElementById("inputTextToSave").value;
	var textEmptyCheck = textToSave.trim().length;
			
	if(textEmptyCheck < 1) {
		alert("Cannot save an empty file.");
	}else {
		var textToSaveAsBlob = new Blob([textToSave], {type:"text/plain"});
		var textToSaveAsURL = window.URL.createObjectURL(textToSaveAsBlob);
		var fileNameToSaveAs = "";
			 
		var downloadLink = document.createElement("a");
		downloadLink.download = fileNameToSaveAs;
		downloadLink.innerHTML = "Download File";
		downloadLink.href = textToSaveAsURL;
		downloadLink.onclick = destroyClickedElement;
		downloadLink.style.display = "none";
		document.body.appendChild(downloadLink);
			 
		downloadLink.click();
	}		
}
		 
function destroyClickedElement(event) {
	document.body.removeChild(event.target);
}
