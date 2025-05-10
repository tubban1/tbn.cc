import mysql from 'mysql2/promise';

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: '方法不允许' });
  }

  const connection = await mysql.createConnection({
    host: 'caboose.proxy.rlwy.net',
    user: 'root',
    password: 'mytRopuhMJFxLyFcDYDoTIojZeyqzYfj',
    database: 'railway',
    port: 49094,
  });

  try {
    const [rows] = await connection.execute('SELECT * FROM pages ORDER BY created_at DESC');
    res.status(200).json(rows);
  } catch (error) {
    console.error('获取页面失败:', error);
    res.status(500).json({ error: '获取页面失败' });
  } finally {
    await connection.end();
  }
}