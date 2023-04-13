// material
// Import the functions you need from the SDKs you need
import firebase from 'firebase/app';
import { experimentalStyled as styled } from '@material-ui/core/styles';
// components
import Page from '../components/Page';
import {
  LandingHero,
  LandingFooter,
  LandingMinimal,
  LandingDarkMode,
  LandingAdvertisement,
  LandingCleanInterfaces,
  LandingHugePackElements,
  Contact,
  SoftwareDevelopmentLifeCicle
} from '../components/landing-page';
import { firebaseConfig } from '../config';

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
console.log(app);
// ----------------------------------------------------------------------

const RootStyle = styled(Page)({
  height: '100%'
});

const ContentStyle = styled('div')(({ theme }) => ({
  overflow: 'hidden',
  position: 'relative',
  backgroundColor: theme.palette.background.default
}));

// ----------------------------------------------------------------------

export default function LandingPage() {
  return (
    <RootStyle
      title="The starting point for your next project | BySubliminal"
      id="move_top"
    >
      <LandingHero />
      <ContentStyle>
        <LandingMinimal />
        <LandingHugePackElements />
        <LandingDarkMode />
        <LandingCleanInterfaces />
        <SoftwareDevelopmentLifeCicle />
        <LandingAdvertisement />
        <Contact />
        <LandingFooter />
      </ContentStyle>
    </RootStyle>
  );
}
