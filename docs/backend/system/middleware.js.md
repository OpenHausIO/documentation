<div class="mb-0">
🔗 <a class="source-code" target="_blank" href="https://github.com/OpenHausIO/backend/blob/dev/system/middleware.js">middleware.js</a>
</div>
<hr style="margin: 0 !important" />


## `class` Middleware
### Description:
This class allows to create a middleware pattern, like `express`, `koa` & `connect`.


### Properties:
| Name    | Type       | Default | Description                                                                                                 |
| ------- | ---------- | ------- | ----------------------------------------------------------------------------------------------------------- |
| __obj   | `Object`   | `this`  | Optional `this` scope to be used in middleware functions                                                    |
| catcher | `Function` | `null`  | If set to a function, this will be called when somewhere the middleware stack a next function is "rejected" |



### Methods:
##### .use(cb)
| Parameter | Type       | Description                                     |
| :-------- | :--------- | :---------------------------------------------- |
| `cb`      | `Function` | Middleware function to be executed in the stack |

Add a function to the middleware stack which is executed when `.start` is called and no previous executed method as thrown a error or passed one as first argument to the `next()` function

*Returns*: `undefined`

Example:

```js
.use((A, B, C, next) => {

    // do something with the arguments, or not.
    // if ready, dont forget to call next!
    next();

});
```

##### .start(...args, cb)
| Parameter | Type       | Description                                                |
| :-------- | :--------- | :--------------------------------------------------------- |
| `...args` | `Any`      | As much arguments you want to pass to the middleware stack |
| `cb`      | `Function` | Final callback with (possible) modified arguments          |

Execute the callback stack.

*Returns*: `undefined`

Example:

```js
.start("A", { B:true }, Date.now() (A, B, C) => {
    // do what ever you want here
    // A, B & C are possible not the same
});
```

##### .catch(cb)
| Parameter | Type       | Description                                                    |
| :-------- | :--------- | :------------------------------------------------------------- |
| `cb`      | `Function` | A function that catches the error passed to a `.next` function |

Execute the callback stack.

*Returns*: `undefined`

Example:

```js
.catch((err) => {
    // somewhere in the middleware stack
    // a error instnace was passed to `.next()`
    console.error(err);
});
```