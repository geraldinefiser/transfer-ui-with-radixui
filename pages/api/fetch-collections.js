import FakeCollectionsData from "@/utils/fakeCollectionsData.json";

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async function handler(req, res) {
  const for_address = req.query.for_address;
  const url = ` https://avax-mainnet.g.alchemy.com/nft/v3/${process.env.ALCHEMY_API_KEY}/getCollectionsForOwner?owner=${for_address}`;

  const vercelDomain = process.env.VERCEL_URL;
  switch (req.method) {
    case "GET":
      try {
        const response = await fetch(url, {
          headers: {
            Origin: vercelDomain, // Replace with your actual origin domain
          },
        });
        const fetchedCollections = await response.json();

        // const fetchedCollections = FakeCollectionsData

        res.status(200).json(fetchedCollections);
      } catch (error) {
        console.log(error);
      }

      break;
  }
}
