import mysql from 'mysql2/promise';

export default async function handler(req, res) {
  const connection = await mysql.createConnection({
    host: 'caboose.proxy.rlwy.net',
    user: 'root',
    password: 'mytRopuhMJFxLyFcDYDoTIojZeyqzYfj',
    database: 'railway',
    port: 49094,
  });

  try {
    // 1. 先更新现有记录，确保 content 列有有效的 JSON
    await connection.execute(`
      UPDATE pages 
      SET content = '{"wishText":"","name":"","greeting":"","interaction":"","theme":"default"}' 
      WHERE content IS NULL OR content = ''
    `);
    
    // 2. 然后修改列类型为 JSON
    await connection.execute(`
      ALTER TABLE pages 
      MODIFY content JSON
    `);
    
    res.status(200).json({ message: '数据库结构更新成功' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  } finally {
    await connection.end();
  }
}