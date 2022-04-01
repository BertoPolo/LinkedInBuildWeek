import Modal from "./Modal/Modal"
import FeedNavigation from "./Feed-Navigation/Feed-SearchBar"
import FeedPost from "./Feed-Posts/FeedPosts"
import SideBarNews from "./Modal/Feed-Sidebars/Feed-SideBarNews"

const FeedPage = () => {
  return (
    <>
      <FeedNavigation />

      <FeedPost />
      <Modal />
      <SideBarNews />
    </>
  )
}

export default FeedPage
