import CreatePost from "./CreatePost"
import SingleFeedPost from "../Feed-Posts/SingleFeedPost"
import { useEffect, useState } from "react"

const MainPost = () => {
  const [posts, setPosts] = useState([])

  /* do a fetch GET of MY PROFILE */

  useEffect(() => {
    getPosts()
  }, [])

  const getPosts = async () => {
    try {
      const response = await fetch("https://striveschool-api.herokuapp.com/api/posts/", {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjQxNmU3ZWQzMzk4NDAwMTVjODgzYjYiLCJpYXQiOjE2NDg0NTUyOTgsImV4cCI6MTY0OTY2NDg5OH0.VLQs1aPcryvd-GdlD9l8Fl80QZPNQHjrbWcVQpEBvCA",
        },
      })
      if (response.ok) {
        const data = await response.json()
        setPosts(data)
      } else {
        alert("problems,buddy")
      }
    } catch (e) {
      console.log(e)
    }
  }
  console.log(posts)
  return (
    <>
      <CreatePost /> // pass a prop with _id
      {posts &&
        posts
          .map((post) => <SingleFeedPost key={post._id} post={post} />) // here  must pass a prop when its YOUR post and allow edit the post
          .slice(0, 6)}
    </>
  )
}

export default MainPost
