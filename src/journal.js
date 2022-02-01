export default function Journal(){
  this.journalEntries = {};
  this.currentEntryId = 0;
}

Journal.prototype.assignId = function(){
  this.currentEntryId += 1;
  return this.currentEntryId;
};

Journal.prototype.addEntry = function(entry){
  entry.id = this.assignId();
  this.journalEntries[entry.id] = entry;
};