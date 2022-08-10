const form = document.getElementById('form');
const Class = document.getElementById('class');
const subject= document.getElementById('subject');
const date= document.getElementById('date');


var classBool = false;
var subjectBool = false;
var dateBool = false;

// console log outputs 
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