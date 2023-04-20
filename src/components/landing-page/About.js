import { Link as RouterLink } from 'react-router-dom';
// material
import {
  alpha,
  useTheme,
  experimentalStyled as styled
} from '@material-ui/core/styles';
import {
  Box,
  Grid,
  Button,
  Container,
  Typography,
  useMediaQuery
} from '@material-ui/core';
// routes
import { PATH_HOME } from '../../routes/paths';
//
import { varFadeInUp, MotionInView, varFadeInRight } from '../animate';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  padding: theme.spacing(15, 0),
  marginTop: '80px',
  backgroundImage:
    theme.palette.mode === 'light'
      ? `linear-gradient(180deg, ${alpha(theme.palette.grey[300], 0)} 0%, ${
          theme.palette.grey[300]
        } 100%)`
      : 'none'
}));

const ContentStyle = styled('div')(({ theme }) => ({
  maxWidth: 520,
  margin: 'auto',
  textAlign: 'center',
  marginBottom: theme.spacing(10),
  [theme.breakpoints.up('md')]: {
    height: '100%',
    marginBottom: 0,
    textAlign: 'left',
    display: 'inline-flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
    paddingRight: theme.spacing(5)
  }
}));

const ScreenStyle = styled(MotionInView)({
  bottom: 0,
  maxWidth: 460,
  position: 'absolute'
});

const variantScreenLeftMoblie = {
  initial: { x: '22%', y: -10, opacity: 0 },
  animate: { x: 0, y: 0, opacity: 1 }
};
const variantScreenRightMobile = {
  initial: { x: '26%', y: -30, opacity: 0 },
  animate: { x: '48%', y: -40, opacity: 1 }
};
const variantScreenLeft = {
  initial: { x: '30%', y: -30, opacity: 0 },
  animate: { x: 0, y: 0, opacity: 1 }
};
const variantScreenCenter = {
  initial: { opacity: 0 },
  animate: { opacity: 1 }
};
const variantScreenRight = {
  initial: { x: '34%', y: -50, opacity: 0 },
  animate: { x: '64%', y: -80, opacity: 1 }
};

// ----------------------------------------------------------------------

export default function LandingHugePackElements() {
  const theme = useTheme();
  const isLight = theme.palette.mode === 'light';
  const isRTL = theme.direction === 'rtl';
  const upSm = useMediaQuery(theme.breakpoints.up('sm'));
  const upMd = useMediaQuery(theme.breakpoints.up('md'));

  const textAnimate = upMd ? varFadeInRight : varFadeInUp;
  const screenLeftAnimate = upSm ? variantScreenLeft : variantScreenLeftMoblie;
  const screenCenterAnimate = variantScreenCenter;
  const screenRightAnimate = upSm
    ? variantScreenRight
    : variantScreenRightMobile;

  return (
    <RootStyle>
      <Container maxWidth="lg">
        <Grid container spacing={5}>
          <Grid item xs={12} md={4} lg={5}>
            <ContentStyle>
              <MotionInView variants={textAnimate}>
                <Typography
                  gutterBottom
                  variant="overline"
                  sx={{ color: 'text.secondary', display: 'block' }}
                >
                  Best IT Partner
                </Typography>
              </MotionInView>

              <MotionInView variants={textAnimate}>
                <Typography variant="h4" paragraph>
                  BySubliminal is a technical partner for building web-based and
                  mobile app products. Should they be scaled-up or developed
                  from scratch - we will handle it.
                </Typography>
              </MotionInView>

              <MotionInView variants={textAnimate}>
                <Typography sx={{ color: 'text.secondary' }}>
                  At Subliminal, we are passionate about delivering high-quality
                  software and SaaS solutions to businesses of all industries.
                  Our experienced team of developers takes a personalized
                  approach to each project, working closely with clients to
                  understand their unique needs and develop solutions that meet
                  those needs
                </Typography>
              </MotionInView>
            </ContentStyle>
          </Grid>

          <Grid
            dir="ltr"
            item
            xs={12}
            md={8}
            lg={7}
            sx={{
              position: 'relative',
              pl: { sm: '16% !important', md: '0 !important' }
            }}
          >
            {[...Array(3)].map((_, index) => (
              <ScreenStyle
                key={index}
                threshold={0.72}
                variants={{
                  ...(index === 0 && screenLeftAnimate),
                  ...(index === 1 && screenCenterAnimate),
                  ...(index === 2 && screenRightAnimate)
                }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
                sx={{
                  ...(index === 0 && { zIndex: 3 }),
                  ...(index === 2 && { zIndex: 1 }),
                  ...(index === 1 && {
                    position: 'relative',
                    zIndex: 2,
                    bottom: { xs: 20, sm: 40 },
                    transform: {
                      xs: isRTL ? 'translateX(-24%)' : 'translateX(24%)',
                      sm: isRTL ? 'translateX(-32%)' : 'translateX(32%)'
                    }
                  })
                }}
              >
                <Box
                  component="img"
                  alt={`screen ${index + 1}`}
                  src={`https://images.unsplash.com/photo-1570126618953-d437176e8c79?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=794&q=80'}_${
                    index + 1
                  }.png`}
                  sx={{ width: { xs: '80%', sm: '100%' } }}
                />
              </ScreenStyle>
            ))}
          </Grid>
        </Grid>
      </Container>
    </RootStyle>
  );
}
