import axios from "axios";
import { policymgmt_URL, policymgmt_health_URL } from "../../../utils/constants";
import { mypolicies } from '../../../mock-data/allpolicies';

const handler = async (req, res) => {
    const axiosOptions = {
        method: 'post',
        url: `${policymgmt_URL}`,
        headers: {
            contentType: 'application/json',
            authorization: `Bearer e1ed7a52-49da-478c-9f59-c42687bb1a24`
        },
        data: {
            userId: "S3100052A",
            role: "PH",
        }
    }

    try {
        const viewpolicyHealth = await axios.get(policymgmt_health_URL)
        if ( viewpolicyHealth.status === 200){
            try {
                const data = await axios(axiosOptions)
                const view_policies = "[" + data.data + "]"
                console.log("Service Available, Using Real Data")
                res.status(200).json(view_policies)
            } catch(err) {
                if (err.response) {
                    console.log("Service Not Available, Using Mock Data")
                    res.status(err.response.status).json(mypolicies)
                } else {
                    // console.log(err)
                    console.log("Service Not Available, Using Mock Data")
                    res.status(503).json(mypolicies)
                }
            }
        }
        else {
            res.status(200).json(mypolicies)
        }
    } catch (err) {
        if (err.response) {
            console.log("Service Not Available. Using Mock Data")
            res.status(err.response.status).json(mypolicies)
        } else {
            // console.log(err)
            console.log("Service Not Available, Using Mock Data")
            res.status(500).json(mypolicies)
        }
    }

}

export default handler;