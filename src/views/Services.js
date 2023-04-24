import { experimentalStyled as styled } from '@material-ui/core/styles';
// components
import Page from '../components/Page';
import { CategoryContainer } from '../components/services';
/* import { firebaseConfig } from '../config';

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
console.log(app); */
// ----------------------------------------------------------------------

const RootStyle = styled(Page)({
  height: '100%'
});

// ----------------------------------------------------------------------
const CATEGORIES = [
  {
    color: 'green',
    id: 'ai-tools',
    icon: 'https://i.ibb.co/bFbQ3Mt/Logo-transparent-11-Artboard-9.png',
    title: 'AI SaaS Tools',
    description:
      'We develop AI Powered SaaS Products to improve your buisiness capabilities.',
    products: [
      {
        id: 'ai-product-1',
        name: 'AI SaaS Product',
        cover: 'https://i.ibb.co/bFbQ3Mt/Logo-transparent-11-Artboard-9.png'
      },
      {
        id: 'ai-product-2',
        name: 'AI SaaS Product',
        cover: 'https://i.ibb.co/bFbQ3Mt/Logo-transparent-11-Artboard-9.png'
      },
      {
        id: 'ai-product-3',
        name: 'AI SaaS Product',
        cover: 'https://i.ibb.co/bFbQ3Mt/Logo-transparent-11-Artboard-9.png'
      },
      {
        id: 'ai-product-4',
        name: 'AI SaaS Product',
        cover: 'https://i.ibb.co/bFbQ3Mt/Logo-transparent-11-Artboard-9.png'
      }
    ]
  },
  {
    color: 'red',
    id: 'development',

    icon: '/static/icons/ic_code.svg',
    title: 'Web & Mobile Development',
    description:
      'We deliver Scalable and Reliable software solutions through high-quality and tested code.',
    products: [
      {
        id: 'web-product-1',
        name: 'Development Product',
        cover: '/static/icons/ic_code.svg'
      },
      {
        id: 'web-product-2',
        name: 'Development Product',
        cover: '/static/icons/ic_code.svg'
      },
      {
        id: 'web-product-3',
        name: 'Development Product',
        cover: '/static/icons/ic_code.svg'
      },
      {
        id: 'web-product-4',
        name: 'Development Product',
        cover: '/static/icons/ic_code.svg'
      }
    ]
  },
  {
    color: 'blue',
    id: 'design',

    icon: '/static/icons/ic_design.svg',
    title: 'Product Design & Branding',
    description: 'We help you create the best version of your brand.',
    products: [
      {
        id: 'design-product-1',
        name: 'Development Product',
        cover: '/static/icons/ic_design.svg'
      },
      {
        id: 'design-product-2',
        name: 'Development Product',
        cover: '/static/icons/ic_design.svg'
      },
      {
        id: 'design-product-3',
        name: 'Development Product',
        cover: '/static/icons/ic_design.svg'
      },
      {
        id: 'design-product-4',
        name: 'Development Product',
        cover: '/static/icons/ic_design.svg'
      }
    ]
  }
];
// nameserver 127.0.0.53 /etc/resolv.conf
export default function ServicesView() {
  return (
    <RootStyle
      title="The starting point for your next project | BySubliminal"
      id="move_top"
    >
      <CategoryContainer CATEGORIES={CATEGORIES} />
    </RootStyle>
  );
}
