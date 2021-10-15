import { policies } from '../../../mock-data/allpolicies';

export default function handler(req, res) {
  res.status(200).json(policies)
}
