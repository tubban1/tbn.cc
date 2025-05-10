import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import styles from '../../styles/Edit.module.css';

export default function EditPage() {
  const router = useRouter();
  const { uid } = router.query;
  const [page, setPage] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [password, setPassword] = useState('');
  const [authenticated, setAuthenticated] = useState(false);
  // 在 useState 中添加 theme 字段
  const [formData, setFormData] = useState({
    title: '',
    wishText: '',
    name: '',
    greeting: '',
    theme: 'default', // 默认主题
  });
  const [message, setMessage] = useState('');

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
        
        // 处理页面内容
        let content = data.content;
        
        // 如果content是字符串，尝试解析为JSON
        if (typeof content === 'string') {
          try {
            content = JSON.parse(content);
          } catch (e) {
            // 如果解析失败，创建默认结构
            content = {
              wishText: '',
              name: '',
              greeting: content || '',
              interaction: {
                type: 'like',
                config: {}
              },
              comments: []
            };
          }
        } else if (!content) {
          // 如果content为空，创建默认结构
          content = {
            wishText: '',
            name: '',
            greeting: '',
            interaction: {
              type: 'like',
              config: {}
            },
            comments: []
          };
        }
        
        setFormData({
          title: data.title || '',
          wishText: content.wishText || '',
          name: content.name || '',
          greeting: content.greeting || '',
          interactionType: content.interaction?.type || 'like',
        });
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchPage();
  }, [uid]);

  const handlePasswordSubmit = (e) => {
    e.preventDefault();
    
    if (page && password === page.password) {
      setAuthenticated(true);
    } else {
      setMessage('密码错误，请重试');
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');
    
    try {
      // 构建新的content结构
      // 在保存时，确保将主题信息包含在 content 中
      const content = {
        wishText: formData.wishText,
        name: formData.name,
        greeting: formData.greeting,
        interaction: {
          type: formData.interactionType,
          config: {}
        },
        theme: formData.theme, // 保存主题选择
      };
      
      const res = await fetch(`/api/pages/${uid}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title: formData.title,
          content: JSON.stringify(content),
          password: page.password // 验证身份
        }),
      });
      
      const data = await res.json();
      
      if (!res.ok) {
        throw new Error(data.error || '更新失败');
      }
      
      setMessage('更新成功！');
    } catch (err) {
      setMessage(`错误: ${err.message}`);
    }
  };

  if (loading) {
    return <div className={styles.container}><div className={styles.loading}>加载中...</div></div>;
  }

  if (error) {
    return <div className={styles.container}><div className={styles.error}>{error}</div></div>;
  }

  if (!page) {
    return <div className={styles.container}><div className={styles.error}>页面不存在</div></div>;
  }

  if (!page.is_sold) {
    return <div className={styles.container}><div className={styles.notSold}>页面尚未售出，无法编辑</div></div>;
  }

  if (!authenticated) {
    return (
      <div className={styles.container}>
        <div className={styles.authCard}>
          <h1>请输入密码</h1>
          <form onSubmit={handlePasswordSubmit}>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="输入页面密码"
              className={styles.passwordInput}
              required
            />
            <button type="submit" className={styles.submitButton}>验证</button>
          </form>
          {message && <p className={styles.message}>{message}</p>}
        </div>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <div className={styles.editCard}>
        <h1>编辑祝福页面</h1>
        <form onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <label htmlFor="title">标题</label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleInputChange}
              className={styles.input}
              required
            />
          </div>
          
          <div className={styles.formGroup}>
            <label htmlFor="wishText">祝福语前缀（如"🌙 晚安，"）</label>
            <input
              type="text"
              id="wishText"
              name="wishText"
              value={formData.wishText}
              onChange={handleInputChange}
              className={styles.input}
              placeholder="例如：🌙 晚安，"
            />
          </div>
          
          <div className={styles.formGroup}>
            <label htmlFor="name">收件人名字</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className={styles.input}
              placeholder="例如：小绿"
            />
          </div>
          
          <div className={styles.formGroup}>
            <label htmlFor="greeting">祝福语内容</label>
            <textarea
              id="greeting"
              name="greeting"
              value={formData.greeting}
              onChange={handleInputChange}
              className={styles.textarea}
              rows="5"
              placeholder="例如：祝你今晚好眠"
            />
          </div>
          
          <div className={styles.formGroup}>
            <label htmlFor="interactionType">互动类型</label>
            <select
              id="interactionType"
              name="interactionType"
              value={formData.interactionType}
              onChange={handleInputChange}
              className={styles.input}
            >
              <option value="like">点赞</option>
            </select>
          </div>
          
          <div className={styles.formGroup}>
            <label htmlFor="theme">选择页面主题</label>
            <div className={styles.themeSelector}>
              <div 
                className={`${styles.themeOption} ${formData.theme === 'default' ? styles.selectedTheme : ''}`}
                onClick={() => setFormData({...formData, theme: 'default'})}
              >
                <div className={styles.themePreview}>
                  <div className={styles.defaultPreview}></div>
                </div>
                <div className={styles.themeInfo}>
                  <h4>默认主题</h4>
                  <p>简洁大方的基础样式</p>
                </div>
              </div>
              
              <div 
                className={`${styles.themeOption} ${formData.theme === 'dreamySky' ? styles.selectedTheme : ''}`}
                onClick={() => setFormData({...formData, theme: 'dreamySky'})}
              >
                <div className={styles.themePreview}>
                  <div className={styles.dreamySkyPreview}></div>
                </div>
                <div className={styles.themeInfo}>
                  <h4>梦幻星空主题</h4>
                  <p>神秘、浪漫、静谧</p>
                  <small>以深蓝色与星点为背景，流动星光效果，搭配梦幻字体与柔和动画</small>
                </div>
              </div>
              
              {/* 添加纸张信笺主题 */}
              <div 
                className={`${styles.themeOption} ${formData.theme === 'paperLetter' ? styles.selectedTheme : ''}`}
                onClick={() => setFormData({...formData, theme: 'paperLetter'})}
              >
                <div className={styles.themePreview}>
                  <div className={styles.paperLetterPreview}></div>
                </div>
                <div className={styles.themeInfo}>
                  <h4>纸张信笺主题</h4>
                  <p>温馨、复古、手写风</p>
                  <small>仿纸张背景，像一封手写信，有手写字体和笔触样式，角落带有贴纸或印章</small>
                </div>
              </div>
              
              {/* 添加极简黑白主题 */}
              <div 
                className={`${styles.themeOption} ${formData.theme === 'minimalBW' ? styles.selectedTheme : ''}`}
                onClick={() => setFormData({...formData, theme: 'minimalBW'})}
              >
                <div className={styles.themePreview}>
                  <div className={styles.minimalBWPreview}></div>
                </div>
                <div className={styles.themeInfo}>
                  <h4>极简黑白主题</h4>
                  <p>简洁、现代、克制</p>
                  <small>黑白灰为主色调，无多余装饰，纯文字与几何排版突出重点</small>
                </div>
              </div>
              
              <div 
                className={`${styles.themeOption} ${formData.theme === 'freshGreen' ? styles.selectedTheme : ''}`}
                onClick={() => setFormData({...formData, theme: 'freshGreen'})}
              >
                <div className={styles.themePreview}>
                  <div className={styles.freshGreenPreview}></div>
                </div>
                <div className={styles.themeInfo}>
                  <h4>小清新绿色主题</h4>
                  <p>清爽、自然、生机</p>
                  <small>以草绿色、浅蓝色为主，搭配手绘树叶、阳光和水滴图案，轻盈动感</small>
                </div>
              </div>
              
              <div 
                className={`${styles.themeOption} ${formData.theme === 'pixelRetro' ? styles.selectedTheme : ''}`}
                onClick={() => setFormData({...formData, theme: 'pixelRetro'})}
              >
                <div className={styles.themePreview}>
                  <div className={styles.pixelRetroPreview}></div>
                </div>
                <div className={styles.themeInfo}>
                  <h4>复古像素风主题</h4>
                  <p>怀旧、游戏风、趣味</p>
                  <small>8-bit 像素画风，颜色跳脱，使用像素字体和动图元素</small>
                </div>
              </div>
              
              {/* 其他主题选项 */}
              <div 
                className={`${styles.themeOption} ${formData.theme === 'goldenCelebration' ? styles.selectedTheme : ''}`}
                onClick={() => setFormData({...formData, theme: 'goldenCelebration'})}
              >
                <div className={styles.themePreview}>
                  <div className={styles.goldenCelebrationPreview}></div>
                </div>
                <div className={styles.themeInfo}>
                  <h4>金色庆典主题</h4>
                  <p>喜庆、奢华、节日氛围</p>
                  <small>金色、红色为主，动态烟花或礼花效果，字体有光泽渐变</small>
                </div>
              </div>
              
              <div 
                className={`${styles.themeOption} ${formData.theme === 'nightNeon' ? styles.selectedTheme : ''}`}
                onClick={() => setFormData({...formData, theme: 'nightNeon'})}
              >
                <div className={styles.themePreview}>
                  <div className={styles.nightNeonPreview}></div>
                </div>
                <div className={styles.themeInfo}>
                  <h4>夜间霓虹主题</h4>
                  <p>酷炫、科技、城市夜生活</p>
                  <small>深色背景搭配亮丽霓虹灯管风格的文字与边框，流光动画</small>
                </div>
              </div>
              
              <div 
                className={`${styles.themeOption} ${formData.theme === 'fairyForest' ? styles.selectedTheme : ''}`}
                onClick={() => setFormData({...formData, theme: 'fairyForest'})}
              >
                <div className={styles.themePreview}>
                  <div className={styles.fairyForestPreview}></div>
                </div>
                <div className={styles.themeInfo}>
                  <h4>童话森林主题</h4>
                  <p>童趣、梦幻、温暖</p>
                  <small>卡通风格森林背景，有小动物、蘑菇、小屋等元素，柔和颜色</small>
                </div>
              </div>
              
              <div 
                className={`${styles.themeOption} ${formData.theme === 'travelPostcard' ? styles.selectedTheme : ''}`}
                onClick={() => setFormData({...formData, theme: 'travelPostcard'})}
              >
                <div className={styles.themePreview}>
                  <div className={styles.travelPostcardPreview}></div>
                </div>
                <div className={styles.themeInfo}>
                  <h4>旅行明信片主题</h4>
                  <p>开放、探险、世界感</p>
                  <small>仿邮票明信片设计，搭配地图、护照印章、飞机路径动画</small>
                </div>
              </div>
              
              <div 
                className={`${styles.themeOption} ${formData.theme === 'futuristicTech' ? styles.selectedTheme : ''}`}
                onClick={() => setFormData({...formData, theme: 'futuristicTech'})}
              >
                <div className={styles.themePreview}>
                  <div className={styles.futuristicTechPreview}></div>
                </div>
                <div className={styles.themeInfo}>
                  <h4>未来科技主题</h4>
                  <p>高科技、现代、未来感</p>
                  <small>线条构图、光效边框、玻璃拟物风（glassmorphism），UI 像操作系统面板</small>
                </div>
              </div>
              
              {/* 添加黑客帝国主题 */}
              <div 
                className={`${styles.themeOption} ${formData.theme === 'matrixTheme' ? styles.selectedTheme : ''}`}
                onClick={() => setFormData({...formData, theme: 'matrixTheme'})}
              >
                <div className={styles.themePreview}>
                  <div className={styles.matrixThemePreview}></div>
                </div>
                <div className={styles.themeInfo}>
                  <h4>黑客帝国主题</h4>
                  <p>酷炫、神秘、科技感</p>
                  <small>紫色霓虹文字雨效果，黑色背景，营造出电影《黑客帝国》的视觉风格</small>
                </div>
              </div>
            </div>
          </div>
          
          <button type="submit" className={styles.submitButton}>保存更改</button>
        </form>
        
        {message && <p className={styles.message}>{message}</p>}
        
        <div className={styles.previewSection}>
          <h2>预览</h2>
          <div className={styles.preview}>
            <h1>{formData.title}</h1>
            <div>
              <h3>祝福语</h3>
              <div style={{whiteSpace: 'pre-wrap'}}>{formData.wishText || '暂无内容'}</div>
            </div>
            <div>
              <h3>互动区</h3>
              <div>{formData.interactionType === 'like' ? '点赞功能' : '其他互动'}</div>
            </div>
            <div>
              <h3>留言区</h3>
              <div>用户可以在这里留言</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}