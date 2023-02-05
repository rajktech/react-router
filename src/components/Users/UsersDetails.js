import {useParams} from 'react-router-dom';

export const UsersDetails = () => {
  const {userId} = useParams ();
  return <div>This is user id {userId}</div>;
};
