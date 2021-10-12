import Cake from "./Cake";

import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div className="bg-dark vh-100 p-4">
      <div className="container-fluid d-flex justify-content-between">
          <Cake id={1}/>
          <Cake id={2}/>
      </div>
    </div>
  );
}

export default App;
