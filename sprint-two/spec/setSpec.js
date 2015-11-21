describe('set', function() {
  var set;

  beforeEach(function() {
    set = Set();
  });

  it('should have methods named "add", "contains", and "remove"', function() {
    expect(set.add).to.be.a("function");
    expect(set.contains).to.be.a("function");
    expect(set.remove).to.be.a("function");
  });

  it('should add values to a set', function(){
    set.add("Susan Sarandon");
    set.add("Danny Glover");
    expect(set.contains('Danny Glover')).to.equal(true);
    expect(set.contains('Susan Sarandon')).to.equal(true);
  });

  it('should remove values from a set', function(){
    set.add("Mel Gibson");
    set.remove("Mel Gibson");
    expect(set.contains("Mel Gibson")).to.equal(false);
  });

  it('should add numbers to a set', function(){
    set.add(3);
    set.add(4);
    expect(set.contains(3)).to.equal(true);
    expect(set.contains(4)).to.equal(true);
  });

  it('should remove numbers from a set', function(){
    set.add(3);
    set.remove(3);
    expect(set.contains(3)).to.equal(false);
  });

  it('should differentiate between string numbers and real numbers', function(){
    set.add('3');
    expect(set.contains(3)).to.equal(false);
  });

  it('should not overwrite a string number with a real number', function(){
    set.add('3');
    set.add(3);
    expect(set.contains('3')).to.equal(true);
  });

  it('should add arrays to a set', function(){
    set.add([3]);
    set.add([4]);
    expect(set.contains([3])).to.equal(true);
    expect(set.contains([4])).to.equal(true);
  });

  it('should remove arrays from a set', function(){
    set.add([3]);
    set.remove([3]);
    expect(set.contains([3])).to.equal(false);
  });
  it('should add object to a set', function(){
    set.add({a:3});
    set.add({b:4});
    expect(set.contains({a:3})).to.equal(true);
    expect(set.contains({b:4})).to.equal(true);
  });

  it('should remove objects from a set', function(){
    set.add({b:4});
    set.remove({b:4});
    expect(set.contains({b:4})).to.equal(false);
  });

});
