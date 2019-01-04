var takeANumber = function(line, name){
  
  line.push(name);
  var num = line.indexOf(name);

  return (`Welcome, ${name}. You are number ${num+1} in line.`);
  
}

var nowServing = function (line){
  
  if (line.length === 0){
    return ""
  }
  return line[0];
  line.shift();
}