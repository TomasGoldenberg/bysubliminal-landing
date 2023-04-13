// material
import { Box } from '@material-ui/core';

// ----------------------------------------------------------------------

export default function Logo({ ...other }) {
  return (
    <Box
      component="img"
      alt="logo"
      src="https://i.ibb.co/bFbQ3Mt/Logo-transparent-11-Artboard-9.png"
      height={70}
      {...other}
    />
  );
}
