# React Transform Boilerplate

### Installation

```bash
git clone https://github.com/gaearon/react-transform-boilerplate.git
cd react-transform-boilerplate
npm install
npm start
open http://localhost:3000
```

Transforms are enabled for files inside `src` (except `index.js`).

### eg

```js

function tick() {
  const element = (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>
  );
  ReactDOM.render(
    element,
    document.getElementById('root')
  );
}

setInterval(tick, 1000);

function tick() {
  const element = (
    <div>
      <h1>hello</h1>
      <h2>It is {new Date().toLocaleTimeString}</h2>
    </div>
  )
}


// toLocaleTimeString() 方法可根据本地时间把 Date 对象的时间部分转换为字符串，并返回结果。
```
### this.state 的定义

控制组件内部的状态，知道如何定义
