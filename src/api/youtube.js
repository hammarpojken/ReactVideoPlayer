import axios from "axios";

const KEY = "AIzaSyAZqfGEJI8vFRQONK0qNWmy0OagDZwoPQk";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY
  }
});
