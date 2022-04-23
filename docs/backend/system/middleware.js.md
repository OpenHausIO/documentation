<div class="mb-0">
    🔗 <a class="source-code" target="_blank"
        href="https://github.com/OpenHausIO/backend/blob/dev&#x2F;system&#x2F;middleware.js">middleware.js</a>
</div>
<hr style="margin: 0 !important" />

<!-- CLASS -->

<!-- GENERAL -->
## `class` Middleware 
### Description:

Implementation of the middleware pattern you can find in connect/express.
It can be used "standalone" in your own code or is found in components with a namespace wrapper.

<!-- GENERAL -->

<!-- PARAMETER -->
#### Parameter:
| Parameter | Type       | Description    |
| :-------- | :--------- |:------------- |
| obj | `Object` |  Optional <this> scope for middleware functions added with `.use` |
<!-- PARAMETER -->

<!-- PROPERTIES -->
#### Properties:
| Name | Type | Description |
| :---- | :-------- | :----------- |
| __obj | `Object` | <this> scope for middleware functions |
<!-- PROPERTIES -->

<!-- EVENTS -->
<!-- EVENTS -->

<!-- EXAMPLES -->
#### Examples:
        
```js
const middleware = new Middleware();

middleware.use((data, next) => {
  console.log("use(); 1", data);
  next();
});

middleware.use((data, next) => {
  data.foo = "YEEEHAAA";
  console.log("use(); 2", data);
  next();
});

middleware.use((data, next) => {
  console.log("use(); 3", data);
  next();
});

middleware.start({bar: true}, (obj) => {
  console.log("Chain done", obj);
});
```

<!-- EXAMPLES -->

<!-- LINKS -->
#### See:
- [Hooks](/backend/system/hooks.js)<br />
- [https://github.com/senchalabs/connect#use-middleware](https://github.com/senchalabs/connect#use-middleware)<br />
- [https://expressjs.com/en/guide/using-middleware.html](https://expressjs.com/en/guide/using-middleware.html)<br />
<!-- LINKS -->

<!-- CLASS -->



<!-- METHODS -->
### Methods:
####  .start();  

| Parameter | Type       | Description    |
| :-------- | :--------- |:------------- |


Start/execute the middleware stack 


*Returns*   `undefined`   

##### Examples
    
```js
start(Date.now(), {foo: "bar", baz: true}, (ts, obj) => {
  console.log(ts, obj);
});
```

    
```js
start("A", "B", "C", (a, b, c) => {
  console.log(a, b, c);
});
```

<!-- LINKS -->
<!-- LINKS -->

####  .use(fn);  

| Parameter | Type       | Description    |
| :-------- | :--------- |:------------- |
| fn | `Function` |  Callback function |


Add a callback function to middleware stack.
Last parameter passed to callback is allways a "next" function.
The "next" function takes as first argument a Error, or null/undefined.
Any other arguments passed to next, override the arguments for the next stack callback


*Returns*   `undefined`   

##### Examples
    
```js
use((next) => {
   setTimeout(next, 1000);
});
```

    
```js
// This override argument "B" and keeps A&C untouched
// B argument in the next callback function is now a new object with the properties of B (shallow copy)
use((A, B, C, next) => {
   next(null, A, {...B});
});
```

<!-- LINKS -->
<!-- LINKS -->

####  .catch(fn);  

| Parameter | Type       | Description    |
| :-------- | :--------- |:------------- |
| fn | `Function` |  Callback function |


Set a handler for error passed to a next function
Stack execution gets aborted, passed callback function executed, 
with error as first argument passed from "next" call


*Returns*   `undefined`   

##### Examples
    
```js
catch((err) => {
  console.log(err);
});
```

<!-- LINKS -->
<!-- LINKS -->

<!-- METHODS -->



<!-- DESCRIPTION -->
<!-- DESCRIPTION -->