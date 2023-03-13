// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// import { NextApiRequest, NextApiResponse } from 'next'

import { main } from '../../lib/openai'

export default async function handler(req, res) {
  if(req.method !== 'POST') {
    res.status(405).json({ message: "Method not allowed"});
    return;
  } else {
  
  await main(req, res) //calls the main openai function
}}




