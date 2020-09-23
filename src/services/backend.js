import md5 from "md5";
export default class Backend {
  users = [
    {
      login: "admin",
      pass: "e10adc3949ba59abbe56e057f20f883e",
    },
    {
      login: "user",
      pass: "6c44e5cd17f0019c64b042e4a745412a",
    },
  ];
  news = [
    {
      title: "News 1",
      prew:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur odit veniam maxime ex quis explicabo, quia nam omnis enim tempore.",
      full:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque aliquid assumenda dolorum atque enim suscipit voluptatem quam quod facilis, corporis, nulla, ipsa iste temporibus quas. Distinctio aut quidem saepe at nihil, cupiditate eum, velit nostrum quia ea repudiandae nesciunt expedita ex facere ratione explicabo consequatur totam vero eaque tempore error?",
      author: "user",
      date: 1600861659585,
      status: "new",
    },
    {
      title: "News 2",
      prew:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur odit veniam maxime ex quis explicabo, quia nam omnis enim tempore.",
      full:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque aliquid assumenda dolorum atque enim suscipit voluptatem quam quod facilis, corporis, nulla, ipsa iste temporibus quas. Distinctio aut quidem saepe at nihil, cupiditate eum, velit nostrum quia ea repudiandae nesciunt expedita ex facere ratione explicabo consequatur totam vero eaque tempore error?",
      author: "user",
      date: 1600860759585,
      status: "valid",
    },
    {
      title: "News 3",
      prew:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur odit veniam maxime ex quis explicabo, quia nam omnis enim tempore.",
      full:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque aliquid assumenda dolorum atque enim suscipit voluptatem quam quod facilis, corporis, nulla, ipsa iste temporibus quas. Distinctio aut quidem saepe at nihil, cupiditate eum, velit nostrum quia ea repudiandae nesciunt expedita ex facere ratione explicabo consequatur totam vero eaque tempore error?",
      author: "user",
      date: 1600861539585,
      status: "new",
    },
    {
      title: "News 4",
      prew:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur odit veniam maxime ex quis explicabo, quia nam omnis enim tempore.",
      full:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque aliquid assumenda dolorum atque enim suscipit voluptatem quam quod facilis, corporis, nulla, ipsa iste temporibus quas. Distinctio aut quidem saepe at nihil, cupiditate eum, velit nostrum quia ea repudiandae nesciunt expedita ex facere ratione explicabo consequatur totam vero eaque tempore error?",
      author: "user",
      date: 1600861429585,
      status: "valid",
    },
    {
      title: "News 5",
      prew:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur odit veniam maxime ex quis explicabo, quia nam omnis enim tempore.",
      full:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque aliquid assumenda dolorum atque enim suscipit voluptatem quam quod facilis, corporis, nulla, ipsa iste temporibus quas. Distinctio aut quidem saepe at nihil, cupiditate eum, velit nostrum quia ea repudiandae nesciunt expedita ex facere ratione explicabo consequatur totam vero eaque tempore error?",
      author: "user",
      date: 1600861639585,
      status: "valid",
    },
    {
      title: "News 6",
      prew:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur odit veniam maxime ex quis explicabo, quia nam omnis enim tempore.",
      full:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque aliquid assumenda dolorum atque enim suscipit voluptatem quam quod facilis, corporis, nulla, ipsa iste temporibus quas. Distinctio aut quidem saepe at nihil, cupiditate eum, velit nostrum quia ea repudiandae nesciunt expedita ex facere ratione explicabo consequatur totam vero eaque tempore error?",
      author: "user",
      date: 1600861239585,
      status: "new",
    },
    {
      title: "News 7",
      prew:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur odit veniam maxime ex quis explicabo, quia nam omnis enim tempore.",
      full:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque aliquid assumenda dolorum atque enim suscipit voluptatem quam quod facilis, corporis, nulla, ipsa iste temporibus quas. Distinctio aut quidem saepe at nihil, cupiditate eum, velit nostrum quia ea repudiandae nesciunt expedita ex facere ratione explicabo consequatur totam vero eaque tempore error?",
      author: "user",
      date: 1600861249585,
      status: "valid",
    },
    {
      title: "News 8",
      prew:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur odit veniam maxime ex quis explicabo, quia nam omnis enim tempore.",
      full:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque aliquid assumenda dolorum atque enim suscipit voluptatem quam quod facilis, corporis, nulla, ipsa iste temporibus quas. Distinctio aut quidem saepe at nihil, cupiditate eum, velit nostrum quia ea repudiandae nesciunt expedita ex facere ratione explicabo consequatur totam vero eaque tempore error?",
      author: "user",
      date: 1600861299585,
      status: "new",
    },
    {
      title: "News 9",
      prew:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur odit veniam maxime ex quis explicabo, quia nam omnis enim tempore.",
      full:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque aliquid assumenda dolorum atque enim suscipit voluptatem quam quod facilis, corporis, nulla, ipsa iste temporibus quas. Distinctio aut quidem saepe at nihil, cupiditate eum, velit nostrum quia ea repudiandae nesciunt expedita ex facere ratione explicabo consequatur totam vero eaque tempore error?",
      author: "user",
      date: 1600861339585,
      status: "valid",
    },
    {
      title: "News 10",
      prew:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur odit veniam maxime ex quis explicabo, quia nam omnis enim tempore.",
      full:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque aliquid assumenda dolorum atque enim suscipit voluptatem quam quod facilis, corporis, nulla, ipsa iste temporibus quas. Distinctio aut quidem saepe at nihil, cupiditate eum, velit nostrum quia ea repudiandae nesciunt expedita ex facere ratione explicabo consequatur totam vero eaque tempore error?",
      author: "user",
      date: 1600861569585,
      status: "new",
    },
  ];
  login(login, password) {
    //Коды ошибок
    // 1- неверный логин
    // 2- неверный пароль
    const isUser = this.users.find((item) => item.login === login);
    if (isUser) {
      const isPass = md5(password) === isUser.pass;
      if (isPass) {
        return { status: "success", user: isUser.login };
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
  getNewsList(user=null){
      let result = []
      if(user){
          
      }else{

      }
      return result
  }
}
