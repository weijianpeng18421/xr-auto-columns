#  xr-auto-columns
auto fits Element UI's `el-table-column` with cell content.
Vue.js 插件，可实现 Element UI `el-table-column` 宽度自适应内容，同时保持内容不换行。
## Install
```
npm install xr-auto-columns --save
```

## Use
在需要实现el-table列宽自适应的地方加入（el为el-table标签，可通过document.querySelector("#auto-table")来获取）
```
import Plugin from 'xr-auto-columns';
Plugin.autoColumnWidth(el)
```

在不需要自适应列宽的列中加入not-auto类即可:
```
<el-table id="auto-table" :data="data" >
  <el-table-column label="No." type="index" class-name="not-auto"></el-table-column>
  <el-table-column label="Name" prop="name"></el-table-column>
  <el-table-column label="Age" prop="age"></el-table-column>
</el-table>

```
