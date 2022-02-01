//import Journal from './journal.js';
//import Entry from './entry.js';

function Journal(){
  this.journalEntries = {},
  this.currentEntryId = 0
}
function Entry(title, text){
  this.title = title;
  this.text = text;
}

Entry.prototype.createTeaser = function(){
  text = this.text.split(".");
  // console.log(text);
  let firstSentenceArray = text[0].split(" ");
  let teaserArray = []
  // console.log("First sentence:", teaserArray);
  if(firstSentenceArray.length > 8){
    for(let i = 0; i < 8; i ++){
      teaserArray.push(firstSentenceArray[i]);
    }
    return teaserArray.join(" ") + "...";
  }else{
    return firstSentenceArray.join(" ") + ".";
  }
}

$(document).ready(function(){
  const journal = new Journal();
  $("#journalForm").submit(function(event){
    event.preventDefault();
    const entryTitle = $('#journal-title').val();
    const entryText = $("#journal-entry").val();
    const entry = new Entry(entryTitle, entryText);
    const teasers = entry.createTeaser();
    $("#journal-teasers").show();
    $('#journal-teasers').append("<p>" + teasers + "</p>" );
  })
})