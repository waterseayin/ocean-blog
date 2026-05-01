export const projects = [
  {
    title: "CodeArena 在线编程平台",
    description: "一个支持多语言在线判题、实时协作的编程竞赛平台，采用微服务架构，日活用户 5w+。",
    tags: ["React", "Go", "Docker", "K8s"],
    category: "fullstack",
    image: null,
  },
  {
    title: "DevFlow 低代码工作流引擎",
    description: "可视化拖拽式工作流编排工具，支持 20+ 节点类型，可一键生成后端代码。",
    tags: ["Vue", "Node.js", "MongoDB", "Redis"],
    category: "fullstack",
    image: null,
  },
  {
    title: "阿海AI助手 Chrome 插件",
    description: "基于 LLM 的浏览器智能助手，支持页面总结、代码解释、划词翻译等功能。",
    tags: ["TypeScript", "React", "LLM", "Chrome API"],
    category: "ai",
    image: null,
  },
  {
    title: "CodeShare 代码片段分享社区",
    description: "程序员代码片段管理与分享平台，支持语法高亮、版本管理、社区互动。",
    tags: ["Next.js", "PostgreSQL", "Prisma"],
    category: "frontend",
    image: null,
  },
  {
    title: "TechBlog 技术博客系统",
    description: "极简风格的静态博客生成器，支持 MDX、RSS、全文搜索，Lighthouse 满分。",
    tags: ["Next.js", "MDX", "TailwindCSS"],
    category: "frontend",
    image: null,
  },
  {
    title: "运维监控面板",
    description: "服务器资源实时监控与告警系统，支持自定义仪表盘和多渠道通知。",
    tags: ["Python", "WebSocket", "InfluxDB", "Grafana"],
    category: "backend",
    image: null,
  },
];

export const categories = [
  { key: "all", label: "全部" },
  { key: "fullstack", label: "全栈项目" },
  { key: "frontend", label: "前端" },
  { key: "backend", label: "后端" },
  { key: "ai", label: "AI" },
];
