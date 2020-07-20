---
title: 自定义扩展
---

# 自定义扩展

## 创建扩展

使用 `createExtension` 创建扩展。

```javascript
import { createExtension } from '@ohbug/core'

export const extension = createExtension({
  name: 'ExtensionName',
  init: () => {
    // do something
  }
})
```

## 接口

```typescript
interface OhbugExtension<T = any> {
  name: string
  init?: (client: OhbugClient, ...args: any[]) => T
  created?: (
    event: OhbugEventWithMethods<any>,
    client: OhbugClient
  ) => OhbugEventWithMethods<any> | false
  notified?: (event: OhbugEventWithMethods<any>, client: OhbugClient) => void
}
```
