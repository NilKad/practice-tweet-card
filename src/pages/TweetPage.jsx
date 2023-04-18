import { Container, Section } from "components/BaseStyles/CommonStyle.styled"
import TweetsList from "components/TweetList/TweetsList"
import { useEffect, useMemo, useState } from "react"
import { getTweets } from "services/API/getTweets"
import { getFollowers, setFollowers } from "services/API/user"



const TweetsPage = () => {
  const [tweetsList, setTweetsList] = useState([])
  const [followersList, setFollowersList] = useState(getFollowers())

  const getAllTweets = async () => {
    const data = await getTweets();
    setTweetsList(data);
  }

  const handleFollower = (id) => {
    if (followersList.includes(id)) {
      setFollowersList(prev => prev.filter(e => (e) !== (id)));
      setFollowers(followersList);
      return
    }
    setFollowersList(prev => [...prev, id])
    setFollowers(followersList);
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
        {(tweetsList.length === 0 && followersList === null) ?
          <p>No tweets</p> :
          <TweetsList tweetsList={tweetsList} handleFollower={handleFollower} followersList={followersList} />}
      </Container >
    </Section >)
}

export default TweetsPage