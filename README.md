# React-Tutorial

### Quick Start
- [X] https://reactjs.org/docs/installation.html#creating-a-new-application

# React Tutorial CommentBox
- [X] https://medium.com/@gsuppy/coding-an-interactive-comment-box-with-react-js-50d7d20587d8
  ## Quick Start Tutorial: React Redux
  - [ ] https://medium.com/@firasd/quick-start-tutorial-using-redux-in-react-apps-89b142d6c5c1
  ## Quick Start Tutorial: Universal React, with Server Side Rendering 
  - [ ] https://medium.com/@firasd/quick-start-tutorial-universal-react-with-server-side-rendering-76fe5363d6e

# Real time twitter Stream: 
- [ ] https://scotch.io/tutorials/build-a-real-time-twitter-stream-with-node-and-react-js

# Getting to know Flux: 
- [ ] https://scotch.io/tutorials/getting-to-know-flux-the-react-js-architecture

### React Tutorial Point
https://www.tutorialspoint.com/reactjs/index.htm


# Handling 'this', how to bind to method 
- [X] https://reactjs.org/blog/2015/01/27/react-v0.13.0-beta-1.html#autobinding


# Create React App with an Express Backend 
- [ ] https://daveceddia.com/create-react-app-express-backend/


# Setup React without `create-react-app` from scratch
- [x] https://medium.com/@robhitt/react-from-scratch-575d1e570b85
  ## Implementing redux and react-router v4 in your react app
- [ ] http://manojsinghnegi.com/blog/2017/09/03/Implementing-redux-and-react-router-v4-in-your-react-app/


# Using React with Webpack
https://blog.risingstack.com/using-react-with-webpack-tutorial/






Whenever `this.setState` is called, an update to the component is scheduled, causing React to merge in the passed state update and rerender the component along with its descendants.

 - NEVER mutate `this.state` directly, as calling `setState()` afterwards may replace the mutation you made. Treat this.state as if it were immutable.

 - `setState()` does not immediately mutate this.state but creates a pending state transition. Accessing `this.state` after calling this method can potentially return the existing value.

 - There is no guarantee of synchronous operation of calls to setState and calls may be batched for performance gains.  `setState()` will always trigger a re-render unless conditional rendering logic is implemented in `shouldComponentUpdate()`.

 - If mutable objects are being used and the logic cannot be implemented in `shouldComponentUpdate()`, calling `setState()` only when the new state differs from the previous state will avoid unnecessary re-renders.


`functional components` Rather than define a class extending React.Component, simply write a function that takes props and returns what should be rendered.


### Note

#### Difference Between import React and import { Component } syntax
https://stackoverflow.com/questions/41768205/difference-between-import-react-and-import-component-syntax
https://stackoverflow.com/questions/33956201/how-to-import-and-export-components-using-react-es6-webpack
Default import. Default imports are exprted with `export default ...`. There can be only a single default export.
``` javascript
import React from 'react'
```

Member import (named import). Member imports are exported with `export ...`. There can be many member exports.
```javascript
 import { Component } from 'react'
```

You can import both by using this synctax:
```javascript
import React, { Component } from 'react';
```

To export a single component in ES6, you can use `export default` as follows:
```javascript
class MyClass extends Component {
 ...
}

export default MyClass;
```
And now you can use the following syntax to import that module:
```javascript
import MyClass from './MyClass.react'
```
if you are looking to export multiple components from a single file the declaration would look something like this:
```javascript
export class MyClass extends Component {
...
}

export Class MyClass extends Component {
...
}
```
And now you can use the following syntax to import those files:
```javascript
import {MyClass1, MyClass2} from './MyClass.react'
```
#########################################################################

- The main difference between state and props is that props are immutable. This is why the container component should define the state that can be updated and changed, while the child components should only pass data from the state using props.
- #### default props
```javascript
class App extends React.Component {
...
}
App.defaultProps = {
   headerProp: "Header from props...",
   contentProp:"Content from props..."
}
```
- JS use 2 spaces instead of tab
- It is, however, conventional in React apps to use on* names for the attributes and handle* for the handler methods.
