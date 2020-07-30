import Taro, { Component } from "@tarojs/taro";
import { View, Text, Button } from "@tarojs/components";

export default class Login extends Component {
  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  config = {
    navigationBarTitleText: "登录",
  };
  onLogin = () => {
    Taro.switchTab({
      url: "/pages/home/index",
    });
  };

  render() {
    return (
      <View className="index">
        <Text>登录页面</Text>
        <Button onClick={this.onLogin}>开始登录</Button>
      </View>
    );
  }
}
