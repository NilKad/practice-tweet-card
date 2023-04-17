import TweetCard from "components/TweetCard/TweetCard";
import * as SC from "./TweetList.styled";

const TweetsList = ({ tweetsList, handleFollower, followersList }) => {
  // console.log('!followersList.includes(1): ', followersList.includes(1))

  return <SC.TweetList >
    {tweetsList.map((tweet => {
      const inList = followersList.includes(tweet.id);
      return <SC.TweetItem key={tweet.id}>
        <TweetCard item={tweet} handleFollower={handleFollower} inList={inList} />
      </SC.TweetItem>
    }))}
  </SC.TweetList>
  // {tweetsList.map((tweet => <TweetCard id={tweet.id} item={tweet} />))}
}

export default TweetsList