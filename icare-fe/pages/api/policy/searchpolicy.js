import axios from "axios";
import { search_health_URL , search_URL} from "../../../utils/constants";
import { policies } from '../../../mock-data/allpolicies';

const handler = async (req, res) => {

    const axiosOptions = {
        method: 'get',
        url: `${search_URL}`,
    }

    try {
        const searchHealth = await axios.get(search_health_URL)
        if ( searchHealth.status === 200){
            try {
                const data = await axios(axiosOptions)
                const search_policies = "[" + data.data.slice(1,-1) + "]"
                res.status(200).json(search_policies)
            } catch(err) {
                if (err.response) {
                    console.log("Service Not Available, Using Mock Data")
                    res.status(err.response.status).json(policies)
                } else {
                    console.log(err)
                    res.status(err.response.status).json(policies)
                }
            }
        }
        else {
            res.status(200).json(policies)
        }
    } catch (err) {
        if (err.response) {
            console.log("Service Not Available. Using Mock Data")
            res.status(err.response.status).json(policies)
        } else {
            console.log(err)
            res.status(err.response.status).json(policies)
        }
    }
}

export default handler;