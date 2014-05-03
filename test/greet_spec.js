var greet = require("greet")

describe('greet', function(){
  it("should greet a preson by name", function(){
    expect(greet("someone")).to.eql("hello, someone");
  });
  it("should greet a person flirtatiously if drunk", function(){
    expect(greet("someone", drunk = true)).to.eql("hello someone, you look sexy today");
  });
});

