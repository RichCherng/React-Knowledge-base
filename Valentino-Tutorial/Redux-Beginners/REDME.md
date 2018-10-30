
https://www.valentinog.com/blog/react-redux-tutorial-beginners/


## What is a **reducer**?
A reducer takes two parameters: the current state and an action and return the next state

The only way to change the state is by sending a signal to the store. The signal is an action. "Dispatching an antion" is the process of sending out a signal.

There are two key points for avoiding mutations in Redux:
1. Using concat(), slice(), and ...spread for arrays
2. Using Object.assign() and ...spread for objects





## Error: "The node type SpreadProperty has been renamed to SpreadElement"
https://github.com/babel/babel/issues/8263