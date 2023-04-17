// import TweetsList from 'components/TweetList/TweetsList';

import { Container, Section } from "components/BaseStyles/CommonStyle.styled"
import TweetCard from "components/TweetCard/TweetCard"
import TweetsList from "components/TweetList/TweetsList"
import { useEffect, useMemo, useState } from "react"
import { getTweets } from "services/API/getTweets"
import { getFollowers, setFollowers } from "services/API/user"



const TweetsPage = () => {
  const [tweetsList, setTweetsList] = useState([])

  const localData = (getFollowers())
  console.log('localdata: ', localData)

  const [followersList, setFollowersList] = useState(JSON.parse(localStorage.getItem('tweetUser')))

  const getAllTweets = async () => {
    const data = await getTweets();
    setTweetsList(data);
  }

  const handleFollower = (id) => {
    if (followersList.includes(id)) {
      setFollowersList(prev => prev.filter(e => (e) !== (id)));
      // console.log('followersList: ', followersList);
      // setFollowers(followersList);
      return
    }
    setFollowersList(prev => [...prev, id])
    // console.log('followersList: ', followersList);
    // setFollowers(followersList);

  }

  useMemo(() => {
    setFollowers(followersList);
  }, [followersList])

  useEffect(() => {
    getAllTweets();

  }, [])

  return (
    <Section  >
      <Container>
        {tweetsList.length === 0 ?
          <p>No tweets</p> :
          <TweetsList tweetsList={tweetsList} handleFollower={handleFollower} followersList={followersList} />}
      </Container >
    </Section >)
}

export default TweetsPage