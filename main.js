var width = 10;
var height = 10;
var canvas = document.getElementById('canvas');

canvas.width = width;
canvas.height = height;

var context = canvas.getContext('2d');
var imageData = context.getImageData(0,0,width,height);
console.log(imageData);


fnk.forEach(function(){
}, imageData.data);
var eachPx = function(fn, imageData){
    
};

var randomColor = function(){

};

