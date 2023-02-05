// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string;
  description: string;
  image: string;
}

// As all the images are uploaded on github, we can extract the images from github directly.
const IMAGE_URL = "https://raw.githubusercontent.com/LearnWeb3DAO/NFT-Collection/main/my-app/public/cryptodevs/";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  // get the tokenId from the query params
  const tokenId = req.query.tokenId;
  // The api is sending back metadata for a Crypto Dev
  // To make our collection compatible with Opensea, we need to follow some Metadata standards
  // when sending back the response from the api
  // More info can be found here: https://docs.opensea.io/docs/metadata-standards
  res.status(200).json({
    name: `Crypto Dev #${tokenId}`,
    description: "Crypto Dev is a collection of developers in crypto",
    image: `${IMAGE_URL}${tokenId}.svg`,
  });
}
