import * as SC from "./TweetCard.styled"
import logo from 'images/logo.svg'
import headImg from 'images/tweet-header.png'
// import avatarDefault from 'images/avatar-full.png'
import avatarDefault from 'images/avatar-ringe.svg'
import avatarImg from 'images/avatar-photo.png'


const TweetCard = ({ item, handleFollower, inList }) => {
  const { id, tweets, followers } = item;
  return <SC.Card>
    <SC.Top>
      <SC.Logo src={logo} alt="logo" width='76px' />
      <SC.HeadImg src={headImg} headImg alt="headImage" width='308px' />
    </SC.Top>
    <SC.Middle>
      <SC.Avatar>
        <SC.AvatarWrapper src={avatarDefault} alt="avatar-wrapper" width='90px' />
        <SC.AvatarImg src={avatarImg} alt='avatar-img' width='62px' height='62px' />
      </SC.Avatar>
    </SC.Middle>
    <SC.Bottom>
      <SC.TextTweets>{tweets} tweets</SC.TextTweets>
      <SC.TextFollowers>{followers} Followers</SC.TextFollowers>
      <SC.Button active={inList} onClick={() => handleFollower(id)}>{inList ? 'Following' : 'Follow'}</SC.Button>
    </SC.Bottom>
  </SC.Card>
}

export default TweetCard