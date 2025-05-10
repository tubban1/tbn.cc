# 祝福页面系统数据结构文档

## 数据库表结构

### 1. pages 表
存储祝福页面的基本信息

| 字段名 | 类型 | 描述 |
|--------|------|------|
| id | INT | 自增主键 |
| uid | VARCHAR(255) | 页面唯一标识符 |
| title | VARCHAR(255) | 页面标题 |
| content | TEXT | 页面内容（JSON格式） |
| is_assigned | BOOLEAN | 页面是否已分配 |
| created_at | TIMESTAMP | 创建时间 |
| updated_at | TIMESTAMP | 更新时间 |

### 2. page_views 表
记录页面访问信息

| 字段名 | 类型 | 描述 |
|--------|------|------|
| id | INT | 自增主键 |
| page_uid | VARCHAR(255) | 关联的页面UID |
| ip_address | VARCHAR(255) | 访问者IP地址 |
| user_agent | TEXT | 访问者用户代理信息 |
| created_at | TIMESTAMP | 访问时间 |

### 3. comments 表
存储页面评论

| 字段名 | 类型 | 描述 |
|--------|------|------|
| id | INT | 自增主键 |
| page_uid | VARCHAR(255) | 关联的页面UID |
| author | VARCHAR(255) | 评论作者名称 |
| content | TEXT | 评论内容 |
| created_at | TIMESTAMP | 评论时间 |

## 数据结构

### 页面内容JSON结构
```json
{
  "wishText": "祝福文字内容",
  "name": "祝福对象名称",
  "greeting": "问候语",
  "interaction": "互动提示文字",
  "theme": "页面主题名称"
}