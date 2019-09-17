import React from "react";
import authors from "./data";
import Sidebar from "./Sidebar"
import AuthorList from "./AuthorList.js"
function App() {
  return (
    <div id="app" className="container-fluid">
      <div className="row">
        <div className="col-2">
        <Sidebar/>
        
        </div>
        <div className="content col-10">
            <div className="authors">
              <h3>Authors</h3>
          
        <AuthorList authors={authors}/>
      </div>
    </div>
    </div>
    </div>
    
  );
}

export default App;
