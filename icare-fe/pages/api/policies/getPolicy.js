import { policies, policytypes, policycompanies } from '../../../mock-data/allpolicies';

export default function handler(req, res) {
    const data = policytypes
    res.status(200)
        .json(data)
}
