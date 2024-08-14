// pages/api/fetchTyres.ts
import type { NextApiRequest, NextApiResponse } from 'next';

const fetchTyresHandler = async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === 'POST') {
        const { season, sizeOne, sizeTwo, sizeThree } = req.body;
console.log(req.body);

        // Make sure to use your PHP script URL
        const phpUrl = 'http://localhost/admin/query.php';

        try {
            const response = await fetch(phpUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: new URLSearchParams({
                    method: 'fetchFrontTyres',
                    season: season,
                    sizeOne: sizeOne,
                    sizeTwo: sizeTwo,
                    sizeThree: sizeThree,
                }).toString(),
            });

            const data = await response.json();
            res.status(200).json(data);
        } catch (error) {
            console.error('Error fetching tyres:', error);
            res.status(500).json({ error: 'Failed to fetch tyres' });
        }
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
};

export default fetchTyresHandler;
