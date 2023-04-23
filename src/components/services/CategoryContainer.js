import { experimentalStyled as styled } from '@material-ui/core/styles';
import { CategoryCard } from './index';

const ContentStyle = styled('div')(({ theme }) => ({
  overflow: 'hidden',
  position: 'relative',
  backgroundColor: theme.palette.background.default
}));

// ----------------------------------------------------------------------

// nameserver 127.0.0.53 /etc/resolv.conf
export default function CategoryContainer({ CATEGORIES }) {
  return (
    <ContentStyle>
      <>
        {CATEGORIES.map((category) => {
          const key = category.name;
          return <CategoryCard key={key} category={category} />;
        })}
      </>
    </ContentStyle>
  );
}
