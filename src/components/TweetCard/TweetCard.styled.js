import styled from 'styled-components';
import { baseColor } from 'components/BaseStyles/Variables.styled';

export const Card = styled.div`
  width: 380px;
  height: 460px;
  margin: 0 auto;
  /* margin-bottom: 16px; */
  /* padding: 20px 20px 36px 20px; */

  border-radius: 20px;

  font-size: 20px;
  line-height: 1.2;
  color: ${baseColor.colors.textColor};
  background: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );
  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
`;

export const Top = styled.div`
  /* position: relative; */
  height: 214px;
  padding: 20px 20px 18px;
`;

export const Logo = styled.img``;

export const HeadImage = styled.div`
  /* margin-top: 8px; */
  /* position: absolute; */
  margin-top: -8px;
  /* margin-left: auto; */
  /* margin-right: auto; */
`;
export const HeadImg = styled.img`
  margin-top: -10px;
  margin-left: auto;
  margin-right: auto;
`;

export const Middle = styled.div`
  position: relative;

  ::before {
    display: block;
    content: '';
    /* background-color: red; */
    height: 8px;
    /* width: 100%; */
    background: #ebd8ff;
    box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),
      inset 0px -1.71846px 3.43693px #ae7be3,
      inset 0px 3.43693px 2.5777px #fbf8ff;
  }
`;

export const Avatar = styled.div`
  display: flex;
  justify-content: center;
  /* align-items: center; */
  /* position: relative; */
  position: absolute;
  top: -35px;
  left: 50%;
  transform: translate(-50%, 0);
  /* margin: 0 auto; */

  width: 90px;
  /* height: 80px; */
  border-radius: 50%;
  border-width: 9px;
  text-transform: uppercase;
`;

export const AvatarWrapper = styled.img`
  /* position: absolute; */
  /* top: -40px; */
`;

export const AvatarImg = styled.img`
  position: absolute;
  top: 9px;
  /* left: 0; */
`;

export const Bottom = styled.div`
  /* margin-top: 62px; */
  padding: 62px 20px 20px;

  text-align: center;
  font-size: 20;
  line-height: 1.2;
`;

export const TextTweets = styled.p`
  margin-bottom: 16px;
  text-transform: uppercase;
`;

export const TextFollowers = styled.p`
  margin-bottom: 26px;
  text-transform: uppercase;
`;

export const Button = styled.button`
  width: 196px;
  padding: 14px;
  border-radius: 10px;
  text-transform: uppercase;
  font-weight: 600;
  background-color: ${props =>
    props.active ? baseColor.colors.active : baseColor.colors.textColor};
`;
