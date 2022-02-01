function Entry(title, text){
  this.title = title;
  this.text = text;
}

Entry.prototype.createTeaser = function(){
  text = this.text;
  text = text.split(".");
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

