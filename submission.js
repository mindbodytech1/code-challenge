const findSum = function(array) {
let total = 0;
    for (let i = 0; i < array.length; i++) {
        total += array[i];
    }
    return total;
};

const findFrequency = function(array) {
  let result = {
        most: '',
        least: ''
    };
    let bestCount = 0, leastCount = array.length;
    for (let i = 0; i < array.length; i++) {
        let count = 0;
        for (let j = 0; j < array.length; j++) {
            if (array[i] === array[j])
                ++count;
        }
        if (count > bestCount) {
            bestCount = count;
            result.most = array[i];
        }
        if (count < leastCount) {
            leastCount = count;
            result.least = array[i];
        }
    }
    return result;
};

const isPalindrome = function(str) {
    const length = string.length; 
    
    for (let i = 0; i < length / 2; i++) {  
        if (string[i] !== string[length - 1 - i]) {  
            alert( 'False');  
        }  
    }  
    alert( 'True');
};

const largestPair = function(array) {
    var max=-Infinity;
    for (var i=0;i<array.length-1;i++){
        max = array[i]*array[i+1]>max ?array[i]*array[i+1]:max;   
    }
    return max;
};

const removeParenth = function(str) {
    var b=String(prompt('Enter String ')) 
    var result="" 
    for(var i=0;i<b.length;i++){
      if(!(b[i]==='(' || b[i]===')')) 
     result+=b[i] 
    }
    return result 
  };

const scoreScrabble = function(str) {
  let sum=0 
      temp=String(prompt('Enter a word : '))
      let s={   
          1 : ['a', 'e', 'i', 'o', 'u', 'l', 'n', 'r', 's', 't'],
          2: ['d', 'g'],
          3 :[ 'b', 'c', 'm', 'p'],
          4 : ['f', 'h', 'v', 'w', 'y'],
          5 : ['k'],
          8 : ['j', 'x'],
          10 : ['q', 'z'],
      }
      let list=Object.entries(s)  
     for(let i in temp){  
       for(let j in list){ 
         if(list[j][1].includes(temp[i])){  
           sum+=Number(list[j][0])  
         }
       }
     }
      return sum  
  };
