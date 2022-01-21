//You are making a currency converter app.
//Create a function called convert, which takes two parameters: the amount ////to convert, and the rate, and returns the resulting amount.
//The code to take the parameters as input and call the function is already // present in the Playground.
//Create the function to make the code work.

function main() {
    var amount = parseFloat(readLine(), 10);
    var rate = parseFloat(readLine(), 10);
     function convert(a,r){
    	return a*r;
    }
    console.log(convert(amount, rate));
   

}

main(200,100);

// contact manager 
// You are working on a Contact Manager app.
// You have created the contact object constructor, which has two arguments, name and number.
// You need to add a print() method to the object, which will output the contact data to the console in the following format: name: number
// // The given code declares two objects and calls their print() methods. Complete the code by defining the print() method for the objects.

function contact(name, number) {
    this.name = name;
    this.number = number;
    this.print = print ;
}
function print(){
    console.log(`${this.name} : ${this.name}`);
}

var a = new contact("David", 12345);
var b = new contact("Amy", 987654321);
a.print();
b.print();

// store manager ]
// You are working on a Store Manager program, which stores the prices in an array.
// You need to add functionality to increase the prices by the given amount.
// The increase variable is taken from user input. You need to increase all the prices in the given array by that amount and output to the console the resulting array.

function main() {
    var increase = parseInt(readLine(prices), 10);
    var prices = [98.99, 15.2, 20, 1026];
    //your code goes here
    for(let i = 0 ;i < prices.length;){
        prices[i] += increase ;
        i++ ;
    }
    console.log(prices);
    
}

function main() {
    var increase = parseInt(readLine(prices), 10);
    var prices = [98.99, 15.2, 20, 1026];
    //your code goes here
    var incPrice = prices.map(cur => cur + increase);
        console.log(incPrice);
    
}

// word
// You are making a text encryptor. It should take multiple words and output a combined version, where each word is separated by a dollar sign $.
// For example, for the words "hello", "how", "are", "you", the output should be "$hello$how$are$you$".
// The given code declares a class named Add, with a constructor that takes one rest parameter.
// Complete the code by adding a print() method to the class, which should generate the requested output.
class Add {
    constructor(...words) {
        this.words = words;
    }
    //your code goes here
    print(){
    this.curWord = "";
    this.words.map((el,i)=>{
        this.curWord+="$"+el;
    });
    console.log(this.curWord+"$");
  
    }
  
  }
  
  var x = new Add("hehe", "hoho", "haha", "hihi", "huhu");
  var y = new Add("this", "is", "awesome");
  var z = new Add("lorem", "ipsum", "dolor", "sit", "amet", "consectetur", "adipiscing", "elit");
  x.print();
  y.print();
  z.print();