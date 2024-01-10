// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
 
type ResponseData = {
  name: string
  idade : number
}
 
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
    console.log(req.method);
  res.status(200).json({ name: 'Roberto William', idade : 23 })
};