import { findIndex } from 'lodash';
import PropTypes from 'prop-types';
import { Icon } from '@iconify/react';
import { useState } from 'react';
import moreVerticalFill from '@iconify/icons-eva/more-vertical-fill';
// material
import { alpha, experimentalStyled as styled } from '@material-ui/core/styles';
import {
  Box,
  Grid,
  Card,
  IconButton,
  Typography,
  CardContent
} from '@material-ui/core';
// utils
import { fDate } from '../../../utils/formatTime';
import LightboxModal from '../../LightboxModal';

// ----------------------------------------------------------------------

const CaptionStyle = styled(CardContent)(({ theme }) => ({
  bottom: 0,
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  position: 'absolute',
  backdropFilter: 'blur(3px)',
  WebkitBackdropFilter: 'blur(3px)', // Fix on Mobile
  justifyContent: 'space-between',
  color: theme.palette.common.white,
  backgroundColor: alpha(theme.palette.grey[900], 0.72),
  borderBottomLeftRadius: theme.shape.borderRadiusMd,
  borderBottomRightRadius: theme.shape.borderRadiusMd
}));

const GalleryImgStyle = styled('img')({
  top: 0,
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  position: 'absolute'
});

// ----------------------------------------------------------------------

GalleryItem.propTypes = {
  image: PropTypes.object,
  onOpenLightbox: PropTypes.func
};

function GalleryItem({ image, onOpenLightbox }) {
  const { imageUrl, title, postAt } = image;
  return (
    <Card sx={{ position: 'relative', paddingTop: '100%', overflow: 'hidden' }}>
      <GalleryImgStyle
        alt="gallery image"
        src={imageUrl}
        onClick={() => onOpenLightbox(imageUrl)}
      />

      <CaptionStyle>
        <div>
          <Typography variant="subtitle1">{title}</Typography>
          <Typography variant="body2" sx={{ opacity: 0.72 }}>
            {fDate(postAt)}
          </Typography>
        </div>
        <IconButton color="inherit">
          <Icon icon={moreVerticalFill} width={20} height={20} />
        </IconButton>
      </CaptionStyle>
    </Card>
  );
}

ProductExamples.propTypes = {
  examples: PropTypes.array.isRequired,
  sx: PropTypes.object
};

export default function ProductExamples({ examples, sx }) {
  const [openLightbox, setOpenLightbox] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const imagesLightbox = examples.map((img) => img.imageUrl);

  const handleOpenLightbox = (url) => {
    const selectedImage = findIndex(imagesLightbox, (index) => index === url);
    setOpenLightbox(true);
    setSelectedImage(selectedImage);
  };
  console.log(examples);
  return (
    <Box sx={{ mt: 5, ...sx }}>
      <Typography variant="h4" sx={{ mb: 3 }}>
        Examples
      </Typography>

      <Card>
        <CardContent>
          <Grid container spacing={3}>
            {examples.map((image) => (
              <Grid key={image.id} item xs={12} sm={6} md={4}>
                <GalleryItem
                  image={image}
                  onOpenLightbox={handleOpenLightbox}
                />
              </Grid>
            ))}
          </Grid>

          <LightboxModal
            images={imagesLightbox}
            photoIndex={selectedImage}
            setPhotoIndex={setSelectedImage}
            isOpen={openLightbox}
            onClose={() => setOpenLightbox(false)}
          />
        </CardContent>
      </Card>
    </Box>
  );
}
