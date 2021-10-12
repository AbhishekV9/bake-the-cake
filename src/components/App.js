import Cake from "./Cake";



function App() {
  const keys=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
  return (
    <div className="bg-dark vh-100 p-4">
      <div className="container-fluid d-flex justify-content-between flex-wrap">
          { keys.map((id)=>{
             return <Cake key={id} id={id}/>
          })}
      </div>
    </div>
  );
}

export default App;
