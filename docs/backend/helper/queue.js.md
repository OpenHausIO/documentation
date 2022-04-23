<div class="mb-0">
    🔗 <a class="source-code" target="_blank"
        href="https://github.com/OpenHausIO/backend/blob/dev&#x2F;helper&#x2F;queue.js">queue.js</a>
</div>
<hr style="margin: 0 !important" />

<!-- CLASS -->

<!-- GENERAL -->
<!-- CLASS -->



<!-- METHODS -->
### Methods:
####  .queue(counter, cb);  

| Parameter | Type       | Description    |
| :-------- | :--------- |:------------- |
| counter | `Number` |  How often the returnd function should be call till <cb> is fired |
| cb | `Cunction` |  Callback that gets called when <counter> calles to returned functions happend |


Queue a callback for n calls


*Returns*   `undefined`   Function to call <counter> times till <cb> is executed


##### Examples
    
```js
const _queue = require(".../helper/queue.js");

let trigger = _queue(3, () => {
  console.log("Triggerd after 3 calls");
});

trigger();
trigger();

setTimeout(trigger, 100);
```

<!-- LINKS -->
<!-- LINKS -->

<!-- METHODS -->



<!-- DESCRIPTION -->
<!-- DESCRIPTION -->