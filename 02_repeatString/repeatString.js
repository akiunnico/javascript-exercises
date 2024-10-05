const repeatString = function(string, num) {
    if(num<0) {
        return 'ERROR';
    }else{
        let result = '';
        for(let i=1; i<=num; i++){
        result += string;
    }
        return result;
    }
    
};
const number = Math.floor(Math.random() * 1000)
repeatString('hey',3);
repeatString('hello',10);
repeatString('hi',1);
repeatString('bye',0);
repeatString('goodbye',-1);
repeatString('odin',number);
repeatString('', 10);
// Do not edit below this line
module.exports = repeatString;
