## 第一步创建React+TS项目
npx create-react-app my-app --template typescript

## 配置prettier和commitlint 
可搜Github和官网#   t e a m P o w e r 
 
 

## qs插件

```
/* 
            qs.stringify 是把一个参数对象格式化为一个字符串
            qs.stringify({ c: 'b', a: 'd' })
            'c=b&a=d'
         */
```



## 添加useMount和useDebounced

## 下载Service Worker

```
npx imooc-jira-tool
npx msw init public
```

## Context

## Fetch VS axios

1. fetch无法捕获500，401等服务端错误异常,只能捕获网络异常，需要自己抛出

   ```
   if(response.ok){
   
   }else{
   	return Promise.reject()
   }
   ```

   

2. axios可以

## useHttp管理JWT和登录状态，保持登录状态

## TS中的 工具类型（Utility Types）

1. 类型别名

   1. 类型别名在很多情况下可以和interface互换,但是对于**联合类型**（|）和**交叉类型**（&），interface无法做到,也无法做到**Utility Types**

   ```
   type test = string | number
   let new : test
   ```

2. Utility Type：用泛型给他传入一个其他类型，然后Utility Type对这个类型进行某种操作

   1. Partial<Person>

      ```
      type Person = {
      	name:string,
      	age:number
      }
      const chen :Partial<Person> = {name:"Ricardo"}
      Partial对其限定的参数进行可选操作
      ```

   2. Omit<x,x>,对参数进行可选同时又删除其中的某个参数

      ```
      type Person = {
      	name:string,
      	age:number
      }
      const chen : Omit<Person,'name' | 'age'> = {age:11}
      加入name和age参数就会报错因为name和age已被删除
      
      第一个参数Person是基本的类型
      第二参数是要删除的属性名
      ```

   3. <typeof xxx>,将xxx函数类型中的参数进行抽取
   
   4. Record,包含指定的属性都是必填的
   
      ```
      type Coord = Record<'x' | 'y',number>
      等同于 type Coord {
      	x:number
      	y:number
      }
      即x或y都必须是number
      ```
   
   5. Pick:从定义的属性中选取指定的一组属性，返回个新的类型定义
   
      ```
      type Coord = Record<'x' | 'y',number>
      type CoordX = Pick<Coord,'x'>
      等同于
      type CoordX = {
      	x:number
      }
      ```
   
      

## 修改antd的默认样式

```
npm install @craco/craco
```

## CSS-in-JS

```
npm install @emotion/react @emotion/styled
```



### 传统CSS缺点

1. 缺乏模块组织
2. 缺乏作用域
3. 隐式依赖，让样式难以追踪
4. 没有变量
5. CSS选择器与HTML耦合

## Flex&&gfrid

1. 一维布局=>flex(只有行或列)                二维布局=>grid（有行列）
2. 从内容和布局出发
   1. 从内容出发：先有一组内容（数量不固定），希望均匀的分布在容器，由自身内容大小决定占据的空间(**flex)**
   2. 从布局出发:先规画网格（数量固定），然后元素往里填充（**grid）**

## 渲染SVG图片

1. 将SVG视作一个组件

   ```
   import {ReactComponent as SoftwareLogo}  from 'software-logo.svg';
   <SoftwareLogo width={'20rem'}>
   ```

2. 如果以img标签来传入img则无法为svg定义属性

## useAsync统一处理Loading和Error

## 实现Error boundaries（错误边界处理）

