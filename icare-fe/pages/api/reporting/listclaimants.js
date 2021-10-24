import { claimaintlist } from "../../../mock-data/allreporting";

const handler = (req, res) => {
    res.status(200).json(claimaintlist)
}

export default handler;