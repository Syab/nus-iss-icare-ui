import { claimlist } from '../../../mock-data/allclaims';

export default function handler(req, res) {
    res.status(200).json(claimlist)
}
