import { useState } from 'react';
import TodoForm from './components/TodoForm.js';
import TodoList from './components/TodoList.js';
import './App.css';

function App() {
  const [taches, setTaches] = useState([]);

  const ajouterTache = (texte) => {
    const nouvelleTache = {
      id: Date.now(),
      texte,
      terminee: false
    };
    setTaches([...taches, nouvelleTache]);
  };

  const changerEtat = (id) => {
    setTaches(
      taches.map((t) =>
        t.id === id ? { ...t, terminee: !t.terminee } : t
      )
    );
  };

  const supprimerTache = (id) => {
    setTaches(taches.filter((t) => t.id !== id));
  };

  const tachesTerminees = taches.filter(t => t.terminee).length;
  const tachesTotal = taches.length;

  return (
    <div className="app">
      <div className="container">
        <header className="app-header">
          <h1>📝 To-Do List Interactive</h1>
          <div className="stats">
            {tachesTotal > 0 ? (
              <p>{tachesTerminees} / {tachesTotal} tâches terminées</p>
            ) : (
              <p>Commencez par ajouter une tâche !</p>
            )}
          </div>
        </header>
        
        <main className="main-content">
          <TodoForm ajouterTache={ajouterTache} />
          <TodoList
            taches={taches}
            changerEtat={changerEtat}
            supprimerTache={supprimerTache}
          />
        </main>
      </div>
    </div>
  );
}

export default App;
