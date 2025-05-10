import { useEffect, useState } from 'react';
import Head from 'next/head';

export default function Home() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('/api/db')
      .then(res => res.json())
      .then(setData)
      .catch(err => setData({ error: err.message }));
  }, []);

  return (
    <div>
      <Head>
        <title>祝福系统 - 首页</title>
        <meta name="description" content="创建和分享个性化祝福" />
      </Head>
      <h1>数据库查询结果</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}