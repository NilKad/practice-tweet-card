import TweetsList from "components/TweetList/TweetsList"
import { useEffect, useMemo, useState } from "react"
import { getTweets } from "services/API/getTweets"
import { getFollowers, setFollowers } from "services/API/user"
import * as SC from "./TweetsPage.styled"
import { Container, Section } from "components/BaseStyles/CommonStyle.styled"

const onPage = 8;
const filterValues = ['show all', 'follow', 'following']

const TweetsPage = () => {
  const [tweetsList, setTweetsList] = useState([])
  const [followersList, setFollowersList] = useState(getFollowers())
  const [page, setPage] = useState(1)
  const [isLoadMore, setIsLoadMore] = useState(true)
  const filterOption = filterValues.map(e => ({ value: e, label: e }))
  const [filter, setFilter] = useState(filterOption[0])
  const [listForRender, setListForRender] = useState(tweetsList)

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
    const newList = tweetsList.filter(({ id }) => {
      if (filter.value === filterValues[1]) {
        return !followersList.includes(id)
      }
      if (filter.value === filterValues[2]) {
        return followersList.includes(id)
      }
      return true
    })
    setListForRender(newList)
  }, [filter, followersList, tweetsList])

  useEffect(() => {
    getAllTweets();
  }, [])


  return (
    <Section >
      <Container>
        {(listForRender.length === 0 && followersList === null) ?
          <p>No tweets</p> :
          <>
            <SC.Filter options={filterOption} defaultValue={filter} value={filter} onChange={setFilter} />
            <TweetsList tweetsList={listForRender} handleFollower={handleFollower} followersList={followersList} />
          </>
        }
        {isLoadMore && <SC.LoadMore onClick={onLoadMore} >Load More</SC.LoadMore>}
      </Container >
    </Section >)
}

export default TweetsPage