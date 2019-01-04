var takeANumber = function(line, name){
  
  line.push(name);
  var num = line.indexOf(name);

  return (`Welcome, ${name}. You are number ${num+1} in line.`);
  
}

var nowServing = function (line){
  
  if (line.length === 0){
    return "There is nobody waiting to be served!"
  }
  else{
  return line[0];
  line.shift();
  }
}
var currentLine = function (line){
  
  let str =  ("The line is currently: ");
  
  for (let x = 0; x < line.length; x++){
    
    str += (x + ". ");
    str += (line[x]);
    if 
  }
}