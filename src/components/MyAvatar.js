// hooks
import useAuth from '../hooks/useAuth';
//
import { MAvatar } from './@material-extend';
import createAvatar from '../utils/createAvatar';

// ----------------------------------------------------------------------

export default function MyAvatar({ src, ...other }) {
  const { user } = useAuth();

  return (
    <MAvatar
      src={src || user.photoURL}
      alt={user.displayName}
      color={user.photoURL ? 'default' : createAvatar(user.displayName).color}
      {...other}
    >
      {createAvatar(user.displayName).name}
    </MAvatar>
  );
}
