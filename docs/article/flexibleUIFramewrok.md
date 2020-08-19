# 移动端适配方案

### 移动端 rem 适配及 UI 框架 px to rem

yarn add amfe-flexible -S

yarn add postcss-pxtorem -D



```typescript
// main.js
import 'amfe-flexible'
```





```javascript
// postcss.config.js
const autoprefixer = require('autoprefixer');
const pxtorem = require('postcss-pxtorem');
module.exports = () => {
    return {
        plugins: [
            autoprefixer(),
            pxtorem({
              rootValue: 75,
              // propList: ['*']
            })
        ]
    }
}
```



