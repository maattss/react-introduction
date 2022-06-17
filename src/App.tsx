import './App.css';
import { Button, Typography } from '@equinor/eds-core-react';
import { useState, useEffect } from 'react';
import { User } from './User';
import { UserComponent } from './UserComponent';

function App() {
  const [count, setCount] = useState(0);
  const [user, setUser] = useState<User>({ name: 'Mats', age: 28 });

  let someData;

  useEffect(() => {
    // Do async call
    someData = 'async call answer';
  }, []);

  useEffect(() => {
    // Do a lot of stuff when someData changes
  }, [someData]);

  const chosenColor = count === 1 ? 'white' : 'yellow';

  return (
    <div className="App">
      <header className="App-header">
        <Button onClick={() => setCount((count) => count + 1)}>Increment</Button>

        <Typography style={{ color: chosenColor }}>Count is: {count}</Typography>
        <UserComponent bestUser={user} />
      </header>
    </div>
  );
}

export default App;
