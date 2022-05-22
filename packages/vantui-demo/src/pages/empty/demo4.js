/* eslint-disable */
import react from 'react'
import { View } from '@tarojs/components'
import { Empty, Button } from '@antmjs/vantui'

export default function Demo() {
  return (
    <View>
      <Empty description="描述文字">
        <Button round={true} type="danger" class="bottomButton">
          按钮
        </Button>
      </Empty>
    </View>
  )
}
