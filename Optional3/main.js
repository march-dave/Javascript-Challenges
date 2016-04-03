// 3. Declaration of Independence

// Create a mini jQuery app that consists of a text area, a button, and a result table.

// When you submit anything in the text area, the app will count the frequencies of the words used in the text and present the top 10 used words in the table. The table should have 2 columns - the word, and the number of times it is used.

// Test your app with the Declaration of Independence text!

'use strict';

var countArray = [];
var $display;
$(document).ready(init);

function init() {
	$display = $("#fname");
	$("#btnSubmit").on("click", getValue);
}

function getValue() {
	var currVal = $display.val();

	var array = currVal.split(" ");
	var arraySotring = array.sort();

	var count = 0;
	var freqwords = arraySotring.map(function(c, i, a) {
		if (arraySotring[i-1] == arraySotring[i]) {
			count++;
			countArray.push(count);
		}
	}); 
	// arrayVal.push = currVal;
}