<div class="mb-0">
    🔗 <a class="source-code" target="_blank"
        href="https://github.com/OpenHausIO/backend/blob/dev&#x2F;helper&#x2F;debounce.js">debounce.js</a>
</div>
<hr style="margin: 0 !important" />

<!-- CLASS -->

<!-- GENERAL -->
<!-- CLASS -->



<!-- METHODS -->
### Methods:
####  .debounce(fnc, wait, immediate);  

| Parameter | Type       | Description    |
| :-------- | :--------- |:------------- |
| fnc | `Function` |  Function to call when debounced |
| wait | `Number` |  Time to wait before calling <func> |
| immediate | `Boolean` |  Call <func> immediately? |


Debounce a function call


*Returns*   `undefined`   

##### Examples
    
```js
let caller = debounce(() => {
  console.log("Debounced");
}, 1000);

caller();
setTimeout(caller, 500);
```

<!-- LINKS -->
<!-- LINKS -->

<!-- METHODS -->



<!-- DESCRIPTION -->
<!-- DESCRIPTION -->