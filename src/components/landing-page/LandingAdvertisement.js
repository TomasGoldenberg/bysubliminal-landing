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

const ACCORDIONS = [
  {
    heading: `I need to develop an application, what's next?`,
    detail: `Why do you need this application? What are your business goals?
    What would you like to receive at the end? What is the outcome you expect?. If you can answer this 4 questions we suggest our Clients get in touch with us and get the initial analysis and estimation absolutely for free.`
  },
  {
    heading: `How much my application will cost?`,
    detail: `Software development costs may vary depending on many factors, to mention a couple of them:
 The size/scale of your buisiness (you need a simple platform or you need a extremly custom enterprise software), Your case of use needs out of the box innovation or we can build your solution with the known market standard tech stacks?.
 The truth is that each application idea is unique, and many factors will influence the cost of its implementation. But this section is meant to answer questions that's why we simplify this answer in:"The cost of the implementation will be charged by reasonable cost hours per sprint, seting the deliverables per spint with our clients twice a month. " `
  },

  {
    heading: `Your company needs to outsource a given module o service of an existing application?`,
    detail: `Yes, we also work with existing projects, not only creating new modules of a project but also providing mantainance services as well.`
  },
  {
    heading: `What happen after the application is done ?`,
    detail: `After testing, quality assurance, and deploying the project we also provide mantainance and third party libraries upgrade services too, We believe that long term result oriented relations with our clients are a key to achieve success.`
  }
];

// ----------------------------------------------------------------------

export default function LandingAdvertisement() {
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
