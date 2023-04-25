import { Icon } from '@iconify/react';
import { capitalCase } from 'change-case';
import { useEffect, useState } from 'react';
import heartFill from '@iconify/icons-eva/heart-fill';
import { useDispatch, useSelector } from 'react-redux';
import peopleFill from '@iconify/icons-eva/people-fill';
import roundPermMedia from '@iconify/icons-ic/round-perm-media';
import roundAccountBox from '@iconify/icons-ic/round-account-box';
// material
import { experimentalStyled as styled } from '@material-ui/core/styles';
import { Tab, Box, Card, Tabs, Container } from '@material-ui/core';
// redux
import {
  getPosts,
  getGallery,
  getFriends,
  getProfile,
  getFollowers,
  onToggleFollow
} from '../redux/slices/user';
// routes
import { PATH_DASHBOARD } from '../routes/paths';
// hooks
import useAuth from '../hooks/useAuth';
// components
import Page from '../components/Page';
import HeaderDashboard from '../components/HeaderDashboard';

import ProductInfo from '../components/services/product/ProductInfo';
import ProductDetails from '../components/services/product/ProductDetails';
import ProductExamples from '../components/services/product/ProductExamples';
import ProductCover from '../components/services/product/ProductCover';

// ----------------------------------------------------------------------

const PRODUCTS = {
  'frontend-development': {
    id: 'frontent-development',
    title: 'Frontend Development',
    subtitle: 'Test Driven Development',
    cover: '/static/mock-images/covers/cover_1.jpg',
    avatar: 'https://i.ibb.co/bFbQ3Mt/Logo-transparent-11-Artboard-9.png',
    about: {
      quote: 'algo',
      country: 'algo',
      email: 'algo',
      role: 'algo',
      company: 'algo',
      school: 'algo',
      description:
        '  aca va la continuacion del texto de la card grande de la seccion anterior, aca va la continuacion del texto de la card grande de la seccion anterior,aca va la continuacion del texto de la card grande de la seccion anterior,aca va la continuacion del texto de la card grande de la seccion anterior,aca va la continuacion del texto de la card grande de la seccion anterior,aca va la continuacion del texto de la card grande de la seccion anterior'
    },
    benefits: [
      {
        avatarUrl: '/static/mock-images/avatars/avatar_2.jpg',
        id: 'fc68bad5-d430-4033-b8f8-4bc069dc0ba0-2',
        name: 'Clean interfaces increase convertion',
        role:
          'This is because a psicological fact that make us take decitions having detailes info'
      },
      {
        avatarUrl: '/static/mock-images/avatars/avatar_3.jpg',
        id: 'fc68bad5-d430-4033-b8f8-4bc069dc0ba0-3',
        name: 'Clean interfaces increase convertion',
        role:
          'This is because a psicological fact that make us take decitions having detailes info'
      },
      {
        avatarUrl: '/static/mock-images/avatars/avatar_4.jpg',
        id: 'fc68bad5-d430-4033-b8f8-4bc069dc0ba0-4',
        name: 'Clean interfaces increase convertion',
        role:
          'This is because a psicological fact that make us take decitions having detailes info'
      },
      {
        avatarUrl: '/static/mock-images/avatars/avatar_2.jpg',
        id: 'fc68bad5-d430-4033-b8f8-4bc069dc0ba0-5',
        name: 'Clean interfaces increase convertion',
        role:
          'This is because a psicological fact that make us take decitions having detailes info'
      },
      {
        avatarUrl: '/static/mock-images/avatars/avatar_2.jpg',
        id: 'fc68bad5-d430-4033-b8f8-4bc069dc0ba0-6',
        name: 'Clean interfaces increase convertion',
        role:
          'This is because a psicological fact that make us take decitions having detailes info'
      },
      {
        avatarUrl: '/static/mock-images/avatars/avatar_2.jpg',
        id: 'fc68bad5-d430-4033-b8f8-4bc069dc0ba0-7',
        name: 'Clean interfaces increase convertion',
        role:
          'This is because a psicological fact that make us take decitions having detailes info'
      }
    ],
    examples: [
      {
        id: 'fc68bad5-d430-4033-b8f8-4bc069dc0ba0-3',
        imageUrl: '/static/mock-images/covers/cover_3.jpg',
        postAt: '2022-08-24T19:59:25.307Z',
        title: 'Principal Metrics Facilitator'
      },
      {
        id: 'fc68bad5-d430-4033-b8f8-4bc069dc0ba0-4',
        imageUrl: '/static/mock-images/covers/cover_4.jpg',
        postAt: '2022-08-24T19:59:25.307Z',
        title: 'Principal Metrics Facilitator'
      },
      {
        id: 'fc68bad5-d430-4033-b8f8-4bc069dc0ba0-5',
        imageUrl: '/static/mock-images/covers/cover_5.jpg',
        postAt: '2022-08-24T19:59:25.307Z',
        title: 'Principal Metrics Facilitator'
      }
    ]
  }
};

