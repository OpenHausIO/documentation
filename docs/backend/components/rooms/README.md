<div class="mb-0">
    🔗 <a class="source-code" target="_blank"
        href="https://github.com/OpenHausIO/backend/blob/dev&#x2F;components&#x2F;rooms&#x2F;index.js">index.js</a>
</div>
<hr style="margin: 0 !important" />

<!-- CLASS -->

<!-- GENERAL -->
## `class` C_ROOMS  `extends`  [COMPONENT](backend/system/component/class.component.js)  
### Description:

The room component handles the managing of rooms (What a suprise... 😜)

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
const C_ROOMS = require(".../components/rooms");

C_ROOMS.find({name: "Living Room"}, (err, item) => {
  console.log(err || item);
});
```

        
```js
const C_ROOMS = require(".../components/rooms");

// "convert" room name to uppercase
C_ROOMS.hooks.pre("add", (data, next) => {
  data.name = String(data.name).toUpperCase();
  next();
});
```

        
```js
const C_ROOMS = require(".../components/rooms");

C_ROOMS.add({
  name: "Garage",
  floor: 0
}, (err, item) => {
  // item = instance of Room class
  console.log(err || item);
});
```
<!-- EXAMPLES -->

<!-- LINKS -->
<!-- LINKS -->

<!-- CLASS -->



<!-- METHODS -->
<!-- METHODS -->



<!-- DESCRIPTION -->
<!-- DESCRIPTION -->