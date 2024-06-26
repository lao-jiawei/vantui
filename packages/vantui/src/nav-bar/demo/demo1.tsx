import { View } from '@tarojs/components'
import { NavBar, Toast, Notify, Dialog } from '@antmjs/vantui'

export default function Demo() {
  return (
    <View>
      <NavBar
        title="标题"
        leftText="返回"
        rightText="按钮"
        leftArrow
        onClickLeft={() => Toast.show({ message: '点击按钮 返回' })}
        onClickRight={() => Toast.show({ message: '点击按钮 right' })}
      />
      <Toast />
      <Notify id="其他页面test" />
      <Dialog id="其他页面test" />
    </View>
  )
}
