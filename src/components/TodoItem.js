import './TodoItem.css';

function TodoItem({ tache, changerEtat, supprimerTache }) {
  const handleCheckboxChange = () => {
    changerEtat(tache.id);
  };

  const handleDelete = () => {
    supprimerTache(tache.id);
  };

  return (
    <li className={`todo-item ${tache.terminee ? 'completed' : ''}`}>
      <div className="todo-content">
        <label className="checkbox-container">
          <input
            type="checkbox"
            checked={tache.terminee}
            onChange={handleCheckboxChange}
            className="todo-checkbox"
          />
          <span className="checkmark">
            <span className="check-icon">✓</span>
          </span>
        </label>
        
        <span className="todo-text">
          {tache.texte}
        </span>
      </div>
      
      <button 
        onClick={handleDelete}
        className="delete-button"
        title="Supprimer la tâche"
      >
        <span className="delete-icon">🗑️</span>
        <span className="delete-text">Supprimer</span>
      </button>
    </li>
  );
}

export default TodoItem;
