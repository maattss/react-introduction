import { Typography } from '@equinor/eds-core-react';
import { User } from './User';

interface UserComponentProps {
  bestUser: User;
  secondUser?: User;
}

export function UserDisplay(props: UserComponentProps) {
  const { bestUser, secondUser } = props;

  return (
    <div style={{ margin: '16px', border: '2px dashed white', padding: '12px' }}>
      <Typography variant="h2" color="white">
        Best user name: {bestUser.name}, Age: {bestUser.age}
      </Typography>
      {secondUser && (
        <Typography variant="h2" color="white">
          Second user name: {secondUser.name}, Age: {secondUser.age}
        </Typography>
      )}
    </div>
  );
}
