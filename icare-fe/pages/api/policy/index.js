import axios from "axios";
import {result} from "../../../mock-data/allpolicies";

const url = "https://api.github.com/users/mapbox"

const handler = async (req, res) => {
    const data = await axios.get(url)
    console.log(data.status)
    res.status(200).json(data.data)
}

export default handler