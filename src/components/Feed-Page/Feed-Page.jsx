import Modal from "./Modal/Modal";
import FeedNavigation from "./Feed-Navigation/Feed-SearchBar";
import FeedPost from "./Feed-Posts/FeedPosts";

const FeedPage = () => {
  return (
    <>
      <FeedNavigation />

      <FeedPost />
      <Modal />
    </>
  );
};

export default FeedPage;
