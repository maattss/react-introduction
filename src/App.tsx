import { useState } from 'react';
import './App.css';
import { User } from './User';
import { UserComponent } from './UserComponent';

export function App() {
  const [count, setCount] = useState(0);
  const [user, setUser] = useState<User>({ name: 'Mats', age: 28 });

  return (
    <div className="App">
      <header className="App-header">
        <p>
          <button type="button" onClick={() => setCount((count) => count + 1)}>
            count is: {count}
          </button>
        </p>
        <UserComponent bestUser={user} />
      </header>
    </div>
  );
}
