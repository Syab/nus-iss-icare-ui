import { policies, policytypes, policycompanies } from '../../../mock-data/allpolicies';

export default function handler(req, res) {
  res.status(200).json(policies)
}
