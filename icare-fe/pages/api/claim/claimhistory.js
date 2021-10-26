import axios from "axios";
import {claimlist_URL, claim_health_URL, claimhistory_URL} from "../../../utils/constants";
import {claimhistorylist, claimlist} from "../../../mock-data/allclaims";
const FormData = require('form-data');

const formdata = new FormData();

const handler = async (req, res)=> {
    formdata.append('claimId', req.query.claimId)
    const axiosOptions = {
        method: 'post',
        url: `${claimhistory_URL}`,
        headers: {
            'Authorization': `Bearer e1ed7a52-49da-478c-9f59-c42687bb1a24`,
            ...formdata.getHeaders()
        },
        data : formdata
    };
    try {
        const claimhealth = await axios.get(claim_health_URL)
        if (claimhealth.status===200){
            console.log('claim health OK')
            try {
                const data = await axios(axiosOptions)
                const claimhistorydata = data.data
                console.log("Service Available, Using Real Claim Data")
                res.status(data.status).json(claimhistorydata.result)
            } catch (err){
                console.log("Unable to call claimhistory, Using Mock Data")
                res.status(500).json(claimhistorylist.result)
            }
        } else {
            console.log("Service Not Available, Using Mock Data")
            res.status(200).json(claimhistorylist.result)
        }
    } catch(err){
        if (err.response) {
            console.log("Service Not Available. Using Mock Data")
            res.status(err.response.status).json(claimhistorylist.result)
        } else {
            // console.log(err)
            console.log("Service Not Available, Using Mock Data")
            res.status(err.response.status).json(claimhistorylist.result)
        }
    }

    // res.status(200).json(claimhistorylist.result)
}

export default handler;