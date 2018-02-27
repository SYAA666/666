module.exports = function check(str, bracketsConfig) {
  var stack = [];
    for (let br of str) {
        const pair = bracketsConfig.find(b => b.includes(br));
        if(br === pair[1] && pair[0] === stack[stack.length - 1]) {
          stack.pop()
          } 
        else { 
          stack.push(br);
        }
    }
    return !stack.length; 
} 
