import { filter } from 'lodash';
import PropTypes from 'prop-types';
import { Icon } from '@iconify/react';
import { Link as RouterLink } from 'react-router-dom';
import twitterFill from '@iconify/icons-eva/twitter-fill';
import linkedinFill from '@iconify/icons-eva/linkedin-fill';
import facebookFill from '@iconify/icons-eva/facebook-fill';
import moreVerticalFill from '@iconify/icons-eva/more-vertical-fill';
import instagramFilled from '@iconify/icons-ant-design/instagram-filled';
// material
import { experimentalStyled as styled } from '@material-ui/core/styles';
import {
  Box,
  Grid,
  Card,
  Link,
  Avatar,
  Tooltip,
  IconButton,
  Typography,
  OutlinedInput
} from '@material-ui/core';
//

// ----------------------------------------------------------------------

const SOCIALS = [
  {
    name: 'Facebook',
    icon: <Icon icon={facebookFill} width={20} height={20} color="#1877F2" />
  },
  {
    name: 'Instagram',
    icon: <Icon icon={instagramFilled} width={20} height={20} color="#D7336D" />
  },
  {
    name: 'Linkedin',
    icon: <Icon icon={linkedinFill} width={20} height={20} color="#006097" />
  },
  {
    name: 'Twitter',
    icon: <Icon icon={twitterFill} width={20} height={20} color="#1C9CEA" />
  }
];

const SearchStyle = styled(OutlinedInput)(({ theme }) => ({
  width: 240,
  marginBottom: theme.spacing(5),
  transition: theme.transitions.create(['box-shadow', 'width'], {
    easing: theme.transitions.easing.easeInOut,
    duration: theme.transitions.duration.shorter
  }),
  '&.Mui-focused': {
    width: 320,
    boxShadow: theme.customShadows.z8
  },
  '& fieldset': {
    borderWidth: `1px !important`,
    borderColor: `${theme.palette.grey[500_32]} !important`
  }
}));

// ----------------------------------------------------------------------

function applyFilter(array, query) {
  let arr = array;
  if (query) {
    arr = filter(
      array,
      (_friend) =>
        _friend.name.toLowerCase().indexOf(query.toLowerCase()) !== -1
    );
  }
  return arr;
}

DetailCard.propTypes = {
  detail: PropTypes.object
};

function DetailCard({ detail }) {
  const { name, role, avatarUrl } = detail;
  return (
    <Card
      sx={{
        py: 5,
        display: 'flex',
        position: 'relative',
        alignItems: 'center',
        flexDirection: 'column'
      }}
    >
      <Avatar
        alt={name}
        src={avatarUrl}
        sx={{ width: 64, height: 64, mb: 3 }}
      />
      <Link
        to="#"
        variant="h4"
        textAlign="center"
        color="text.primary"
        component={RouterLink}
      >
        {name}
      </Link>
      <Typography
        textAlign="center"
        variant="body2"
        sx={{ color: 'text.secondary' }}
      >
        {role}
      </Typography>
      <Box sx={{ display: 'flex', mt: 1 }}>
        {SOCIALS.map((social) => (
          <Tooltip key={social.name} title={social.name}>
            <IconButton>{social.icon}</IconButton>
          </Tooltip>
        ))}
      </Box>
      <IconButton
        sx={{
          top: 8,
          right: 8,
          position: 'absolute'
        }}
      >
        <Icon icon={moreVerticalFill} width={20} height={20} />
      </IconButton>
    </Card>
  );
}

ProductDetails.propTypes = {
  benefits: PropTypes.array,
  findFriends: PropTypes.string,
  sx: PropTypes.object
};

export default function ProductDetails({ benefits, findFriends, sx }) {
  const friendFiltered = applyFilter(benefits, findFriends);
  console.log(benefits);
  return (
    <Box sx={{ mt: 5, ...sx }}>
      <Typography variant="h4" sx={{ mb: 3 }}>
        Benefits
      </Typography>

      <Grid container spacing={3}>
        {friendFiltered.map((friend) => (
          <Grid key={friend.id} item xs={12} md={4}>
            <DetailCard detail={friend} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
