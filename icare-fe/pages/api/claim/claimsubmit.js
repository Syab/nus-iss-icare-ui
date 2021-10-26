import axios from "axios";
import {claimsubmit_URL, claim_health_URL} from "../../../utils/constants";
import { claimlist } from '../../../mock-data/allclaims';
const FormData = require('form-data');

const formdata = new FormData();


const handler = async (req, res) => {
        if (req.method === 'POST') {
            console.log("Entered API Submit")
            const claimsubmitdata = req.body.values
            // formdata.append('claimId', '30')
            formdata.append('userId', 'S3100052A');
            formdata.append('claimDocumentId', '22');
            formdata.append('policyId', claimsubmitdata.policyid);
            formdata.append('claimStatus', 'PENDING');
            formdata.append('rejectReason', '');
            formdata.append('policyNumber', claimsubmitdata.policyid);
            formdata.append('claimAmount', String(claimsubmitdata.amount));
            formdata.append('policyName', claimsubmitdata.policyname);
            formdata.append('policyType', claimsubmitdata.policytype);
            // console.log(claimsubmitdata)

            const axiosOptions = {
               method: 'post',
               url: `${claimsubmit_URL}`,
               // url: "http://icare-claimmgmt-lb-1638130367.ap-southeast-1.elb.amazonaws.com/submitclaim",
               headers: {
                   'Authorization': `Bearer e1ed7a52-49da-478c-9f59-c42687bb1a24`,
                   ...formdata.getHeaders()
               },
               data : formdata
            };

            try {
                const claimhealth = await axios.get(claim_health_URL)
                if (claimhealth.status===200){
                    console.log("Claim Health OK")
                    try {
                        console.log("Pushing to claim service")
                        const data = await axios(axiosOptions);
                        const response = data.data
                        console.log("Success...")
                        res.status(201).json(response)
                    }catch (err){
                        console.log("Service Not Available, Returning Unsuccessful Sent")
                        if (err.response){
                            console.log(err);
                            res.status(503).json({"result":"Internal Server Error Failed 1", "code":503})
                        }
                        console.log(err)
                        res.status(503).json({"result":"Internal Server Error Failed 2", "code":503})
                    }
                }
            }catch (err){
                if (err.response){
                    console.log(err);
                    res.status(503).json({"result":"Internal Server Error Failed 3", "code":503})
                }
                console.log(err)
                res.status(503).json({"result":"Internal Server Error Failed 4", "code":503})
            }
        } else {
            res.status(500).json({"result":"Internal Server Error Failed 5", "code":503})
        }
}

export default handler;