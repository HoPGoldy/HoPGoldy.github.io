import { LinkItemProps } from '@/components/LinkItem';
import { ExperienceItemProps } from './components/ExperienceItem';
import { AbilityItemProps } from './components/AbilityItem';
import { ProjectItemProps } from './components/ProjectItem';
import IconJianShu from '@/assets/icon/jianshu.svg';
import IconGithub from '@/assets/icon/github.svg';
import IconEmail from '@/assets/icon/email.svg';
import IconJuejin from '@/assets/icon/juejin.svg';
import IconNpm from '@/assets/icon/npm.svg';
import IconDocker from '@/assets/icon/docker.svg';

export const appConfig: Config = {
  name: 'HoPGoldy',
  bgImages: [
    'https://s1.ax1x.com/2022/07/30/vFVKpT.jpg',
    'https://s1.ax1x.com/2022/07/30/vFVnhV.jpg',
    'https://s1.ax1x.com/2022/07/30/vFVmt0.jpg'
  ],
  avatar: 'https://s1.ax1x.com/2020/03/25/8jTKyV.jpg',
  leftIntroduce: {
    title: '自我介绍',
    content: '我是一名前端开发者，喜欢工程化的前端项目，注释不足恐惧症。喜欢分享，热衷于使用掌握的技术把脑子里的新鲜点子实现出来。'
  },
  rightIntroduce: {
    title: '发展方向',
    content: '追求的不应是某种技术，技术只是实现目标的途径，打好基础，熟悉自己掌握的武器，了解并拥抱新的时代。'
  },
  links: [
    {
      label: '掘金 - 技术总结',
      src: 'https://juejin.cn/user/3825956197783367/posts',
      icon: IconJuejin
    },
    {
      label: '简书 - 个人博客',
      src: 'https://www.jianshu.com/u/3ee5572a4346',
      icon: IconJianShu
    },
    {
      label: 'github.com/hopgoldy',
      src: 'https://github.com/HoPGoldy',
      icon: IconGithub
    },
    {
      label: 'hopgoldy@gmail.com',
      src: 'mailto:hopgoldy@gmail.com?subject=hello hopgoldy!',
      icon: IconEmail
    },
  ],
  experiences: [
    {
      title: '太湖云计算',
      date: '2020.09 至今',
      office: '前端开发',
      content: '江苏太湖云计算是一家以技术创新改进城市环境的高新技术企业。本人主要负责 pc 端新项目的开发及框架设计搭建工作，同时参与其他小程序及移动端的项目开发。接触 vue3、taro、react SSR 技术栈。',
      position: '中国, 江苏, 无锡'
    },
    {
      title: '聚光科技',
      date: '2019.07 - 2020.09',
      office: '前端开发',
      content: '聚光科技是一家致力于环保的上市公司，本人主要负责菏泽项目中的前端开发与维护工作，在此期间承担了接入整个菏泽市环保监控视频微服务的开发工作。并开始使用 node 制作工具，接触并掌握了 react 及 react-native 技术栈。开始使用 typescript 编写代码。',
      position: '中国, 山东, 菏泽'
    },
    {
      title: '聚光科技',
      date: '2018.11 - 2019.07',
      office: '实习',
      content: '加入聚光后开始系统的学习前端工程化，对于 webpack、babel 及 CI/CD 有了具体的认识与应用。接触 vue 相关技术栈，于此同时逐渐学习了 echarts、leaflet 等常用模块的使用。',
      position: '中国, 山东, 菏泽'
    },
    {
      title: '菏泽学院',
      date: '2018.9 - 2018.11',
      office: '大四',
      content: '开始学习 python 及微信小程序，深入学习 DOM 知识。在此期间开源了数个基于 requests 的爬虫，上线了一款用于兼职工作的微信小程序。',
      position: '中国, 山东, 菏泽'
    },
    {
      title: '菏泽学院',
      date: '2017.9 - 2018.9',
      office: '大三',
      content: '开始学习 git 并使用 github 管理自己的项目。随后在 Github Page 上线了自己的 hexo 静态博客，至今已更新百余篇，同时系统的学习了 nodejs、H5、CSS3 等前端基础技术。',
      position: '中国, 山东, 菏泽'
    },
    {
      title: '菏泽学院',
      date: '2015.9 - 2017.9',
      office: '大一、大二',
      content: '学习了 C++, C#, Java 等主流语言，了解了 OOP 开发模式，开始学习使用 Ubuntu 和 centOS。',
      position: '中国, 山东, 菏泽'
    }
  ],
  abilitys: [
    {
      title: '前端框架',
      items:[
        { title: 'vue / vue-router / vuex', star: 4 },
        { title: 'react / react-router / hook', star: 4 },
        { title: 'solidjs', star: 3 },
        { title: 'react-native', star: 3 },
        { title: 'nextjs', star: 3 },
        { title: 'taro', star: 2 },
      ]
    },
    {
      title: '工程化',
      items: [
        { title: 'typescript', star: 4 },
        { title: 'node', star: 3 },
        { title: 'rollup', star: 3 },
        { title: 'vite', star: 3 },
        { title: 'jest', star: 3 },
        { title: 'pug', star: 3 },
        { title: 'stylus', star: 3 },
        { title: 'postcss', star: 3 },
        { title: 'scss', star: 3 },
        { title: 'webpack', star: 2 },
      ]
    },
    {
      title: '组件库',
      items: [
        { title: 'element-ui', star: 5 },
        { title: 'antd / proComponent', star: 5 },
        { title: 'vuetify', star: 4 },
        { title: 'vant / react-vant', star: 4 }
      ]
    },
    {
      title: '第三方包',
      items: [
        { title: 'tailwinds', star: 4 },
        { title: 'koa', star: 4 },
        { title: 'ts-node', star: 4 },
        { title: 'dayjs', star: 4 },
        { title: 'momentjs', star: 4 },
        { title: 'echarts', star: 4 },
        { title: 'high-charts', star: 3 },
        { title: 'leaflet', star: 3 },
        { title: 'lokijs', star: 3 },
      ]
    },
    {
      title: '其他',
      items: [
        { title: 'Git / Git flow', star: 4 },
        { title: 'Markdown', star: 4 },
        { title: 'Ubuntu', star: 3 },
        { title: 'Python3', star: 3 },
        { title: 'Docker', star: 3 },
        { title: 'Docker Compose', star: 2 },
        { title: 'Kubernetes', star: 1 },
      ]
    }
  ],
  projects: [
    {
      title: 'cube-diary',
      content: '简单好看的移动端日记本 app，数据自托管，使用 nextjs 搭建。',
      badges: [
        { label: 'powered by', value:'nextjs' },
        { label: 'types', value:'typescript', color: 'bg-sky-600' },
        { label: 'ui', value:'react-vant', color: 'bg-orange-600' },
        { label: 'support', value:'dark-theme' },
        { label: 'css', value:'tailwind', color: 'bg-cyan-600' },
      ],
      type: 'web 应用',
      pic: 'https://s1.ax1x.com/2022/05/11/OdpYdg.gif',
      src: 'https://github.com/HoPGoldy/cube-diary'
    },
    {
      title: 'google-font-splitter',
      content: '将 google-font 提供的在线字体文件下载至本地的命令行工具，自动下载字体分片文件并修正引入链接。',
      badges: [
        { label: 'powered by', value:'commander' },
        { label: 'types', value:'typescript', color: 'bg-sky-600' },
        { label: 'npm', value:'v1.0.0', color: 'bg-cyan-600' },
      ],
      type: '命令行工具',
      pic: 'https://s1.ax1x.com/2022/07/28/vC6J9x.png',
      src: 'https://www.npmjs.com/package/google-font-splitter'
    },
    {
      title: 'auto-git',
      content: '自动化项目部署工具, 支持命令式配置 Git Webhook, 自动拉取项目并执行指定 shell 脚本来完成 CI 工作。',
      badges: [
        { label: 'powered by', value:'commander' },
        { label: 'backend', value:'express' },
        { label: 'npm', value:'v1.2.5', color: 'bg-cyan-600' },
      ],
      type: '命令行工具',
      pic: 'https://s1.ax1x.com/2020/03/25/8jTleU.gif',
      src: 'https://www.npmjs.com/package/@hopgoldy/auto-git'
    },
    {
      title: 'screeps-commander',
      content: '用于和 screeps 控制台进行交互的 web 应用，基于 Vue + TypeScript，使用 WebScoket 进行通信。',
      badges: [
        { label: 'powered by', value:'vue2' },
        { label: 'types', value:'typescript', color: 'bg-sky-600' },
        { label: 'ui', value:'vuetify', color: 'bg-orange-600' },
      ],
      type: 'web 应用',
      pic: 'https://s1.ax1x.com/2020/03/25/8jHgqf.png',
      src: 'https://github.com/HoPGoldy/screeps-commander'
    },
  ],
  releaseLinks: [
    {
      label: 'www.npmjs.com',
      src: 'https://www.npmjs.com/~hopgoldy', 
      icon: IconNpm
    },
    {
      label: 'hub.docker.com',
      src: 'https://hub.docker.com/u/hopgoldy', 
      icon: IconDocker
    },
    {
      label: 'github.com',
      src: 'https://github.com/HoPGoldy?tab=repositories', 
      icon: IconGithub
    },
  ]
}

interface Config {
  name: string
  bgImages: string[],
  avatar: string
  leftIntroduce: {
    title: string
    content: string
  }
  rightIntroduce: {
    title: string
    content: string
  }
  links: LinkItemProps[]
  experiences: ExperienceItemProps[]
  abilitys: Array<{
    title: string
    items: AbilityItemProps[]
  }>
  projects: ProjectItemProps[]
  releaseLinks: LinkItemProps[]
}