import TweetCard from "components/TweetCard/TweetCard";
import * as SC from "./TweetList.styled";

const TweetsList = ({ tweetsList, handleFollower, followersList }) => {

  return <SC.TweetList >
    {tweetsList.map((tweet => {
      console.log('followersList: ', followersList);
      const inList = followersList.includes(tweet.id);
      return <SC.TweetItem key={tweet.id}>
        <TweetCard item={tweet} handleFollower={handleFollower} inList={inList} />
      </SC.TweetItem>
    }))}
  </SC.TweetList>
}

export default TweetsList