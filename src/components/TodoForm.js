import { useState } from 'react';
import './TodoForm.css';

function TodoForm({ ajouterTache }) {
  const [texte, setTexte] = useState('');

  const soumettreFormulaire = (e) => {
    e.preventDefault();
    if (texte.trim() === '') return;
    ajouterTache(texte);
    setTexte('');
  };

  return (
    <form onSubmit={soumettreFormulaire} className="todo-form animate-fade-in">
      <div className="input-container">
        <input
          value={texte}
          onChange={(e) => setTexte(e.target.value)}
          placeholder="✏️ Quelle est votre prochaine tâche ?"
          className="todo-input"
          required
          maxLength={100}
        />
        <div className="input-border"></div>
      </div>
      <button type="submit" className="todo-button">
        <span className="button-text">Ajouter</span>
        <span className="button-icon">➕</span>
      </button>
    </form>
  );
}

export default TodoForm;
