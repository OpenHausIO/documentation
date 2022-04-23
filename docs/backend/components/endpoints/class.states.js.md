<div class="mb-0">
    🔗 <a class="source-code" target="_blank"
        href="https://github.com/OpenHausIO/backend/blob/dev&#x2F;components&#x2F;endpoints&#x2F;class.states.js">class.states.js</a>
</div>
<hr style="margin: 0 !important" />

<!-- CLASS -->

<!-- GENERAL -->
## `class` States  `extends`  Array  
### Description:

Houses <State> classes, just like a regular array, with custom methods to set values

<!-- GENERAL -->

<!-- PARAMETER -->
#### Parameter:
| Parameter | Type       | Description    |
| :-------- | :--------- |:------------- |
| arr | `Array` |  Command objects |
<!-- PARAMETER -->

<!-- PROPERTIES -->
<!-- PROPERTIES -->

<!-- EVENTS -->
<!-- EVENTS -->

<!-- EXAMPLES -->
<!-- EXAMPLES -->

<!-- LINKS -->
<!-- LINKS -->

<!-- CLASS -->



<!-- METHODS -->
### Methods:
####  .setValue(_id, value, cb);  

| Parameter | Type       | Description    |
| :-------- | :--------- |:------------- |
| _id | `String` |  Monogdb ObjectID as String |
| value | `String,Number,Boolean` |  Value to set |
| cb | `Function` |  Callback |


Set the value of a state object


*Returns*   `undefined`   

##### Examples
    
```js
const C_ENDPOINTS = require(".../components/endpoints");

C_ENDPOINTS.find({
  name: "TV"
}, (err, endpoint) => {
  
  console.log(err || endpoint);
  
  const {states} = endpoints;
  const {setValue} = states;

});
```

    
```js
setValue("62557f6b54e3795531b5fc06", 10, (err) => {
  console.log(err || "Value set!");
});
```

    
```js
setValue("62557f904b99bb2d0172ee53", "SRC_HDMI1", (err) => {
  console.log(err || "Value set!");
});
```

    
```js
setValue("62557fbd1956de67da6cf9e7", true, (err) => {
  console.log(err || "Endpoint power state set to: on");
});
```

<!-- LINKS -->
<!-- LINKS -->

<!-- METHODS -->



<!-- DESCRIPTION -->
<!-- DESCRIPTION -->