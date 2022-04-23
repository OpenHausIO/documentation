<div class="mb-0">
    🔗 <a class="source-code" target="_blank"
        href="https://github.com/OpenHausIO/backend/blob/dev&#x2F;helper&#x2F;timeout.js">timeout.js</a>
</div>
<hr style="margin: 0 !important" />

<!-- CLASS -->

<!-- GENERAL -->
<!-- CLASS -->



<!-- METHODS -->
### Methods:
####  .timeout(time, cb);  

| Parameter | Type       | Description    |
| :-------- | :--------- |:------------- |
| time | `Number` |  Time in ms to wait before calling the callback function |
| cb | `Function` |  Callback function |


Wait n ms befor execute the callback function


*Returns*  `Function`    Function to call before timeout is reached/triggerd


##### Examples
    
```js
const _timeout = require(".../helper/timeout.js");

const caller = timeout(1000, (timedout, duration, args) => {
  console.loog(timedout, duration, args); // true, 1001, []
});

// call returned function after 2sec
// this triggers the timeout
setTimeout(caller, 2000);
```

    
```js
const _timeout = require(".../helper/timeout.js");

const caller = timeout(1000, (timedout, duration, [A, B]) => {
  console.loog(timedout, A, B); // false, "Hello", "World"
});

// this does not trigger the timeout
setTimeout(100, "Hello", "World");

// or directly without a delay
//caller("Hello", "World"); * 
``` 

<!-- LINKS -->
<!-- LINKS -->

<!-- METHODS -->



<!-- DESCRIPTION -->
<!-- DESCRIPTION -->