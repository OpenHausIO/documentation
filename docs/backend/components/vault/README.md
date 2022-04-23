<div class="mb-0">
    🔗 <a class="source-code" target="_blank"
        href="https://github.com/OpenHausIO/backend/blob/dev&#x2F;components&#x2F;vault&#x2F;index.js">index.js</a>
</div>
<hr style="margin: 0 !important" />

<!-- CLASS -->

<!-- GENERAL -->
## `class` C_VAULT  `extends`  [COMPONENT](backend/system/component/class.component.js)  
### Description:

Vault component to handle secrets, credentials & tokens.<br />
This is used to store encrypted access data for gateways/APIs.<br />
Use this if a API needs to be authenticated.<br />
 
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
const C_VAULT = require(".../components/vault");

C_VAULT.decrypt("FRITZBOX", (err, fields) => {
  console.log(err, fields);
});
```

        
```js
const C_VAULT = require(".../components/vault");

C_VAULT.events.on("add", (item) => {
  console.log("New vault/secret added", item)
});
```
<!-- EXAMPLES -->

<!-- LINKS -->
<!-- LINKS -->

<!-- CLASS -->



<!-- METHODS -->
### Methods:
####  .encrypt(identifier, fields);  

| Parameter | Type       | Description    |
| :-------- | :--------- |:------------- |
| identifier | `String` |   |
| fields | `Array` |   |


Encrypt a vault


*Returns*  `Function`    cb 


<!-- LINKS -->
<!-- LINKS -->

####  .decrypt(identifier, cb);  

| Parameter | Type       | Description    |
| :-------- | :--------- |:------------- |
| identifier | `String` |   |
| cb | `Function` |  Callback |



Decrypt a vault


*Returns*  `Function`    cb 


<!-- LINKS -->
<!-- LINKS -->

<!-- METHODS -->



<!-- DESCRIPTION -->
<!-- DESCRIPTION -->