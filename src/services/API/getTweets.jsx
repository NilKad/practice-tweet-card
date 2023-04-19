import axios from "axios";

const baseURL = 'https://63965ef3a68e43e418026676.mockapi.io';

const instance = axios.create({ baseURL })

const getTweets = async (page = null, onPage = null) => {
  try {
    const data = await instance(`/tweet-test?page=${page}&limit=${onPage}`);
    return data.data;
  } catch (error) {
    console.log(error.message)
  }

}

export { getTweets }