const TabsWrapperStyle = styled('div')(({ theme }) => ({
  zIndex: 9,
  bottom: 0,
  width: '100%',
  display: 'flex',
  position: 'absolute',
  backgroundColor: theme.palette.background.paper,
  [theme.breakpoints.up('sm')]: {
    justifyContent: 'center'
  },
  [theme.breakpoints.up('md')]: {
    justifyContent: 'flex-end',
    paddingRight: theme.spacing(3)
  }
}));

// ----------------------------------------------------------------------

export default function UserProfile() {
  const dispatch = useDispatch();
  const { myProfile, posts, followers, friends, gallery } = useSelector(
    (state) => state.user
  );
  const { user } = useAuth();
  const [currentTab, setCurrentTab] = useState('profile');
  const [findFriends, setFindFriends] = useState('');

  useEffect(() => {
    dispatch(getProfile());
    dispatch(getPosts());
    dispatch(getFollowers());
    dispatch(getFriends());
    dispatch(getGallery());
  }, [dispatch]);

  const handleChangeTab = (event, newValue) => {
    setCurrentTab(newValue);
  };

  const handleFindFriends = (event) => {
    setFindFriends(event.target.value);
  };

  const PROFILE_TABS = [
    {
      value: 'profile',
      icon: <Icon icon={roundAccountBox} width={20} height={20} />,
      component: (
        <ProductInfo
          product={PRODUCTS['frontend-development'].about}
          posts={posts}
          authUser={user}
        />
      )
    },

    {
      value: 'benefits',
      icon: <Icon icon={peopleFill} width={20} height={20} />,
      component: (
        <ProductDetails
          benefits={PRODUCTS['frontend-development'].benefits}
          findFriends={findFriends}
          onFindFriends={handleFindFriends}
        />
      )
    },
    {
      value: 'examples',
      icon: <Icon icon={roundPermMedia} width={20} height={20} />,
      component: (
        <ProductExamples examples={PRODUCTS['frontend-development'].examples} />
      )
    }
  ];

  return (
    <Page title="Product Name | BySubliminal">
      <Container>
        <HeaderDashboard
          heading="Profile"
          links={[
            { name: 'Dashboard', href: PATH_DASHBOARD.root },
            { name: 'User', href: PATH_DASHBOARD.user.root },
            { name: 'Product name' }
          ]}
        />
        <Card
          sx={{
            mb: 3,
            height: 280,
            position: 'relative'
          }}
        >
          <ProductCover
            product={PRODUCTS['frontend-development']}
            authUser={user}
          />

          <TabsWrapperStyle>
            <Tabs
              value={currentTab}
              scrollButtons="auto"
              variant="scrollable"
              allowScrollButtonsMobile
              onChange={handleChangeTab}
            >
              {PROFILE_TABS.map((tab) => (
                <Tab
                  disableRipple
                  key={tab.value}
                  value={tab.value}
                  icon={tab.icon}
                  label={capitalCase(tab.value)}
                />
              ))}
            </Tabs>
          </TabsWrapperStyle>
        </Card>

        {PROFILE_TABS.map((tab) => {
          const isMatched = tab.value === currentTab;
          return isMatched && <Box key={tab.value}>{tab.component}</Box>;
        })}
      </Container>
    </Page>
  );
}
