import { Button, Divider, Typography } from '@equinor/eds-core-react';
import { useState } from 'react';

export function Counter() {
  const [count, setCount] = useState(0);

  const chosenColor = count === 1 ? 'white' : 'yellow';
  return (
    <div style={{ margin: '16px', border: '2px dashed white', padding: '12px' }}>
      <Button onClick={() => setCount((count) => count + 1)}>Increment</Button>
      <Divider />
      <Typography style={{ color: chosenColor, textAlign: 'center' }}>
        Count is: {count}
      </Typography>
    </div>
  );
}
