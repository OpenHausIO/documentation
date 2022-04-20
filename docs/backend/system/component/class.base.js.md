<div class="mb-0">
🔗 <a class="source-code" target="_blank" href="https://github.com/OpenHausIO/backend/blob/dev/system/component/class.base.js">class.base.js</a>
</div>
<hr style="margin: 0 !important" />


## `class` BASE
### Description:
This class is the base class for all components.<br />
It provides absolut basic properties/methods.


### Properties:
| Name   | Type                                                                                           | Default | Description                                                                                                                                                                                                                                                               |
| ------ | ---------------------------------------------------------------------------------------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ready  | `Boolean`                                                                                      | `false` | Indicate if the component/class is "ready to use" or needs more startup/initialization time. If you want to use the component and the value is `false`, listen for the "ready" event.                                                                                     |
| events | [`EventEmitter`](https://nodejs.org/dist/latest-v16.x/docs/api/events.html#class-eventemitter) |         | Used for emitting events, such to indicate if a method has called or a [`item`](backend/system/component/class.component.js?id=properties) was accessed                                                                                                                   |
| hooks  | [`Hooks`](backend/system/hooks.js.md)                                                          |         | Namespaced [middleware](backend/system/middleware/) which allow pre/post hooks for methods defined via [`.defineMethod()`](backend/system/component/class.common.js?id=_definemethodname-executor) in [`class.component.js`](backend/system/component/class.component.js) |


### Events:
| Name  | Description                                |
| ----- | ------------------------------------------ |
| ready | Emitted when the component is ready to use |
| error | When initialization failed                 |


### Methods:
##### .init(cb)
- `cb` {Function} Callback that initialize the component

Handles the initalizing of the component. The first argument is the `this` scope, the second a callback which is called when the initalizen is done or a error happens.

*Returns*: `undefined`

Example:

```js
.init((scope, ready) => {
    ready(new Error("foo"));
});
```

```js
.init((scope, ready) => {
    
    Object.defineProperty(scope, "foo", {
        set(val){
            scope.foo = val;
        },
        get(){
            scope.foo;
        }
    });

    ready(null);

});
```


### Example:
```js
const BASE = require(".../system/component/class.base.js");
const base = new BASE();

console.log("Read:", base.ready);

```

```js
const BASE = require(".../system/component/class.base.js");
const base = new BASE();

base.init((scope, ready) => {

    // do something initialize the component
    ready(null);

});

```