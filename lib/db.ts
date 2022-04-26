import mysql from 'serverless-mysql'
import { IPost } from './types'

const db = mysql({
 config: {
  host: process.env.MYSQL_HOST,
  database: process.env.MYSQL_DATABASE,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  port: Number(process.env.MYSQL_PORT),
 },
})

export default db
// USING APPROACH OF QUERY DATA DIRECTLY FROM DATABASE NOT USING ANY API...
export const loadData = async (table: string, id?: number) => {
 const data = id
  ? await db.query<IPost[]>(`select * from ${table} where id=?`, [id])
  : await db.query<IPost[]>(`select * from ${table} order by id desc`)
 db.end()

 return data.map(({ id, title, content }) => ({ id, title, content }))
}
