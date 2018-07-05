$(document).ready(function() {
	$("#inputTextToSave").on('keyup', function() {
		var words = this.value.match(/\S+/g).length;

		$('#display_count').text(words);		
	});
}); 