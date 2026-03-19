import { useState } from 'react';

function MessageBotton() {
  const [message, setMessage] = useState('Cliquez sur le bouton');

  function changeMessage() {
    setMessage('Vous avez cliqué sur le bouton !');
  }

  return (
    <div>
      <p>{message}
</p>
      <button onClick={changeMessage}>Cliquer</button>
    </div>
  );
}

export default MessageBotton;