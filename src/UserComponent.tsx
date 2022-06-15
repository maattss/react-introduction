import { User } from './User';

interface UserComponentProps {
  bestUser: User;
  secondUser?: User;
}

export function UserComponent(props: UserComponentProps) {
  const { bestUser, secondUser } = props;

  return (
    <p>
      {bestUser.name} Age: {bestUser.age}
    </p>
  );
}
