// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/util/prisma";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const photoList = await prisma.photos.findMany();
  return res.json(photoList);
}
