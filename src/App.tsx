import { useState } from 'react';
import './App.css';
import { User } from './User';
import { UserComponent } from './UserComponent';

function App() {
  const [count, setCount] = useState(0);
  const [user, setUser] = useState<User>({ name: 'Mats', age: 28 });

  return (
    <div className="App">
      <header className="App-header">
        <button type="button" onClick={() => setCount((count) => count + 1)}>
          Increment
        </button>
        <p style={{ marginBottom: 0 }}>Count is: {count}</p>
        <UserComponent bestUser={user} />
      </header>
    </div>
  );
}

export default App;
