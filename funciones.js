//ARRAY

Array.prototype.random=function(){
for(var i=0;i<this.length;i++){
this.sort(function(){
return .5-Math.random()
})
