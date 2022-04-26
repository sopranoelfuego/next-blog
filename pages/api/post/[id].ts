import { NextApiRequest, NextApiResponse } from 'next'
import db from '../../../lib/db'
import { IPost } from '../../../lib/types'

export default async (req: NextApiRequest, res: NextApiResponse) => {
 console.log('query:', req.query.id)
 if (req.method === 'GET') {
  const post = await db.query<IPost[]>('select * from Post where id=?', [
   req.query.id,
  ])
  db.end()

  if (post.length <= 0)
   res.json({ success: false, message: 'no post found...' })
  res.json({ success: true, data: post })
 } else if (req.method === 'DELETE') {
  const result = await db.query('delete from Post where id=?', [req.query.id])
 }
}
