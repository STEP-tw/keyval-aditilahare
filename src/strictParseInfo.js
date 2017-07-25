const Parsed=require("./parsed.js");
const ParseInfo=require("./parseInfo.js");

const contains=function(list,key) {
  return list.find(function(validKey){
    return key==validKey;
  });
}

var StrictParseInfo=function(initialParsingFunction,validKeys) {
  ParseInfo.call(this,initialParsingFunction);
  this.validKeys=validKeys;
}

StrictParseInfo.prototype=Object.create(ParseInfo.prototype);

StrictParseInfo.prototype.pushKeyValuePair=function() {
  console.log("I'm here");
  if(!contains(this.validKeys,this.currentKey))
    throw new Error("invalid key");
  this.parsedKeys[this.currentKey]=this.currentValue;
  this.resetKeysAndValues();
}
