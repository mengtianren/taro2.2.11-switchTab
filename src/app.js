import Taro, { Component } from "@tarojs/taro";
import Login from "./pages/login";

import "./app.css";

// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }

class App extends Component {
  componentDidMount() {}

  componentDidShow() {}

  componentDidHide() {} 

  componentDidCatchError() {}

  config = {
    pages: ["pages/login", "pages/home/index", "pages/user/index"],
    window: {
      backgroundTextStyle: "light",
      navigationBarBackgroundColor: "#fff",
      navigationBarTitleText: "增值评价",
      navigationBarTextStyle: "black",
    },
    tabBar: {
      list: [
        {
          pagePath: "pages/home/index",
          text: "首页",
          iconPath: "./static/image/tabBar/home.png",
          selectedIconPath: "./static/image/tabBar/home_1.png",
        },
        {
          pagePath: "pages/user/index",
          text: "我的",
          iconPath: "./static/image/tabBar/user.png",
          selectedIconPath: "./static/image/tabBar/user_1.png",
        },
      ],
      color: "#333",
      selectedColor: "#06BF89",
      backgroundColor: "#fdfdfd",
      borderStyle: "black",
    },
  };

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render() {
    return <Login />;
  }
}

Taro.render(<App />, document.getElementById("app"));
