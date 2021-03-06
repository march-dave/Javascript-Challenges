// Use jQuery to display a random message to the user.

// Start by creating an array of 10 random messages (strings)
// On page load, the page should have the message "Hello!"
// Beneath that, add a button that says "New Message"

// When the button is clicked, randomly select a new message to display on the screen (this will replace the old message)
// The button should be able to be clicked as many times as you want - every click will change the message

'use strict';

var messages = ['Apple' ,'Apricot','Asparagus','Aubergine','Avocado','Banana','Beetroot','Broccoli','Carrot','Cherry'];


$(document).ready(init);

function init() {
	loadMessage();
	$('#btnNew').on('click', messageRandomly)
}

function loadMessage() {
	$('#loading').text('Hello!');
}

var randomMessage = '';
function messageRandomly() {
	randomMessage = messages[Math.floor(Math.random() * messages.length)];
	$('#loading').text(randomMessage);
}
