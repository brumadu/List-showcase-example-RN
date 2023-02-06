import axios from "axios";

export const getRepositories = async (search: string) =>
    axios
          .get(`https://api.github.com/search/repositories?q=${search}`)
          .then((resp) => resp.data.items)
          .catch((error) => console.log(error));

