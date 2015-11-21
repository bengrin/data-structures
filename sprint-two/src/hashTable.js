var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  this._size = 0;
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var overwrite = false;
  var bucket = this._storage.get(i) || [];
  var oldStorage = [];

  _.each(bucket, function(tuple) {
    if (tuple[0] === k) { 
      tuple[1] = v;
      overwrite = true;
    }
  });

  if(!overwrite) {
    bucket.push([k, v]);
  }

  //check size
  if (this._size >= this._limit * .75) {
    this._limit *= 2;
    this._storage.each(function(tuple) {
      if (tuple !== undefined && tuple !== null) {
        oldStorage.push(tuple);
      }
    });
    oldStorage = _.flatten(oldStorage, true);
    this._storage = LimitedArray(this._limit);
    this._size = 0;
    for (var i = 0; i < oldStorage.length; i++) {
      this.insert(oldStorage[i][0], oldStorage[i][1]);
    }
  }

  this._storage.set(i, bucket);
  this._size++;
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(i);
  if (bucket !== undefined) {
    for (var i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === k) {
        return bucket[i][1];
      }
  
    }
  }
  return null;
};

HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(i);
  var oldStorage = [];
  for (var i = 0; i < bucket.length; i++) {
    if (bucket[i][0] === k) {
      bucket.splice(i, 1);
      this._size--;
    }
  }
  if (this._size <= this._limit * .25) {
    this._limit = this._limit / 2;
    this._storage.each(function(tuple) {
      if (tuple !== undefined && tuple !== null) {
        oldStorage.push(tuple);
      }
    });
    oldStorage = _.flatten(oldStorage, true);
    this._storage = LimitedArray(this._limit);
    this._size = 0;
    for (var i = 0; i < oldStorage.length; i++) {
      if (oldStorage[i] !== null && oldStorage[i] !== undefined) {
        this.insert(oldStorage[i][0], oldStorage[i][1]);
      }
    }
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 * Linear
 */
