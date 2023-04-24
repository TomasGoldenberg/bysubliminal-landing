// material
import {
  alpha,
  useTheme,
  experimentalStyled as styled
} from '@material-ui/core/styles';
import {
  Box,
  Grid,
  Card,
  Container,
  Typography,
  useMediaQuery
} from '@material-ui/core';
//
import { varFadeInUp, MotionInView, varFadeInDown } from '../animate';
import { ServiceCard } from './index';

// ----------------------------------------------------------------------

const shadowIcon = (color) => `drop-shadow(2px 2px 2px ${alpha(color, 0.48)})`;

const RootStyle = styled('div')(({ theme }) => ({
  paddingTop: theme.spacing(15),
  [theme.breakpoints.up('md')]: {
    paddingBottom: theme.spacing(15)
  }
}));

const CardStyle = styled(Card)(({ theme }) => {
  const shadowCard = (opacity) => alpha(theme.palette.common.black, opacity);

  return {
    // maxWidth: 380,
    minHeight: 580,
    margin: 'auto',
    textAlign: 'center',
    padding: theme.spacing(10, 5, 0),
    boxShadow: `-40px 40px 80px 0 ${shadowCard(0.48)}`,
    [theme.breakpoints.up('md')]: {
      backgroundColor:
        theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800]
    },
    '&.cardLeft': {
      [theme.breakpoints.up('md')]: { marginTop: -40 }
    },
    '&.cardCenter': {
      [theme.breakpoints.up('md')]: {
        marginTop: -80,
        backgroundColor: theme.palette.background.paper,
        boxShadow: `-40px 40px 80px 0 ${shadowCard(0.4)}`,
        '&:before': {
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: -1,
          content: "''",
          margin: 'auto',
          position: 'absolute',
          width: 'calc(100% - 40px)',
          height: 'calc(100% - 40px)',
          borderRadius: theme.shape.borderRadiusMd,
          backgroundColor: theme.palette.background.paper,
          boxShadow: `-20px 20px 40px 0 ${shadowCard(0.12)}`
        }
      }
    }
  };
});

const CardIconStyle = styled('img')(({ theme }) => ({
  width: 70,
  height: 70,
  margin: 'auto',
  marginBottom: theme.spacing(10),
  filter: shadowIcon(theme.palette.primary.main)
}));

// ----------------------------------------------------------------------

export default function CategoryCard({ category }) {
  const theme = useTheme();

  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'));

  return (
    <RootStyle>
      <Container maxWidth="lg">
        <Box sx={{ mb: { xs: 10, md: 25 } }}>
          <MotionInView variants={varFadeInUp}>
            <Typography
              gutterBottom
              variant="overline"
              align="center"
              sx={{ color: 'text.secondary', display: 'block' }}
            >
              BySubliminal
            </Typography>
          </MotionInView>
          <MotionInView variants={varFadeInDown}>
            <Typography variant="h2" align="center">
              Why companies work with{' '}
              <Typography
                variant="h2"
                sx={{ color: category.color || 'primary.main' }}
              >
                BySubliminal
              </Typography>
            </Typography>
          </MotionInView>
          <div
            style={{ display: 'flex', justifyContent: 'center', width: '100%' }}
          >
            <div
              style={{
                width: '10px',
                height: '200px',
                background: category.color
              }}
            />
          </div>
        </Box>

        <Grid container spacing={isDesktop ? 11 : 5}>
          <Grid item xs={12}>
            <MotionInView variants={varFadeInUp}>
              <CardStyle sx={{ width: '100%' }}>
                <CardIconStyle
                  src={category.icon}
                  alt={category.title}
                  sx={{
                    filter: (theme) => shadowIcon(theme.palette.info.main)
                  }}
                />
                <Typography variant="h5" paragraph>
                  {category.title}
                </Typography>
                <Typography sx={{ color: 'text.secondary' }}>
                  {category.description}
                  {category.description}
                  {category.description}
                </Typography>
              </CardStyle>
            </MotionInView>
          </Grid>
        </Grid>

        <Grid container spacing={isDesktop ? 10 : 5}>
          <Grid
            item
            xs={12}
            sx={{
              display: 'flex',
              justifyContent: 'space-evenly',
              marginTop: '-152px'
            }}
          >
            {category.products.map((product) => (
              <ServiceCard
                categoryId={category.id}
                key={product.name}
                product={product}
              />
            ))}
          </Grid>
        </Grid>
      </Container>
    </RootStyle>
  );
}
