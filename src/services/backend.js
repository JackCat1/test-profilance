import md5 from "md5";
import {base} from './firebase' 
export default class Backend {
  database={}
  
  constructor(){    
    this.database = base
  }
  users = [
    {
      login: "admin",
      pass: "e10adc3949ba59abbe56e057f20f883e",
      role:'admin'
    },
    {
      login: "user1",
      pass: "6c44e5cd17f0019c64b042e4a745412a",
      role:'user'
    },
  ];
  news = [
    {
      id:1,
      title: "News 1",
      prew:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur odit veniam maxime ex quis explicabo, quia nam omnis enim tempore.",
      full:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque aliquid assumenda dolorum atque enim suscipit voluptatem quam quod facilis, corporis, nulla, ipsa iste temporibus quas. Distinctio aut quidem saepe at nihil, cupiditate eum, velit nostrum quia ea repudiandae nesciunt expedita ex facere ratione explicabo consequatur totam vero eaque tempore error?",
      author: "user1",
      date: 1600861659585,
      status: "new",
    },
    {
      id:2,
      title: "News 2",
      prew:
        "Lorem ipsum dolor sit amet, текст для поиска  consectetur adipisicing elit. Consequatur odit veniam maxime ex quis explicabo, quia nam omnis enim tempore.",
      full:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque aliquid assumenda dolorum atque enim suscipit voluptatem quam quod facilis, corporis, nulla, ipsa iste temporibus quas. Distinctio aut quidem saepe at nihil, cupiditate eum, velit nostrum quia ea repudiandae nesciunt expedita ex facere ratione explicabo consequatur totam vero eaque tempore error?",
      author: "user1",
      date: 1600860759585,
      status: "valid",
    },
    {
      id:3,
      title: "News 3",
      prew:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur odit veniam maxime ex quis explicabo, quia nam omnis enim tempore.",
      full:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque aliquid assumenda dolorum atque enim suscipit voluptatem quam quod facilis, corporis, nulla, ipsa iste temporibus quas. Distinctio aut quidem saepe at nihil, cupiditate eum, velit nostrum quia ea repudiandae nesciunt expedita ex facere ratione explicabo consequatur totam vero eaque tempore error?",
      author: "user1",
      date: 1600861539585,
      status: "new",
    },
    {
      id:4,
      title: "News 4 текст",
      prew:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur odit veniam maxime ex quis explicabo, quia nam omnis enim tempore.",
      full:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque aliquid assumenda dolorum atque enim suscipit voluptatem quam quod facilis, corporis, nulla, ipsa iste temporibus quas. Distinctio aut quidem saepe at nihil, cupiditate eum, velit nostrum quia ea repudiandae nesciunt expedita ex facere ratione explicabo consequatur totam vero eaque tempore error?",
      author: "user1",
      date: 1600861429585,
      status: "valid",
    },
    {
      id:5,
      title: "News 5",
      prew:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur odit veniam maxime ex quis explicabo, quia nam omnis enim tempore.",
      full:
        "Lorem ipsum dolor sit amet consectetur,для поиска  adipisicing elit. Itaque aliquid assumenda dolorum atque enim suscipit voluptatem quam quod facilis, corporis, nulla, ipsa iste temporibus quas. Distinctio aut quidem saepe at nihil, cupiditate eum, velit nostrum quia ea repudiandae nesciunt expedita ex facere ratione explicabo consequatur totam vero eaque tempore error?",
      author: "user1",
      date: 1600861639585,
      status: "valid",
    },
    {
      id:6,
      title: "News 6",
      prew:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur odit veniam maxime ex quis explicabo, quia nam omnis enim tempore.",
      full:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque aliquid assumenda dolorum atque enim suscipit voluptatem quam quod facilis, corporis, nulla, ipsa iste temporibus quas. Distinctio aut quidem saepe at nihil, cupiditate eum, velit nostrum quia ea repudiandae nesciunt expedita ex facere ratione explicabo consequatur totam vero eaque tempore error?",
      author: "user1",
      date: 1600861239585,
      status: "new",
    },
    {
      id:7,
      title: "News 7",
      prew:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur odit veniam maxime ex quis explicabo, quia nam omnis enim tempore.",
      full:
        "Lorem ipsum dolor sit amet consectetur, поиска adipisicing elit. Itaque aliquid assumenda dolorum atque enim suscipit voluptatem quam quod facilis, corporis, nulla, ipsa iste temporibus quas. Distinctio aut quidem saepe at nihil, cupiditate eum, velit nostrum quia ea repudiandae nesciunt expedita ex facere ratione explicabo consequatur totam vero eaque tempore error?",
      author: "user1",
      date: 1600861249585,
      status: "valid",
    },
    {
      id:8,
      title: "News 8",
      prew:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur odit veniam maxime ex quis explicabo, quia nam omnis enim tempore.",
      full:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque aliquid assumenda dolorum atque enim suscipit voluptatem quam quod facilis, corporis, nulla, ipsa iste temporibus quas. Distinctio aut quidem saepe at nihil, cupiditate eum, velit nostrum quia ea repudiandae nesciunt expedita ex facere ratione explicabo consequatur totam vero eaque tempore error?",
      author: "user2",
      date: 1600861299585,
      status: "new",
    },
    {
      id:9,
      title: "News 9",
      prew:
        "Lorem ipsum dolor sit amet, consectetur текст для adipisicing elit. Consequatur odit veniam поиска  maxime ex quis explicabo, quia nam omnis enim tempore.",
      full:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque aliquid assumenda dolorum atque enim suscipit voluptatem quam quod facilis, corporis, nulla, ipsa iste temporibus quas. Distinctio aut quidem saepe at nihil, cupiditate eum, velit nostrum quia ea repudiandae nesciunt expedita ex facere ratione explicabo consequatur totam vero eaque tempore error?",
      author: "user2",
      date: 1600861339585,
      status: "valid",
    },
    {
      id:10,
      title: "News 10",
      prew:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur odit veniam maxime ex quis explicabo, quia nam omnis enim tempore.",
      full:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque aliquid assumenda dolorum atque enim suscipit voluptatem quam quod facilis, corporis, nulla, ipsa iste temporibus quas. Distinctio aut quidem saepe at nihil, cupiditate eum, velit nostrum quia ea repudiandae nesciunt expedita ex facere ratione explicabo consequatur totam vero eaque tempore error?",
      author: "user2",
      date: 1600861569585,
      status: "new",
    },
  ];
  async login(login, password) {
    //Коды ошибок
    // 1- неверный логин
    // 2- неверный пароль
    let userBase=null
    try{
      userBase = await base.fetch('users',{})
    }
    catch(e){
      return { status: "error", msg: "Сервис временно недоступен. Попробуйте позже", code: 2 };

    }
    if(userBase){
      const isUser = this.users.find((item) => item.login === login);
      if (isUser) {
        const isPass = md5(password) === isUser.pass;
        if (isPass) {
          return { status: "success", user: {login:isUser.login,role:isUser.role} };
        } else {
          return { status: "error", msg: "Указан неверный пароль", code: 2 };
        }
      } else {
        return {
          status: "error",
          msg: "Пользователь не найден. Проверьте правильность логина.",
          code: 1,
        };
      }
    }
  }
  async getUser(user){
    try{
      const users = await base.fetch('users',{})
      const userInfo = users.find(item=>item.login===user)
      if(userInfo){
        return userInfo
      }else{
        return null
      }
    }
    catch(e){
      return null
    }
  }
  async getNewsList(user=null){
      const sortNews = (a,b)=>{
        if(a.date>b.date){
          return -1
        }
        if(a.date<b.date){
          return 1
        }
        return 0
      }
      let news = await base.fetch('news',{context:this,asArray:true})         
      if(Array.isArray(news)){
        let result = news.filter(item=>item.status==='valid')
        if(user){
          const userInfo = await this.getUser(user)
          if(userInfo){
            if(userInfo.role==='admin'){
              const newNews = news.filter(item=>item.status==='new')
              result = [...result,...newNews]
            }else{
              const newUserNews = news.filter(item=>item.status==='new'&&item.author===userInfo.login)
              result = [...result,...newUserNews]
            }
          }          
        }
        if(result.length>0) result.sort(sortNews)
        return result
      }
  }
  async addNews(newsFields){
    const {title,prew,full,user} = newsFields
    const userInfo = await this.getUser(user)
    const newsItem = {
      id:Date.now()+user,
      title,
      prew,
      full,
      author:user,
      date:Date.now(),
      status:userInfo.role==='admin'?'valid':'new'
    }
    await base.push('news',{data:newsItem})
    
    return this.getNewsList(user)

  }
  async delNews(newsId,user){
    const userInfo = await this.getUser(user)
    if(userInfo && userInfo.role==='admin'){
      const news = await base.fetch('news',{})
      const baseId = Object.keys(news).find(key=>news[key]['id']===newsId)
      if(baseId){
        await base.remove('news/'+baseId)
      }
    }    
    return this.getNewsList(user)
  }
  async checkNews(newsId,user){
    const userInfo = await this.getUser(user)
    if(userInfo && userInfo.role==='admin'){
      const news = await base.fetch('news',{})
      const baseId = Object.keys(news).find(key=>news[key]['id']===newsId)
      if(baseId){
        await base.update('news/'+baseId,{data:{status:'valid'}})
      }      
    }
    return this.getNewsList(user)
  }
  async search(text='',user=null){
    const newsList = await this.getNewsList(user)
    if(text){
      const searchList = newsList.filter(item=>item.title.toLocaleLowerCase().includes(text) || item.prew.toLocaleLowerCase().includes(text))
      return searchList
    }
    return newsList
  }
}
