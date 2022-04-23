<div class="mb-0">
    🔗 <a class="source-code" target="_blank"
        href="https://github.com/OpenHausIO/backend/blob/dev&#x2F;components&#x2F;vault&#x2F;class.secret.js">class.secret.js</a>
</div>
<hr style="margin: 0 !important" />

<!-- CLASS -->

<!-- GENERAL -->
## `class` Secret 
### Description:

Represents a single secret that wraps encrypt/decrypt methods

<!-- GENERAL -->

<!-- PARAMETER -->
#### Parameter:
| Parameter | Type       | Description    |
| :-------- | :--------- |:------------- |
| obj | `Object` |  Object that matches the item schema. See properties below: |
<!-- PARAMETER -->

<!-- PROPERTIES -->
#### Properties:
| Name | Type | Description |
| :---- | :-------- | :----------- |
| _id | `String` | MongoDB Object id is as string |
| name | `String` | Human readable name |
| identifier | `String` | Simle identifier to find the secret when you need it |
| fields[] | `Array` | Fields for the secret |
| fields[]._id | `String` | MongoDB Object id is as string |
| fields[].name | `String` | Human readable name |
| fields[].description | `String` | Description of the field |
| fields[].key | `String` | Simple machine readable key. E.g.: ```PASSWORD``` or ```TOKEN``` |
| fields[].value | `String` | Value for the key field. E.g: ```Pa$$w0rd``` or ```eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c``` |
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
####  .encrypt(data, cb);  

| Parameter | Type       | Description    |
| :-------- | :--------- |:------------- |
| data | `Object` |  Key/value pair to encrypt |
| cb | `Function` |  Callback |


Encrypt on or more fields


*Returns*   `undefined`   


<!-- LINKS -->
<!-- LINKS -->

####  .decrypt(cb);  

| Parameter | Type       | Description    |
| :-------- | :--------- |:------------- |
| cb | `Function` |  Callback |


Decrypt all exisiting fields


*Returns*   `undefined`   


<!-- LINKS -->
<!-- LINKS -->

<!-- METHODS -->



<!-- DESCRIPTION -->
<!-- DESCRIPTION -->