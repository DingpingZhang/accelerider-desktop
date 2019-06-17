# 踩坑笔记

> 注：以下解决方案不一定是最优解，基本是自己临时想的HACK，尚未做详细调查。

## 1. 滚动条背景无法透明问题：

> 设置 `-webkit-scrollbar-track/background: transparent` 属性，但不工作。其背景始终表现为单色，背后的多色内容无法穿透显示。

#### 解决方案：

- 原生css方法无法解决，只能自己用div画一个 `Thumb`。参考：[Github Desktop](https://github.com/desktop/desktop/blob/0ed30be2cece05603ff4f10d9b7c4be241299a7d/app/styles/ui/_list.scss#L25) 。

## 2. 模糊蒙板问题：

> 毛玻璃效果：制作一层透明或半透明蒙板，使其下层元素模糊显示。
> [`backdrop-filter`](https://developer.mozilla.org/en-US/docs/Web/CSS/backdrop-filter) 的伟大愿景是实现这一效果，但是垃圾的效果使其这么多年来一直是“Experimental Features”。`filter` 只能设置本层（作用节点极其后代节点）滤镜效果，无法作用于被其遮挡的元素。

#### 解决方案：

- 将下层元素放置在一个 `div` 中，设置其 `filter: Blur()` 使该层模糊，再在该层元素上方放置一个透明的 `div` 拦截 `onClick` 事件。
- 需要设置模糊层的上层元素的 `z-index:0` 属性，使得上层元素可以置于模糊层上层。（难道设置模糊会提升元素的 `z-index`？）

## 3. 垂直拉伸问题：

> 这是一大类问题：我现在非常迫切地需要css提供一个类似WPF中的 `VerticalAlignment="Stretch" / VerticalContentAlignment="Stretch"` 使容器内元素可以尽可能地占据可获得的空间。

#### 解决方案：

- 我现在只能用过设置父容器 `display: grid; grid-template-rows: 1fr` 来实现这一效果，每次都要这么写，烦死了。

## 4. 虚拟列表的撑大滚动区问题：

> 制作虚拟列表控件时，由于展示元素小于真实数据，故需要用某种“假的”方法撑开父容器的滚动区，使滚动条比例正确显示。

#### 解决方案：

- 我一开始用网上方案，设置一个高度为 `height: items.length * itemHeight` 的 `div` 子元素，发现无法撑开父容器的滚动条。
- 后来我用绝对定位：设置一个 `width:1px; height: 1px; position: absolute; top: items.length * itemHeight` 的 `div`
 才将滚动区撑开。（这个方案太恶心了，我还是想用第一种，`1 x 1` 的 `div` 是什么鬼？）

## 5. 元素 `resize` 事件问题：

> 使用 `element.addEventListener('resize', onResizeCallback)` 不工作。

#### 解决方案：

- TODO