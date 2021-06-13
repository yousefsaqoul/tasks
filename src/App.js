import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css"



// components
import NavBar from "./components/NavBar"
import AddTask from "./components/AddTask"
import TaskList from "./components/TaskList"


// context
import {TaskContextProvider} from "./context/TaskContext"
function App() {
  return (
    <div >
      <BrowserRouter>
        <NavBar />
        <div className="container">
          <div className="row">
            <div className="col-10 mx-auto">
              <Switch>

              <TaskContextProvider>
                <Route exact path="/" component={TaskList} />
                <Route path="/add-task" component={AddTask} />
              </TaskContextProvider>
            </Switch>
            </div>
        
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
