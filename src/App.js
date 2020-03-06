import React, { PureComponent } from 'react';
import Main from "./Main";
import Weather from "./Weather"


export class App extends PureComponent {
   render() {
      return (
         <div>
            <Weather />
         </div>
      )
   }
}

export default App
