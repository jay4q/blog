export type ProjectModel = {
  title: string
  url?: string
  qrcode?: string
}

export const companyData: ProjectModel[] = [
  {
    title: '【Muserverse】服务平台为中小博物馆提供公众数字服务能力',
    qrcode: 'https://7370-spa-0g2njvtnd97eff62-1303873307.tcb.qcloud.la/jay4q/museverse.png',
  },
  {
    title: '【看展览】小程序为文博爱好者提供便捷的看展/探馆索引',
    qrcode: 'https://7370-spa-0g2njvtnd97eff62-1303873307.tcb.qcloud.la/jay4q/kzl.png',
  },
  {
    title: '基于【Museverse】私有化部署的吴文化博物馆小程序',
    qrcode: 'https://7370-spa-0g2njvtnd97eff62-1303873307.tcb.qcloud.la/jay4q/wuzhong.png',
  },
  {
    title: '吴文化博物馆响应式门户网站',
    url: 'https://www.wuzhongmuseum.com/',
  },
  {
    title: '配合上海博物馆《灼烁重现：十五世纪中期景德镇瓷器大展》的H5游戏',
    url: 'https://spa.museshow.cn/shm/zscx/',
  },
  {
    title: '江苏教育博物馆公众号宣传用《古代官场升职记》H5游戏',
    url: 'https://spa.museshow.cn/jsjy-cxg/',
  },
]

export const githubData: ProjectModel[] = [
  {
    title: '腾讯云函数模板，让单个云函数具备并行处理多项业务的能力',
    url: 'https://github.com/jay4q/blitz-func',
  },
  {
    title: 'H5开发常用的UI组件、工具函数集合',
    url: 'https://github.com/jay4q/blitz-libs',
  },
  {
    title: '个人博客😁',
    url: 'https://github.com/jay4q/blog',
  },
]
