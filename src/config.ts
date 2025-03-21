import { LinkItemProps } from "@/components/LinkItem";
import { ExperienceItemProps } from "./components/ExperienceItem";
import { AbilityItemProps } from "./components/AbilityItem";
import { ProjectItemProps } from "./components/ProjectItem";
import IconJianShu from "@/assets/icon/jianshu.svg";
import IconGithub from "@/assets/icon/github.svg";
import IconEmail from "@/assets/icon/email.svg";
import IconJuejin from "@/assets/icon/juejin.svg";
import IconNpm from "@/assets/icon/npm.svg";
import IconDocker from "@/assets/icon/docker.svg";

export const appConfig: Config = {
  name: "HoPGoldy",
  bgImages: [
    "https://s1.ax1x.com/2022/07/30/vFVKpT.jpg",
    "https://s1.ax1x.com/2022/07/30/vFVnhV.jpg",
    "https://s1.ax1x.com/2022/07/30/vFVmt0.jpg",
  ],
  avatar: "https://s1.ax1x.com/2020/03/25/8jTKyV.jpg",
  leftIntroduce: {
    title: "自我介绍",
    content:
      "我是一名前端开发者，喜欢工程化的前端项目，注释不足恐惧症。喜欢分享，热衷于使用掌握的技术把脑子里的新鲜点子实现出来。",
  },
  rightIntroduce: {
    title: "发展方向",
    content:
      "追求的不应是某种技术，技术只是实现目标的途径，打好基础，熟悉自己掌握的武器，了解并拥抱新的时代。",
  },
  links: [
    {
      label: "掘金 - 技术总结",
      src: "https://juejin.cn/user/3825956197783367/posts",
      icon: IconJuejin,
    },
    {
      label: "简书 - 个人博客",
      src: "https://www.jianshu.com/u/3ee5572a4346",
      icon: IconJianShu,
    },
    {
      label: "github.com/hopgoldy",
      src: "https://github.com/HoPGoldy",
      icon: IconGithub,
    },
    {
      label: "hopgoldy@gmail.com",
      src: "mailto:hopgoldy@gmail.com?subject=hello hopgoldy!",
      icon: IconEmail,
    },
  ],
  experiences: [
    {
      title: "SWO 微钉科技",
      date: "2024.3 至今",
      office: "产品前端架构、技术经理",
      content:
        "SoftwareOne 是全球化的云服务解决方案供应商，本人负责核心产品 SERVICEME 的前端架构、产品设计、项目管理及团队建设工作，该产品整合了 AI 的基础能力并服务化，内部集成了知识库 RAG 等功能。涉及 PC 端、H5 端、浏览器插件等项目，并提供 JS SDK 和核心组件以支持交付团队的开发工作。",
      position: "中国, 江苏, 无锡",
    },
    {
      title: "基本粒子",
      date: "2022.11 - 2024.3",
      office: "高级前端开发",
      content:
        "基本粒子是一家研发城市数字化产品的公司。本人负责多个核心产品的前端开发和前端团队组建工作。在工作期间实践了微前端、OAuth2、ArcGIS 等技术，并落地为一个通用的前端低代码底座。",
      position: "中国, 江苏, 无锡",
    },
    {
      title: "太湖云计算",
      date: "2020.09 - 2022.11",
      office: "中级前端开发",
      content:
        "江苏太湖云计算是一家以技术创新改进城市环境的高新技术企业。本人主要负责前端项目的开发及框架设计搭建工作，同时参与其他小程序及移动端的项目开发。接触并实践 vue3、taro、react SSR 技术栈。",
      position: "中国, 江苏, 无锡",
    },
    {
      title: "聚光科技",
      date: "2018.07 - 2020.09",
      office: "前端开发",
      content:
        "聚光科技是一家致力于环保的上市公司。加入聚光后本人开始系统的学习 vue、react 及前端工程化技术，管理 CICD 流水线并参与运维 k8s 集群服务。实习转正后作为前端工程师开始维护整个交付解决方案的前端部分，涉及 PC 端、APP 端共计十余个前端项目。",
      position: "中国, 山东, 菏泽",
    },
    {
      title: "菏泽学院",
      date: "2017.9 - 2019.9",
      office: "大四",
      content:
        "学习了 C++,，C#,，Java， python 以及 nodejs。开源了数个基于 requests 的爬虫，学习 git 并使用 github 管理自己的项目，上线了一款用于兼职工作的微信小程序。于大三开始更新自己的技术博客，至今已更新百余篇。",
      position: "中国, 山东, 菏泽",
    },
  ],
  abilitys: [
    {
      title: "前端",
      items: [
        { title: "vue / vue-router / vuex", star: 4 },
        { title: "react / react-router / hook", star: 4 },
        { title: "solidjs", star: 3 },
        { title: "react-native", star: 3 },
        { title: "nextjs", star: 3 },
        { title: "taro", star: 2 },
      ],
    },
    {
      title: "后端",
      items: [
        { title: "nestjs", star: 4 },
        { title: "koa", star: 4 },
        { title: "docker", star: 4 },
        { title: "prisma", star: 3 },
        { title: "lokijs", star: 3 },
      ],
    },
    {
      title: "工程化",
      items: [
        { title: "typescript", star: 4 },
        { title: "prettier", star: 3 },
        { title: "rollup", star: 3 },
        { title: "vite", star: 3 },
        { title: "jest", star: 3 },
        { title: "postcss", star: 3 },
        { title: "webpack", star: 2 },
      ],
    },
    {
      title: "领域技能",
      items: [
        { title: "qiankun", star: 4 },
        { title: "arcgis", star: 4 },
        { title: "leaflet", star: 3 },
        { title: "websocket", star: 3 },
        { title: "webRTC", star: 2 },
      ],
    },
    {
      title: "工具",
      items: [
        { title: "Git / Git flow", star: 4 },
        { title: "Ubuntu", star: 3 },
        { title: "Python3", star: 3 },
        { title: "Kubernetes", star: 2 },
      ],
    },
  ],
  projects: [
    {
      title: "cube-diary",
      content: "简单好看的移动端日记本 app，数据自托管，使用 nextjs 搭建。",
      badges: [
        { label: "powered by", value: "nextjs" },
        { label: "types", value: "typescript", color: "bg-sky-600" },
        { label: "ui", value: "react-vant", color: "bg-orange-600" },
        { label: "support", value: "dark-theme" },
        { label: "css", value: "tailwind", color: "bg-cyan-600" },
      ],
      type: "web 应用",
      pic: "https://s1.ax1x.com/2022/05/11/OdpYdg.gif",
      src: "https://github.com/HoPGoldy/cube-diary",
    },
    {
      title: "google-font-splitter",
      content:
        "将 google-font 提供的在线字体文件下载至本地的命令行工具，自动下载字体分片文件并修正引入链接。",
      badges: [
        { label: "powered by", value: "commander" },
        { label: "types", value: "typescript", color: "bg-sky-600" },
        { label: "npm", value: "v1.0.0", color: "bg-cyan-600" },
      ],
      type: "命令行工具",
      pic: "https://s1.ax1x.com/2022/07/28/vC6J9x.png",
      src: "https://www.npmjs.com/package/google-font-splitter",
    },
    {
      title: "auto-git",
      content:
        "自动化项目部署工具, 支持命令式配置 Git Webhook, 自动拉取项目并执行指定 shell 脚本来完成 CI 工作。",
      badges: [
        { label: "powered by", value: "commander" },
        { label: "backend", value: "express" },
        { label: "npm", value: "v1.2.5", color: "bg-cyan-600" },
      ],
      type: "命令行工具",
      pic: "https://s1.ax1x.com/2020/03/25/8jTleU.gif",
      src: "https://www.npmjs.com/package/@hopgoldy/auto-git",
    },
    {
      title: "screeps-commander",
      content:
        "用于和 screeps 控制台进行交互的 web 应用，基于 Vue + TypeScript，使用 WebScoket 进行通信。",
      badges: [
        { label: "powered by", value: "vue2" },
        { label: "types", value: "typescript", color: "bg-sky-600" },
        { label: "ui", value: "vuetify", color: "bg-orange-600" },
      ],
      type: "web 应用",
      pic: "https://s1.ax1x.com/2020/03/25/8jHgqf.png",
      src: "https://github.com/HoPGoldy/screeps-commander",
    },
  ],
  releaseLinks: [
    {
      label: "www.npmjs.com",
      src: "https://www.npmjs.com/~hopgoldy",
      icon: IconNpm,
    },
    {
      label: "hub.docker.com",
      src: "https://hub.docker.com/u/hopgoldy",
      icon: IconDocker,
    },
    {
      label: "github.com",
      src: "https://github.com/HoPGoldy?tab=repositories",
      icon: IconGithub,
    },
  ],
  filing: "鲁ICP备2023017297号-1",
};

interface Config {
  name: string;
  bgImages: string[];
  avatar: string;
  leftIntroduce: {
    title: string;
    content: string;
  };
  rightIntroduce: {
    title: string;
    content: string;
  };
  links: LinkItemProps[];
  experiences: ExperienceItemProps[];
  abilitys: Array<{
    title: string;
    items: AbilityItemProps[];
  }>;
  projects: ProjectItemProps[];
  releaseLinks: LinkItemProps[];
  /** 一个字符串，例如京ICP备12345678号，开启后会显示在页面最下方 */
  filing?: string;
}
