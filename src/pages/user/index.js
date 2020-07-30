import Taro, { Component } from "@tarojs/taro";
import { View, Text } from "@tarojs/components";
import "./index.css";

export default class User extends Component {
  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  config = {
    navigationBarTitleText: "个人中心",
  };

  render() {
    return (
      <View className="user">
        <Text>个人中心</Text>
      </View>
    );
  }
}
