# React-Tutorial

### Quick Start 
https://reactjs.org/docs/installation.html#creating-a-new-application



Whenever `this.setState` is called, an update to the component is scheduled, causing React to merge in the passed state update and rerender the component along with its descendants.
```
NEVER mutate `this.state` directly, as calling `setState()` afterwards may replace the mutation you made. Treat this.state as if it were immutable.

`setState()` does not immediately mutate this.state but creates a pending state transition. Accessing `this.state` after calling this method can potentially return the existing value.

There is no guarantee of synchronous operation of calls to setState and calls may be batched for performance gains.  `setState()` will always trigger a re-render unless conditional rendering logic is implemented in `shouldComponentUpdate()`.

If mutable objects are being used and the logic cannot be implemented in `shouldComponentUpdate()`, calling `setState()` only when the new state differs from the previous state will avoid unnecessary re-renders.
```

`functional components` Rather than define a class extending React.Component, simply write a function that takes props and returns what should be rendered.


### Note
- JS use 2 spaces instead of tab
- It is, however, conventional in React apps to use on* names for the attributes and handle* for the handler methods.
