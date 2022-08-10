## 
Q1) Create a html page that accepts the 
following inputs and displayed the output to 
the user AFTER all inputs have been 
submitted.

Your function will need these inputs:
● Class
● Subject
● Date

And these inputs to the function and output it 
as a fully-formed quiz.

Q2. Implement a callback

Q3) What will the code below output to the console and why? 
Q4) How has this identifier been used?
var hopperLab = {
    name: "bar",
    func: function() {
        var self = this;
        console.log("outer func:  this.name = " + this.name);
        console.log("outer func:  self.name = " + self.name);
        (function() {
            console.log("inner func:  this.name = " + this.name);
            console.log("inner func:  self.name = " + self.name);
        }());
    }
};
hopperLab.func();