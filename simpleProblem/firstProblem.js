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