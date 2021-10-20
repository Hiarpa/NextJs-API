import { NextApiRequest, NextApiResponse } from 'next'

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const {method} = req;

    switch (method) {
      case 'GET':
        // Get data from your database
        res.status(200).json([
          {id: 1, name: 'Hiarpa Neto', method},
          {id: 2, name: 'Adriano Botelho', method},
          {id: 3, name: 'Gabriel Nhimi', method},
        ])
        break
      default:
        res.setHeader('Allow', ['GET', 'PUT'])
        res.status(405).end(`Method ${method} Not Allowed`)
    }
    
  } catch (err) {
    res.status(500).json({ statusCode: 500, message: err.message })
  }
}

export default handler
