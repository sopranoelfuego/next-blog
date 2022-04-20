import type { NextApiRequest, NextApiResponse } from 'next'
import mysql from 'serverless-mysql'
type Data = {
 name: string
}
const db = mysql({
 config: {
  host: process.env.MYSQL_HOST,
  database: process.env.MYSQL_DATABASE,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  port: Number(process.env.MYSQL_PORT),
 },
})

export default async (req: NextApiRequest, res: NextApiResponse) => {
 const posts = await db.query('select * from Post ')

 db.end()
 res.json(posts)
}
