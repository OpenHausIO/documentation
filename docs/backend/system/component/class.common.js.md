<div class="mb-0">
🔗 <a class="source-code" target="_blank" href="https://github.com/OpenHausIO/backend/blob/dev/system/component/class.common.js">class.common.js</a>
</div>
<hr style="margin: 0 !important" />



## `class` COMMON `extends` [BASE](backend/system/component/class.base.js.md)
### Description:
The `COMMON` class provides a method to define hookable/event-emitting functions which are commonly used in all components & defined in [class.component.js](backend/system/component/class.component.js).<br />
It also expect a logger instance as dependencie which is used to log the workflow of the pre/post hooks & possible error that happens.

### Properties:
| Name   | Type                              | Default | Description                                                               |
| ------ | --------------------------------- | ------- | ------------------------------------------------------------------------- |
| logger | [`Logger`](backend/system/logger) |         | Logger instance created via the system [`logger`](backend/system/logger/) |


### Events:
| Name | Description |
| ---- | ----------- |


### Methods:
##### ._defineMethod(name, executor);
- `name` {String} Method name to patch on `this`
- `executor` {Function} Callback tha implements the logic of the method

Create a hookable/event-emitting method on `this` class.
The arguments passed to the function a wrapped around the [`promsifiy`](backend/helper/promisify.js) helper.<br />
Which means this can work with callback or promises.

*Returns*: `undefined`

Example:

```js
._defineMethod("foo", () => {
    return (...args) => {
        return new Promise((resolve, reject) => {

            resolve("Yeaa haa");

        });
    };
});
```


### Example:
```js
const COMMON = require(".../system/component/class.common.js");
const common = new COMMON();

// .ready is inherited from base
console.log("Ready:", common.ready);

// same for .init
common.init((scope, ready) => {

    scope._defineMethod("bar", (final) => {

        // this runs after all post hooks
        // when resolve, the callback is triggerd
        final((item) => {
            return Promise.resolve();
        });

    });

    setTimeout(() => {
        ready(null);
    }, 1000)

});

common.on("ready", () => {

    common.pre("bar", (a, b, c, next) => {
        next();
    });

    common.post("bar", (a, b, c, next) => {
        next();
    });

    common.bar("A", "B", "C", (err, a, b, c) => {
        console.log(err || (a, b, c));
    });

});

```