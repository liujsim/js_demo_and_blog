function middleware(){
  this.middlewares = [];

  setTimeout(this.handleRequest.bind(this), 0);
}

middleware.prototype.use = function(fn){
  if(typeof fn !== 'function'){
    throw 'middleware must be a function';
  }
  this.middlewares.push(fn);
  return this;
}

middleware.prototype.next = function(fn){
  if(this.middlewares.length > 0 ){
    var ware = this.middlewares.shift();
    ware.call(this, this.next.bind(this));
  }
}


middleware.prototype.handleRequest = function(){
  this.next();
  this.call()
}