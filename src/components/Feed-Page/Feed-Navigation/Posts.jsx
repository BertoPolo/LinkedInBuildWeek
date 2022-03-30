import { useState } from "react"

const Posts = () => {
  const GetPosts = async () => {
    const [post, setPost] = useState({})
    const [id, setId] = useState("")

    try {
      const response = await fetch(`https://striveschool-api.herokuapp.com/api/posts/${id && +id}`, {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjQxNmU3ZWQzMzk4NDAwMTVjODgzYjYiLCJpYXQiOjE2NDg0NTUyOTgsImV4cCI6MTY0OTY2NDg5OH0.VLQs1aPcryvd-GdlD9l8Fl80QZPNQHjrbWcVQpEBvCA",
        },
      })
      if (response.ok) {
        console.log("you got the stuff,br0 ;)")
        const data = await response.json
        setPost(data)
      } else {
        alert("we have a problem")
      }
    } catch (e) {
      console.log(e)
    }
  }
  return /* down here put the css structure */
}
export default Posts
