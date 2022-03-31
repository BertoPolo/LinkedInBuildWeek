import CreatePost from "./CreatePost"
import SingleFeedPost from "../Feed-Posts/SingleFeedPost"
// import { Container } from "react-bootstrap"
import { useState } from "react"

const MainPost = () => {
  const [posts, setPosts] = useState({})

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

  return (
    <>
      <CreatePost />
      {posts.map((post) => (
        <SingleFeedPost post={post} />
      ))}
    </>
  )
}

export default MainPost
