import { useState } from 'react';

function FormularName() {
  const [nom, setNom] = useState('');

  function handChanges(event) {
    setNom(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    alert(`Le nom saisi est : ${nom}`);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Nom :
        <input type="text" value={nom} onChange={handChanges} />
      </label>
      <button type="submit">Soumettre</button>
    </form>
  );
}

export default FormularName;