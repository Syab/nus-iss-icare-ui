import axios from "axios";
import { node_env, local_URL , search_URL} from "../../../utils/constants";
import { policies } from '../../../mock-data/allpolicies';

const handler = async (req, res) => {
    const axiosOptions = {
        method: 'get',
        url: `${search_URL}`,
    }

    if ( node_env !== "production"){
        res.status(200).json(policies)
    }
    else {
        const data = await axios(axiosOptions)
        const policies = "[" + data.data.slice(0,-1) + "]"
        res.status(200).json(policies)
    }
}

export default handler;