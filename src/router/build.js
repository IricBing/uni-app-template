const { readdirSync, writeFile } = require('fs');
const { join, resolve } = require('path');
const router = require('./index.js');
const subapp1 = require('./modules/subapp1');
const subapp2 = require('./modules/subapp2');

const builder = (baseUrl, children) => {
  const routeList = [];
  for (const route of children) {
    if (route.children) routeList.push(...builder(baseUrl + route.path + '/', route.children));
    else {
      const item = {
        path: baseUrl + route.path,
        style: {
          navigationBarTitleText: route.name
        }
      };
      Object.keys(route).forEach(prop => !['path', 'name'].includes(prop) && (obj.style[prop] = route[prop]));
      routeList.push(item);
    }
  }

  return routeList;
};

// 将路由模块配置文件转化为 uniapp 配置文件格式
const buildRouter = route => {
  const { baseUrl, children } = route;

  return builder(baseUrl, children);
};

// 构建 pages
router.pages = readdirSync(resolve(__dirname, './modules/app'))
  .map(filename => buildRouter(require('./modules/app/' + filename)))
  .flat();
subapp1.pages = readdirSync(resolve(__dirname, './modules/subapp1'))
  .filter(filename => filename !== 'index.js')
  .map(filename => buildRouter(require('./modules/subapp1/' + filename)))
  .flat();
subapp2.pages = readdirSync(resolve(__dirname, './modules/subapp2'))
  .filter(filename => filename !== 'index.js')
  .map(filename => buildRouter(require('./modules/subapp2/' + filename)))
  .flat();

router.subpackages = [subapp1, subapp2];

// 写入 pages.json 文件
writeFile(
  join(__dirname, '..', 'pages.json'),
  // 我这边是用两个空格来缩进 pages.json，如果喜欢制表符，第三个参数更换你为 \t 即可
  JSON.stringify(router, null, '  '),
  e => (e ? console.error(e) : console.log('pages.json 配置文件更新成功'))
);
