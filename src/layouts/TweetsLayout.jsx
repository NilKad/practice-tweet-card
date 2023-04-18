import { Outlet } from 'react-router-dom';
import * as SC from './TweetsLayout.styled';

const TweetsLayout = () => {

  return (<>
    <SC.Wrapper>
      <SC.Header>
        <SC.HeaderContent>
          <nav>
            <SC.NavMenuLink to="/">Home</SC.NavMenuLink>
            <SC.NavMenuLink to="tweets">Tweets</SC.NavMenuLink>
          </nav>
        </SC.HeaderContent>
      </SC.Header>
      <SC.Main>
        <Outlet />
      </SC.Main>
    </SC.Wrapper>
  </>)
}

export default TweetsLayout