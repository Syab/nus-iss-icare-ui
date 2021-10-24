import axios from "axios";
const FormData = require('form-data');
const fs = require('fs');
const formdata = new FormData();

const handler = async (req, res) => {
    formdata.append('file', fs.createReadStream('/Users/syabiqah/Documents/Learning/NUS/PracticeModule-iCare/SampleClaimDocument.pdf'));
    const config = {
        method: 'post',
        url: 'http://icare-claimmgmt-lb-1638130367.ap-southeast-1.elb.amazonaws.com/uploaddoctos3',
        headers: {
            ...formdata.getHeaders()
        },
        data : formdata
    };
    const result = await axios(config)
        // .then(function (response) {
        //     console.log(JSON.stringify(response.data));
        // })
        // .catch(function (error) {
        //     console.log(error);
        // });
    console.log(result.data)
    res.status(200).json(result.data)
}

export default handler;


