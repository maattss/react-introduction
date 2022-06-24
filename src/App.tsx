import './App.css';
import { useState, useEffect } from 'react';
import { User } from './components/UserDisplay/User';
import { UserDisplay } from './components/UserDisplay/UserDisplay';
import { Counter } from './components/Counter/Counter';
import { Typography } from '@equinor/eds-core-react';
import { FetchSomeData } from './components/FetchSomeData/FetchSomeData';

function App() {
  const [user, _] = useState<User>({ name: 'Mats', age: 28 });

  let someData: string | undefined;

  useEffect(() => {
    // Do async call
    someData = 'async call answer';
  }, []);

  useEffect(() => {
    // Do a lot of stuff when someData changes
  }, [someData]);

  return (
    <div className="App-header">
      <Typography variant="h1" color="white">
        React introduction
      </Typography>
      <Counter />
      <UserDisplay bestUser={user} />
      <Typography variant="h2" color="white">
        Fetched data
      </Typography>
      <FetchSomeData />
    </div>
  );
}

export default App;
