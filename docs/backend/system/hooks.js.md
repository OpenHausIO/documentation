<div class="mb-0">
    🔗 <a class="source-code" target="_blank"
        href="https://github.com/OpenHausIO/backend/blob/dev&#x2F;system&#x2F;hooks.js">hooks.js</a>
</div>
<hr style="margin: 0 !important" />

<!-- CLASS -->

<!-- GENERAL -->
## `class` Hooks 
### Description:

Hooks are wrapping a Middleware instance around a namespace with post/pre hooks

<!-- GENERAL -->

<!-- PARAMETER -->
<!-- PARAMETER -->

<!-- PROPERTIES -->
#### Properties:
| Name | Type | Description |
| :---- | :-------- | :----------- |
| namepsace | `Object` | Namespace wrapper for middleware instances |
<!-- PROPERTIES -->

<!-- EVENTS -->
<!-- EVENTS -->

<!-- EXAMPLES -->
#### Examples:
        
```js
const hooks = new Hooks();

hooks.pre("foo", (data, next) => {
  console.log("[foo] .pre; 1", data);
  next();
});

hooks.post("foo", (data, next) => {
  console.log("[foo] .post 2", data);
  next();
});

hooks.trigger("foo", {}, (err, data) => {
  console.log(err || "[foo] .trigger; modified: ", data);
});
```
<!-- EXAMPLES -->

<!-- LINKS -->
<!-- LINKS -->

<!-- CLASS -->



<!-- METHODS -->
### Methods:
####  `DEPRECATED`  .WS_REQUEST(data);  `static`  

| Parameter | Type       | Description    |
| :-------- | :--------- |:------------- |
| data | `obj` |   |


Create request message object for websocket hooks


*Returns*  `Object`    request object


<!-- LINKS -->
<!-- LINKS -->

####  `DEPRECATED`  .WS_RESPONSE(data);  `static`  

| Parameter | Type       | Description    |
| :-------- | :--------- |:------------- |
| data | `*` |   |


Create response message object for websocket hooks


*Returns*  `Object`    response object


<!-- LINKS -->
<!-- LINKS -->

####  ._namespace(name);  

| Parameter | Type       | Description    |
| :-------- | :--------- |:------------- |
| name | `String` |  Namepsace |


Create or returns a new namespace


*Returns*  `Object`    Namespace object


<!-- LINKS -->
<!-- LINKS -->

####  ._handleEventType(type, name, cb);  

| Parameter | Type       | Description    |
| :-------- | :--------- |:------------- |
| type | `String` |  Type of middleware: pre/post |
| name | `String,Array` |  Namespace |
| cb | `Function` |  Callback to add for middleware (`.use(...)`) |


Handle event type for namespace middleware


*Returns*   `undefined`   


<!-- LINKS -->
<!-- LINKS -->

####  .pre(name, cb);  

| Parameter | Type       | Description    |
| :-------- | :--------- |:------------- |
| name | `String` |  Namespace |
| cb | `Function` |  Callback |


Add function to pre middleware stack


*Returns*   `undefined`   

##### Examples
    
```js
pre("foo", (data, next) => {
  data.ts = Date.now();
  next();
});  
```     

<!-- LINKS -->
<!-- LINKS -->

####  .post(name, cb);  

| Parameter | Type       | Description    |
| :-------- | :--------- |:------------- |
| name | `String` |  Namespace |
| cb | `Function` |  Callback |


Add function to post middleware stack


*Returns*   `undefined`   

##### Examples
    
```js
post("foo", (data, next) => {
  data.obj = false;
  next();
});
```

<!-- LINKS -->
<!-- LINKS -->

####  .trigger(name, args);  

| Parameter | Type       | Description    |
| :-------- | :--------- |:------------- |
| name | `String` |  Namespace |
| args | `...any` |  Arguments to pass to function stack |


Trigger a pre/post middleware namespace execution


*Returns*   `undefined`   

##### Examples
    
```js
trigger("foo", {obj: true}, (err, obj) => {
  console.log(err, obj);
});
```

<!-- LINKS -->
<!-- LINKS -->

<!-- METHODS -->



<!-- DESCRIPTION -->
<!-- DESCRIPTION -->