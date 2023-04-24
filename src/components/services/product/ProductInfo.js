import PropTypes from 'prop-types';
// material
import {
  Grid,
  Box,
  Link,
  Card,
  Typography,
  CardHeader,
  CardContent
} from '@material-ui/core';
//
import ProductAbout from './ProductAbout';

// ----------------------------------------------------------------------

ProductInfo.propTypes = {
  product: PropTypes.object
};

export default function ProductInfo({ product }) {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={4}>
        <ProductAbout product={product} />
      </Grid>

      <Grid item xs={12} md={8}>
        <Card sx={{ mb: 3 }}>
          <CardHeader title="About" />

          <CardContent>
            <Typography variant="body2">
              aca va la continuacion del texto de la card grande de la seccion
              anterior aca va la continuacion del texto de la card grande de la
              seccion anterior aca va la continuacion del texto de la card
              grande de la seccion anterior aca va la continuacion del texto de
              la card grande de la seccion anterior aca va la continuacion del
              texto de la card grande de la seccion anterior aca va la
              continuacion del texto de la card grande de la seccion anterior{' '}
              aca va la continuacion del texto de la card grande de la seccion
              anterior aca va la continuacion del texto de la card grande de la
              seccion anterior{' '}
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}
