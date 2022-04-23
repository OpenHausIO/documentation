<div class="mb-0">
    🔗 <a class="source-code" target="_blank"
        href="https://github.com/OpenHausIO/backend/blob/dev&#x2F;components&#x2F;endpoints&#x2F;class.state.js">class.state.js</a>
</div>
<hr style="margin: 0 !important" />

<!-- CLASS -->

<!-- GENERAL -->
## `class` State 
### Description:

This is a functions as a state for a endpoint.<br />
E.g "Power" state, or "Volume"

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
| _id | `String` | MongoDB ObjectID as String |
| name | `String` | State name. E.g.: <code>Power</code> or <code>Temperature</code> |
| description | `String` | State description, e.g.: <code>Power state</code> or <code>Room temperature</code> |
| value | `String,Number,Boolean` | The setted value |
| type | `String,Number,Boolean` | Type of state value |
| identifier | `String` | Machine readable identifier, e.g.: <code>POWER</code> or <code>TEMPERATURE</code> |
| timestamps | `Object` | Timestamps that are set when added or updated |
| timestamps.created | `Number` | Set when added |
| timestamps.updated | `Number` | Every time set to Date.now() when a value is set |
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
####  .schema();  `static`  

| Parameter | Type       | Description    |
| :-------- | :--------- |:------------- |


State schema, see properties above.


*Returns*  `Object`    Joi Object



<!-- LINKS -->
##### See:
- [https://joi.dev/api/?v=17.6.0#anyvalidatevalue-options](https://joi.dev/api/?v=17.6.0#anyvalidatevalue-options)<br />
<!-- LINKS -->

####  .validate(obj);  `static`  

| Parameter | Type       | Description    |
| :-------- | :--------- |:------------- |
| obj | `Object` |  Input data that matches the schema |


Validate schema object


*Returns*  `Object`    Joi validation object



<!-- LINKS -->
##### See:
- [https://joi.dev/api/?v=17.6.0#anyvalidatevalue-options](https://joi.dev/api/?v=17.6.0#anyvalidatevalue-options)<br />
<!-- LINKS -->

<!-- METHODS -->



<!-- DESCRIPTION -->
<!-- DESCRIPTION -->