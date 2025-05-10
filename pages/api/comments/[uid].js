import mysql from 'mysql2/promise';

export default async function handler(req, res) {
  const { uid } = req.query;
  
  const connection = await mysql.createConnection({
    host: 'caboose.proxy.rlwy.net',
    user: 'root',
    password: 'mytRopuhMJFxLyFcDYDoTIojZeyqzYfj',
    database: 'railway',
    port: 49094,
  });

  try {
    // GET 请求 - 获取页面的所有评论
    if (req.method === 'GET') {
      const [rows] = await connection.execute(
        'SELECT * FROM comments WHERE page_uid = ? ORDER BY created_at DESC',
        [uid]
      );
      
      res.status(200).json(rows);
    }
    // POST 请求 - 添加新评论
    else if (req.method === 'POST') {
      const { author, content } = req.body;
      
      if (!content || content.trim() === '') {
        return res.status(400).json({ error: '评论内容不能为空' });
      }
      
      // 添加评论
      await connection.execute(
        'INSERT INTO comments (page_uid, author, content) VALUES (?, ?, ?)',
        [uid, author || '匿名', content]
      );
      
      // 返回最新评论列表
      const [rows] = await connection.execute(
        'SELECT * FROM comments WHERE page_uid = ? ORDER BY created_at DESC',
        [uid]
      );
      
      res.status(200).json(rows);
    }
    else {
      res.status(405).json({ error: '方法不允许' });
    }
  } catch (error) {
    console.error('操作失败:', error);
    res.status(500).json({ error: '服务器错误' });
  } finally {
    await connection.end();
  }
}