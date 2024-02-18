import "./App.css";
import Title from "./sheard/Title";
import TaskList from "./sheard/TaskList";
function App() {
  const tasksList = [
    { id: 1, title: "Faire les coures", completed: true },
    { id: 2, title: "Repondre email", completed: false },
    { id: 3, title: "Envoi mail", completed: true },
    { id: 4, title: "Aprendre React", completed: false },
  ];

  return (
    <div className="App">
      <header className="App-header">
        <Title text="Gestion de Taches" />
      </header>
      <TaskList tasks={tasksList} />
    </div>
  );
}

export default App;
