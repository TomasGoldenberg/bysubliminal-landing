import {
  experimentalStyled as styled,
  useTheme
} from '@material-ui/core/styles';
import {
  Box,
  Container,
  Typography,
  Chip,
  useMediaQuery
} from '@material-ui/core';
//
import FaceIcon from '@material-ui/icons/Face';
import PsychologyIcon from '@material-ui/icons//Psychology';
import EngineeringIcon from '@material-ui/icons//Engineering';
import CloudDoneIcon from '@material-ui/icons//CloudDone';
import BugReportIcon from '@material-ui/icons//BugReport';
import CodeIcon from '@material-ui/icons//Code';
import GridViewIcon from '@material-ui/icons//GridView';
import { varFadeInUp, MotionInView } from '../animate';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  paddingTop: theme.spacing(15),
  paddingBottom: theme.spacing(10)
}));

const ContentStyle = styled('div')(({ theme }) => ({
  width: '100%',
  margin: 'auto',
  textAlign: 'center',
  [theme.breakpoints.up('md')]: {
    textAlign: 'left',
    position: 'absolute'
  }
}));

const STEPS = [
  {
    icon: EngineeringIcon,
    label: 'Mantainance',
    step: 6,
    marginLeft: 4
  },
  {
    icon: PsychologyIcon,
    label: 'Analysis',
    step: 1,
    margin: 2
  },
  {
    icon: CloudDoneIcon,
    label: 'Release',
    step: 5,
    marginLeft: 0
  },
  {
    icon: GridViewIcon,
    label: 'Design',
    step: 2,
    margin: 11
  },
  {
    icon: BugReportIcon,
    label: 'Testing',
    step: 4,
    marginLeft: 4
  },
  {
    icon: CodeIcon,
    label: 'Development',
    step: 3,
    margin: 2
  }
];

// ----------------------------------------------------------------------

export default function SoftwareDevelopmentLifeCycle() {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'));
  const device = isDesktop ? 'desktop' : 'mobile';

  function sortSteps(a, b) {
    if (a.step < b.step) {
      return -1;
    }
    if (a.step > b.step) {
      return 1;
    }
    return 0;
  }
  const renderSteps = (device, position) => {
    if (
      (device === 'desktop' && position === 'bottom') ||
      (device === 'mobile' && position === 'top')
    ) {
      return <></>;
    }
    const stepsJsx = {
      desktop: (
        <MotionInView
          style={{
            display: 'flex',
            justifyContent: 'flex-start',
            flexWrap: 'wrap'
          }}
          variants={varFadeInUp}
        >
          {STEPS.map((step, i) => {
            const Icon = step.icon || FaceIcon;
            return (
              <Box
                key={step.label}
                sx={
                  i % 2 === 0
                    ? { mr: '35%', ml: `${step.marginLeft}%` }
                    : { ml: `${step.margin}%` }
                }
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  marginTop: '5%',
                  marginBottom: '5%',
                  textAlign: 'center'
                }}
              >
                <Typography
                  gutterBottom
                  variant="overline"
                  sx={{ color: 'text.secondary', width: '200px' }}
                >
                  Step {step.step}
                </Typography>
                <Chip
                  style={{
                    width: '200px',
                    fontSize: '20px'
                  }}
                  icon={<Icon />}
                  label={step.label}
                  color="primary"
                  variant="outlined"
                />
              </Box>
            );
          })}
        </MotionInView>
      ),
      mobile: (
        <MotionInView
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column'
          }}
          variants={varFadeInUp}
        >
          {Array.from(STEPS)
            .sort(sortSteps)
            .map((step) => {
              const Icon = step.icon || FaceIcon;

              return (
                <Box
                  key={step.label}
                  sx={{
                    mt: 3,
                    display: 'flex',
                    justifyContent: 'center'
                  }}
                >
                  <Typography
                    gutterBottom
                    variant="overline"
                    sx={{ color: 'text.secondary', width: '200px' }}
                  >
                    Step {step.step}
                  </Typography>
                  <Chip
                    style={{
                      width: '200px',
                      fontSize: '20px'
                    }}
                    icon={<Icon />}
                    label={step.label}
                    color="primary"
                    variant="outlined"
                  />
                </Box>
              );
            })}
        </MotionInView>
      )
    };
    return stepsJsx[device];
  };

  return (
    <RootStyle>
      <Container maxWidth="lg">
        <ContentStyle>
          <MotionInView variants={varFadeInUp}>
            <Typography
              gutterBottom
              variant="overline"
              sx={{
                color: 'text.secondary',
                display: 'block',
                mb: isDesktop ? '-70px' : '0px'
              }}
            >
              process transparency
            </Typography>
          </MotionInView>
          {renderSteps(device, 'top')}
        </ContentStyle>

        <MotionInView variants={varFadeInUp}>
          <Box
            component="img"
            alt="multipage"
            src="https://i.ibb.co/w67VFJW/Instagram-post-12-Artboard-10.png"
            sx={{ m: 'auto' }}
          />
          {renderSteps(device, 'bottom')}
        </MotionInView>
      </Container>
    </RootStyle>
  );
}
