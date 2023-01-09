
class Stack {
  constructor() {
    this.stackControl = [];
    this.MAX_SIZE = 10;
  }

  canPush() {
    if(this.stackControl.length===0){
      return true
    }
    if(this.stackControl.length === this.MAX_SIZE){
      return false
    }  }

  isEmpty() {
    return this.stackControl.length === 0
  }

  push(item) {

    if(this.canPush() === false){
      throw new Error('STACK_OVERFLOW')
    }
    
    this.stackControl.push(item)
    return this.stackControl
  
  }
  pop() {
    // ... your code goes here
    if(this.canPush()){
      throw new Error('STACK_UNDERFLOW')
    }
    return this.stackControl.pop()
  }

  display() {
    // ... your code goes here
    return this.stackControl
  }  
}

// This is required to enable the automated tests, please ignore it.
if (typeof module !== 'undefined') module.exports = Stack;
