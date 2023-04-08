// material
import { experimentalStyled as styled } from '@material-ui/core/styles';
import { Button, Box, Container, Typography } from '@material-ui/core';
// routes
import { PATH_HOME } from '../../routes/paths';
//
import { varFadeInDown, varFadeInUp, MotionInView } from '../animate';
import Accordion from '../../views/uikit-components/accordion/Simple';
// ----------------------------------------------------------------------

const ContentStyle = styled('div')(({ theme }) => ({
  maxWidth: 456,
  margin: 'auto',
  overflow: 'hidden',
  paddingBottom: theme.spacing(10),
  borderRadius: theme.shape.borderRadiusMd,
  backgroundImage: `linear-gradient(135deg,
    ${theme.palette.primary.main} 0%,
    ${theme.palette.primary.dark} 100%)`,
  [theme.breakpoints.up('md')]: {
    display: 'flex',
    maxWidth: '100%',
    paddingBottom: 0,
    alignItems: 'center'
  }
}));

// ----------------------------------------------------------------------

export default function LandingAdvertisement() {
  const ACCORDIONS = [...Array(4)].map((_, index) => {
    const setIndex = index + 1;
    return {
      value: `panel${setIndex}`,
      heading: `Accordion${setIndex}`,
      subHeading: `subHeading${setIndex}`,
      detail: `detail${setIndex}`
    };
  });
  return (
    <Container maxWidth="lg">
      <MotionInView variants={varFadeInDown}>
        <Typography variant="h2">FAQ's</Typography>
      </MotionInView>
      <ContentStyle>
        <Box
          sx={{
            width: '100%',
            pl: { md: 10 },
            mt: { md: 10 },
            pr: { md: 10 },
            textAlign: { xs: 'center', md: 'left' }
          }}
        >
          <MotionInView
            variants={varFadeInDown}
            sx={{ color: 'common.white', mb: 5 }}
          >
            <Accordion accordions={ACCORDIONS} />
          </MotionInView>
        </Box>
      </ContentStyle>
    </Container>
  );
}
