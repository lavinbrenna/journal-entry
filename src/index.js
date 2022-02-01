import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Journal from './journal.js';
import Entry from './entry.js';
import './css/styles.css';

$(document).ready(function(){
  const journal = new Journal();
  $("#journalForm").submit(function(event){
    event.preventDefault();
    const entryTitle = $('#journal-title').val();
    const entryText = $("#journal-entry").val();
    const entry = new Entry(entryTitle, entryText);
    const teasers = entry.createTeaser();
    journal.addEntry(entry);
    $("#journal-teasers").show();
    $('#journal-teasers').append("<p>" + teasers + "</p>" );
  });
});