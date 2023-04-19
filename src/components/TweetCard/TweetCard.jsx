import * as SC from "./TweetCard.styled"
import logo from 'assets/images/logo.svg'
import headImg from 'assets/images/tweet-header.png'
import avatarDefault from 'assets/images/avatar-ringe.svg'
import avatarImg from 'assets/images/avatar-photo.png'
import { Button } from "components/BaseStyles/CommonStyle.styled"


const TweetCard = ({ name, item, handleFollower, inList }) => {
  const local = 'en-Gb'
  const { id, tweets, followers, avatar: avatarUrl } = item;
  const avatar = avatarUrl ? avatarUrl : avatarImg;
  return <SC.Card>
    <SC.Top>
      <SC.Logo src={logo} alt="logo" width='76px' />
      <SC.HeadImg src={headImg} headImg alt="headImage" width='308px' />
    </SC.Top>
    <SC.Middle>
      <SC.Avatar>
        <SC.AvatarWrapper src={avatarDefault} alt="avatar-wrapper" width='90px' />
        <SC.AvatarImageWrapper >
          <SC.AvatarImg src={avatar} alt='name' width='62px' height='62px' />

        </SC.AvatarImageWrapper>
      </SC.Avatar>
    </SC.Middle>
    <SC.Bottom>
      <SC.TextTweets>{new Intl.NumberFormat(local).format(tweets)} tweets</SC.TextTweets>
      <SC.TextFollowers>{new Intl.NumberFormat(local).format(inList ? (followers + 1) : followers)} Followers</SC.TextFollowers>
      <Button active={inList} onClick={() => handleFollower(id)}>{inList ? 'Following' : 'Follow'}</Button>
    </SC.Bottom>
  </SC.Card>
}

export default TweetCard