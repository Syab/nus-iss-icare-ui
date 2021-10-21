import axios from "axios";
import { node_env, policymgmt_URL,viewpolicy_ENDPOINT } from "../../../utils/constants";
import { mypolicies } from '../../../mock-data/allpolicies';

const handler = (req, res) => {

    const API = `${policymgmt_URL}`

    // if (node_env !== 'production'){
        res.status(200).json(mypolicies)
    // }
    // else {
    //     const data = await axios.get(API, {
    //         data: {
    //             userId : req
    //         }
    //     })
    // }
}

export default handler;