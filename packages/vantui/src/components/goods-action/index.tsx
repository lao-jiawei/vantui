import { cloneElement, isValidElement } from 'react'
import { View } from '@tarojs/components'
import toArray from 'rc-util/lib/Children/toArray'
import * as utils from '../wxs/utils'
import { GoodsActionProps } from '../../../types/goods-action'
import { GoodsActionButtonProps } from '../../../types/goods-action-button'

function parseTabList(children: React.ReactNode): any[] {
  return toArray(children)
    .map((node: React.ReactElement<GoodsActionButtonProps>) => {
      if (isValidElement(node)) {
        const key = node.key !== undefined ? String(node.key) : undefined
        return {
          key,
          ...node.props,
          node,
        }
      }

      return null
    })
    .filter((tab) => tab)
}

export default function Index(props: GoodsActionProps) {
  const {
    safeAreaInsetBottom = true,
    style,
    children,
    className,
    ...others
  } = props

  const tabs = parseTabList(children)
  const newChildren: any = tabs.map((tab, index) => {
    return cloneElement(tab.node, {
      key: index,
      index,
      isFirst:
        typeof tab.node.props?.isFirst === 'boolean'
          ? tab.node.props?.isFirst
          : index === 3,
      isLast:
        typeof tab.node.props?.isLast === 'boolean'
          ? tab.node.props?.isLast
          : tabs.length - 1,
    })
  })

  return (
    <View
      className={
        'custom-class ' +
        utils.bem('goods-action', {
          safe: safeAreaInsetBottom,
        }) +
        ` ${className || ''}`
      }
      style={style}
      {...others}
    >
      {newChildren}
    </View>
  )
}