# 第一次模仿网页，这是我前端的正式开始
---
date: 2018-03-30 15:47
status: public
title: README.md
---

# test说明
### 主要是为完成test过程中的问题进行说明
1.运行环境：webstorm
===
2.运行：
===
1.html：
---
*   label for标签：for属性规定label与哪个表单元素绑定，与id名称匹配。
_____

*   wrapper：包装，一般只有width没有height类型，顾名思义，就是为了它下面的所有元素进行封装
____
*   li：利用li标签添加小图标。
____
  
2.css:
---
*   在使用标签选择器时，应该避免因标签结构的重叠导致了css设置的重叠。
____
*   熟悉了在页面布局中的统一与分割的思路，使页面更加美化、整洁。
____
*   熟悉了transition的使用方法及其属性。参数：transition property（属性名称），transition duration（完成时间），transition timing function（速度曲线），transition delay（延迟时间）。
____
*   熟悉了box-shadow属性。参数：h-shadow，v-shadow，blur（模糊程度）。
___
*   了解了z-index属性的复杂程度，目前还在详细了解中，见到了position为relative对z-index的影响。absolute时，不占据空间，可实现漂浮效果。relative时，占据空间，即使使用left|top、margin进行移位，其原有空间始终被占有。
___

3.javascript:
---
*   获取DOM元素，进一步熟悉了几种不同方法返回类型的不同，jqurey返回的是jqurey对象，拥有其独特的属性和方法。熟悉了jqurey选择器，熟悉常用的文档操作、css操作，了解了AJAX的基本原理，及其与mock.js搭配使用返回模拟数据时的原理。



3.调试
===
1.调试说明:
---
调试主要是通过chrome浏览器的控制台来实现的，当然还有自己在另外的空间写demo来熟悉用法的尝试（mock.js），这个主要是在webstorm上进行调试。
___
2.调试过程：
---
*  出现的错误：没有理清不同的获取DOM元素的方法返回的类型的不同，导致返回的对象调用了错误的方法。
* 疑问：有时浏览器的控制台没有任何输出，没有报错，console.log似乎也没有执行，显示一片空白。
