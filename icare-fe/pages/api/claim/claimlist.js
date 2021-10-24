import axios from "axios";
import {claimlist_URL, claim_health_URL, policymgmt_health_URL} from "../../../utils/constants";
import { claimlist } from '../../../mock-data/allclaims';
const FormData = require('form-data');

const formdata = new FormData();

const handler = async (req, res) => {
    formdata.append('userId', 'S3100052A');
    const axiosOptions = {
        method: 'post',
        url: `${claimlist_URL}`,
        headers: {
            'Authorization': `Bearer e1ed7a52-49da-478c-9f59-c42687bb1a24`,
            ...formdata.getHeaders()
        },
        data : formdata
    };

    try {
        const claimhealth = await axios.get(claim_health_URL)
        if (claimhealth.status===200){
            try {
                const data = await axios(axiosOptions)
                const claimdata = data.data
                console.log("Service Available, Using Real Claim Data")
                res.status(data.status).json(claimdata)
            } catch (err){
                console.log("Service Not Available, Using Mock Data")
                res.status(err.response.status).json(claimlist)
            }
        } else {
            res.status(200).json(claimlist)
        }
    } catch (err) {
        if (err.response) {
            console.log("Service Not Available. Using Mock Data")
            res.status(err.response.status).json(claimlist)
        } else {
            console.log(err)
            console.log("Service Not Available, Using Mock Data")
            res.status(err.response.status).json(claimlist)
        }
    }
}

export default handler;
