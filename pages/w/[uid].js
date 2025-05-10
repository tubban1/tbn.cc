import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import Head from 'next/head';
import styles from '../../styles/Wish.module.css';

export default function WishPage() {
  const router = useRouter();
  const { uid } = router.query;
  const [page, setPage] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  // 将所有 Hooks 声明移到组件顶层
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');
  const [authorName, setAuthorName] = useState('');
  const [likeCount, setLikeCount] = useState(0);

  useEffect(() => {
    if (!uid) return;

    async function fetchPage() {
      try {
        const res = await fetch(`/api/pages/${uid}`);
        const data = await res.json();
        
        if (!res.ok) {
          throw new Error(data.error || '获取页面失败');
        }
        
        setPage(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchPage();
  }, [uid]);

  // 获取评论
  useEffect(() => {
    if (!uid) return;
    
    async function fetchComments() {
      try {
        const res = await fetch(`/api/comments?page_uid=${uid}`);
        const data = await res.json();
        
        if (res.ok) {
          setComments(data);
        }
      } catch (err) {
        console.error('获取评论失败:', err);
      }
    }
    
    fetchComments();
  }, [uid]);

  // 记录页面访问
  useEffect(() => {
    if (!uid) return;
    
    fetch('/api/page_views', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ page_uid: uid }),
    }).catch(err => console.error('记录访问失败:', err));
  }, [uid]);

  // 创建动态背景 - 修复后的代码
  useEffect(() => {
    if (!uid) return;
    
    const createDynamicBackground = () => {
      const container = document.querySelector(`.${styles.container}`);
      if (!container) return;
      
      for (let i = 0; i < 20; i++) {
        const particle = document.createElement('div');
        particle.classList.add(styles.particle);
        
        // 随机位置和大小
        const size = Math.random() * 10 + 5;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.top = `${Math.random() * 100}%`;
        
        // 随机动画延迟
        particle.style.animationDelay = `${Math.random() * 10}s`;
        
        container.appendChild(particle);
      }
    };
    
    createDynamicBackground();
    
    // 清理函数
    return () => {
      const container = document.querySelector(`.${styles.container}`);
      if (container) {
        const particles = container.querySelectorAll(`.${styles.particle}`);
        particles.forEach(p => p.remove());
      }
    };
  }, [uid, styles.container, styles.particle]);

  // 创建黑客帝国文字雨效果
  useEffect(() => {
    if (!uid) return;
    if (!page || !content || !content.theme || content.theme !== 'matrixTheme') return;
    
    const createMatrixRain = () => {
      // 先清除可能存在的旧文字雨
      const oldRain = document.querySelector(`.${styles.matrixRain}`);
      if (oldRain) {
        oldRain.remove();
      }
      
      const container = document.querySelector(`.${styles.container}`);
      if (!container) return;
      
      // 创建文字雨容器
      const matrixRain = document.createElement('div');
      matrixRain.classList.add(styles.matrixRain);
      container.appendChild(matrixRain);
      
      // 定义可能出现的文字
      const texts = [
        '不离不弃', '一生一世', '小叶我爱你', '七夕是我们专属',
        '不离', '不弃', '一生', '一世', '小叶', '我爱你',
        '七夕', '专属', '相遇', '缘分', '爱情', '永恒'
      ];
      
      // 创建多个文字元素，向上升的非匀速效果
      const wordCount = 150; // 增加文字数量
      const containerWidth = window.innerWidth;
      const containerHeight = window.innerHeight;
      
      for (let i = 0; i < wordCount; i++) {
        // 随机选择一个词语
        const randomText = texts[Math.floor(Math.random() * texts.length)];
        
        // 创建词语元素
        const word = document.createElement('div');
        word.classList.add(styles.matrixWord);
        word.textContent = randomText;
        
        // 随机位置
        const x = Math.random() * containerWidth;
        
        // 随机大小 (1-3倍)
        const scale = 0.8 + Math.random() * 2.2;
        
        // 随机深度 (Z轴)
        const z = Math.random() * 500 - 250;
        
        // 随机旋转
        const rotateX = Math.random() * 20 - 10;
        const rotateY = Math.random() * 20 - 10;
        
        // 随机动画时间（非匀速效果）
        const duration = 15 + Math.random() * 25;
        
        // 随机延迟
        const delay = Math.random() * 15;
        
        // 随机透明度
        const opacity = 0.5 + Math.random() * 0.5;
        
        // 应用样式
        word.style.left = `${x}px`;
        word.style.top = `${containerHeight}px`; // 从底部开始
        word.style.fontSize = `${scale}rem`;
        word.style.transform = `translateZ(${z}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        word.style.animationDuration = `${duration}s`;
        word.style.animationDelay = `${delay}s`;
        word.style.opacity = opacity;
        
        // 随机颜色变化 (紫色到粉色的渐变)
        const hue = 280 + Math.random() * 40; // 紫色范围
        const saturation = 70 + Math.random() * 30;
        const lightness = 50 + Math.random() * 20;
        word.style.color = `hsl(${hue}, ${saturation}%, ${lightness}%)`;
        word.style.textShadow = `0 0 8px hsl(${hue}, ${saturation}%, ${lightness}%)`;
        
        matrixRain.appendChild(word);
      }
      
      // 创建心形气泡
      const heartCount = 70; // 增加心形数量
      
      for (let i = 0; i < heartCount; i++) {
        const heart = document.createElement('div');
        heart.classList.add(styles.heart);
        heart.innerHTML = '❤';
        
        // 随机位置
        const x = Math.random() * containerWidth;
        
        // 随机大小 (0.5-3倍)
        const scale = 0.5 + Math.random() * 2.5;
        
        // 随机动画时间（非匀速效果）
        const duration = 10 + Math.random() * 20;
        
        // 随机延迟
        const delay = Math.random() * 10;
        
        // 随机透明度
        const opacity = 0.3 + Math.random() * 0.7;
        
        // 应用样式
        heart.style.left = `${x}px`;
        heart.style.top = `${containerHeight}px`; // 从底部开始
        heart.style.fontSize = `${scale}rem`;
        heart.style.animationDuration = `${duration}s`;
        heart.style.animationDelay = `${delay}s`;
        heart.style.opacity = opacity;
        
        // 随机颜色变化 (红色到粉色的渐变)
        const hue = 330 + Math.random() * 30; // 红粉色范围
        const saturation = 80 + Math.random() * 20;
        const lightness = 60 + Math.random() * 20;
        heart.style.color = `hsl(${hue}, ${saturation}%, ${lightness}%)`;
        heart.style.textShadow = `0 0 8px hsl(${hue}, ${saturation}%, ${lightness}%)`;
        
        matrixRain.appendChild(heart);
      }
      
      // 确保文字雨在最底层
      container.insertBefore(matrixRain, container.firstChild);
    };
    
    // 确保DOM已加载后立即执行
    setTimeout(createMatrixRain, 100);
    
    // 窗口大小变化时重新创建
    const handleResize = () => {
      const oldRain = document.querySelector(`.${styles.matrixRain}`);
      if (oldRain) {
        oldRain.remove();
      }
      createMatrixRain();
    };
    
    window.addEventListener('resize', handleResize);
    
    // 清理函数
    return () => {
      window.removeEventListener('resize', handleResize);
      const matrixRain = document.querySelector(`.${styles.matrixRain}`);
      if (matrixRain) {
        matrixRain.remove();
      }
    };
  }, [uid, page, styles.container, styles.matrixRain, styles.matrixWord, styles.heart]);

  // 处理点赞
  const handleLike = () => {
    setLikeCount(prev => prev + 1);
  };

  // 处理提交评论
  const handleSubmitComment = async (e) => {
    e.preventDefault();
    
    if (!newComment.trim()) return;
    
    try {
      const res = await fetch('/api/comments', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          page_uid: uid,
          author: authorName.trim() || '匿名',
          content: newComment
        }),
      });
      
      const data = await res.json();
      
      if (res.ok) {
        // 添加新评论到列表
        setComments([...comments, data]);
        // 清空输入
        setNewComment('');
        setAuthorName('');
      }
    } catch (err) {
      console.error('提交评论失败:', err);
    }
  };

  if (loading) {
    return (
      <div className={styles.container}>
        <div className={styles.loadingContainer}>
          <div className={styles.loadingSpinner}></div>
          <div className={styles.loading}>加载中...</div>
        </div>
      </div>
    );
  }

  if (error) {
    return <div className={styles.container}><div className={styles.error}>{error}</div></div>;
  }

  if (!page) {
    return <div className={styles.container}><div className={styles.error}>页面不存在</div></div>;
  }

  if (!page.is_assigned) {
    return <div className={styles.container}><div className={styles.notAssigned}>页面还未分配</div></div>;
  }

  // 解析页面内容
  const content = typeof page.content === 'string' ? 
    JSON.parse(page.content || '{"wishText":"","name":"","greeting":"","interaction":"","theme":"default"}') : 
    (page.content || {"wishText":"","name":"","greeting":"","interaction":"","theme":"default"});
  
  // 确保 interaction 是字符串而不是对象
  const interactionText = typeof content.interaction === 'object' ? 
    (content.interaction.type || '点击下方按钮，送上你的祝福') : 
    (content.interaction || '点击下方按钮，送上你的祝福');

  // 确定主题类名
  const themeClass = content.theme ? styles[content.theme] : '';

  return (
    <div className={`${styles.container} ${themeClass}`}>
      <Head>
        <title>{page.title || '祝福页面'}</title>
        <meta name="description" content={`${page.title || '祝福页面'} - 个性化祝福`} />
      </Head>
      
      {/* 标题已被删除 */}
    </div>
  );
}