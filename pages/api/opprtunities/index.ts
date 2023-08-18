import { CrawledOpportunity } from "@prisma/client";
import { NextApiResponse } from "next";
import { prisma } from "src/utils/db";

export default async function handler(req:NextApiResponse, res:NextApiResponse) {
  try{
    const jobs:CrawledOpportunity[] = await prisma.crawledOpportunity.findMany();
    return res.status(200).json(jobs)
  }
  catch(err){
    return res.status(500).json({message:"there's smth went wrong",Error:err})
  }
}