<div class="mb-0">
    🔗 <a class="source-code" target="_blank"
        href="https://github.com/OpenHausIO/backend/blob/dev&#x2F;components&#x2F;endpoints&#x2F;index.js">index.js</a>
</div>
<hr style="margin: 0 !important" />

<!-- CLASS -->

<!-- GENERAL -->
## `class` C_ENDPOINTS  `extends`  [COMPONENT](backend/system/component/class.component.js)  
### Description:

The Endpoints component is responsible for triggering commands, handle states & manage all kind of things that a endpoint does.<br />
This is a line break

<!-- GENERAL -->

<!-- PARAMETER -->
<!-- PARAMETER -->

<!-- PROPERTIES -->
<!-- PROPERTIES -->

<!-- EVENTS -->
<!-- EVENTS -->

<!-- EXAMPLES -->
#### Examples:
        
```js
const C_ENDPOINTS = require(".../components/endpoints");

C_ENDPOINTS.hooks.post("update", (item, next) => {
  console.log("Updated item", item);
  next();
});
```

        
```js
const C_ENDPOINTS = require(".../components/endpoints");

console.log(C_ENDPOINTS.items);
```
<!-- EXAMPLES -->

<!-- LINKS -->
<!-- LINKS -->

<!-- CLASS -->



<!-- METHODS -->
<!-- METHODS -->



<!-- DESCRIPTION -->
<!-- DESCRIPTION -->