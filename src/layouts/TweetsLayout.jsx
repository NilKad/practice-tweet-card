import { Outlet } from 'react-router-dom';
import * as SC from './TweetsLayout.styled';
import { Container, Section } from 'components/BaseStyles/CommonStyle.styled';

const TweetsLayout = () => {

  return (<>
    <SC.Wrapper>
      <SC.Header>
        <SC.HeaderContent>
          <nav>
            {/* auth welcome logout */}
            <SC.NavMenuLink to="/">Home</SC.NavMenuLink>
            <SC.NavMenuLink to="tweets">Tweets</SC.NavMenuLink>
          </nav>
        </SC.HeaderContent>
        {/* {isLoggedIn ? <AuthProfile /> : <AuthMenu />} */}
      </SC.Header>
      <SC.Main>
        <Outlet />
      </SC.Main>
    </SC.Wrapper>
  </>)
}

export default TweetsLayout