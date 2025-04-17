import { defineConfig } from 'vitepress'

export default defineConfig({
  title: '团队介绍',
  description: '我们的团队成员展示页',
  themeConfig: {
    team: {
      sections: [
        {
          title: '核心成员',
          members: [
            {
              name: '张三',
              title: '前端工程师',
              avatar: '/avatars/zhangsan.jpg',
              links: [{ icon: 'github', link: 'https://github.com/zhangsan' }]
            },
            {
              name: '李四',
              title: '后端架构师',
              avatar: '/avatars/lisi.jpg'
            }
          ]
        },
        {
          title: '顾问',
          members: [
            {
              name: '王五',
              title: '行业顾问',
              avatar: '/avatars/wangwu.jpg'
            }
          ]
        }
      ]
    }
  }
})
