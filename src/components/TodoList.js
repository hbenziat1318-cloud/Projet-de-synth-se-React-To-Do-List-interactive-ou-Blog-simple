import TodoItem from './TodoItem.js';
import './TodoList.css';

function TodoList({ taches, changerEtat, supprimerTache }) {
  if (taches.length === 0) {
    return (
      <div className="empty-state animate-fade-in">
        <div className="empty-icon">📝</div>
        <h3>Aucune tâche pour le moment</h3>
        <p>Commencez par ajouter votre première tâche ci-dessus !</p>
        <div className="empty-illustration">
          <div className="floating-item">💡</div>
          <div className="floating-item">✨</div>
          <div className="floating-item">🚀</div>
        </div>
      </div>
    );
  }

  const tachesActives = taches.filter(t => !t.terminee);
  const tachesTerminees = taches.filter(t => t.terminee);

  return (
    <div className="todo-list-container">
      {tachesActives.length > 0 && (
        <div className="tasks-section">
          <h3 className="section-title">
            📋 Tâches en cours <span className="count-badge">{tachesActives.length}</span>
          </h3>
          <ul className="todo-list active-tasks">
            {tachesActives.map((tache) => (
              <TodoItem
                key={tache.id}
                tache={tache}
                changerEtat={changerEtat}
                supprimerTache={supprimerTache}
              />
            ))}
          </ul>
        </div>
      )}
      
      {tachesTerminees.length > 0 && (
        <div className="tasks-section">
          <h3 className="section-title">
            ✅ Tâches terminées <span className="count-badge success">{tachesTerminees.length}</span>
          </h3>
          <ul className="todo-list completed-tasks">
            {tachesTerminees.map((tache) => (
              <TodoItem
                key={tache.id}
                tache={tache}
                changerEtat={changerEtat}
                supprimerTache={supprimerTache}
              />
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default TodoList;
