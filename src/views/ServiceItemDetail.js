import { experimentalStyled as styled } from '@material-ui/core/styles';
// components
import Page from '../components/Page';
import { CategoryContainer } from '../components/services';
/* import { firebaseConfig } from '../config';

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
console.log(app); */
// ----------------------------------------------------------------------

const RootStyle = styled(Page)({
  height: '100%'
});

// ----------------------------------------------------------------------
const SERVICE_DETAILS = {
  frontend: {}
};
// nameserver 127.0.0.53 /etc/resolv.conf
export default function ServicesView() {
  return (
    <RootStyle
      title="The starting point for your next project | BySubliminal"
      id="move_top"
    ></RootStyle>
  );
}
