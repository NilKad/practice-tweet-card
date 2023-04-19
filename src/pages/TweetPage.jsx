import TweetsList from "components/TweetList/TweetsList"
import { useEffect, useMemo, useState } from "react"
import { getTweets } from "services/API/getTweets"
import { getFollowers, setFollowers } from "services/API/user"
import * as SC from "./TweetsPage.styled"
import { Container, Section } from "components/BaseStyles/CommonStyle.styled"

const onPage = 8;

const TweetsPage = () => {
  const [tweetsList, setTweetsList] = useState([])
  const [followersList, setFollowersList] = useState(getFollowers())
  const [page, setPage] = useState(1)
  const [isLoadMore, setIsLoadMore] = useState(true)

  const getAllTweets = async () => {
    const data = await getTweets(1, onPage);
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

  const onLoadMore = async () => {
    setPage(prev => prev + 1);
    const data = await getTweets(page + 1, onPage)
    setTweetsList(prev => [...prev, ...data])
    if (data.length < onPage) {
      setIsLoadMore(false)
    }
  }

  useMemo(() => {
    setFollowers(followersList);
  }, [followersList])

  useEffect(() => {
    getAllTweets();
  }, [])


  return (
    <Section >
      <Container>
        {(tweetsList.length === 0 && followersList === null) ?
          <p>No tweets</p> :
          <TweetsList tweetsList={tweetsList} handleFollower={handleFollower} followersList={followersList} />}
        {isLoadMore && <SC.LoadMore onClick={onLoadMore} >Load More</SC.LoadMore>}
      </Container >
    </Section >)
}

export default TweetsPage