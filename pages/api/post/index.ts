import type { NextApiRequest, NextApiResponse } from 'next'
import db from '../../../lib/db'
import mysql from 'mysql'

export default async (req: NextApiRequest, res: NextApiResponse) => {
 if (req.method === 'GET') {
  const posts = await db.query('select * from Post order by id desc')

  db.end()
  res.json(posts)
 } else if (req.method === 'POST') {
  let qry = 'insert into Post set ?'
  console.log('req.body here', req.body)
  const createdPost = await db.query<mysql.OkPacket>(qry, [
   JSON.parse(req.body),
  ])
  db.end()
  if (createdPost.insertId <= 0)
   res.json({ id: null, message: 'error post not created...' })
  else
   res.json({ id: createdPost.insertId, message: 'successufull created...' })
 } else if (req.method === 'DELETE') {
  res.json({ message: 'hello' })
 }
}
