import axios from "axios";

const handler = async (req, res) => {
    console.log("entered API")
    // const API = `
    // `
    // const API = 'http://ec2-54-255-139-176.ap-southeast-1.compute.amazonaws.com/token'
    // const code = req.query.code;
    // const state = req.query.state;
    // const url = `${API}?code=${code}&state=${state}`
    // console.log(url)
    // const data =
    //     await axios.get(`http://ec2-54-255-139-176.ap-southeast-1.compute.amazonaws.com/token?code=${code}&state=${state}`)
    const data = {"jhn":"doe"}
    // console.log(data.data)
    res.status(200).json(data);
}

export default handler;