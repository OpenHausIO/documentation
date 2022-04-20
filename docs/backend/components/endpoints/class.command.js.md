<div class="mb-0">
    🔗 <a class="source-code" target="_blank"
        href="https://github.com/OpenHausIO/backend/blob/dev/components/devices/class.device.js">class.command.js</a>
</div>
<hr style="margin: 0 !important" />

<!-- CLASS -->

<!-- GENERAL -->
## `class` Command 
### Description:

Single command

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
| interface | `String` | Device Interface `_id` |
| name | `String` | Human friendly name |
| alias | `String` | Machine friendly name, e.g.: `POWER_ON` |
| identifier | `String` | Simple/custom identifiert for custom command handler |
| payload | `String` | The payload to send over the device interface |
| description | `String` | Command description, displayed on the frontend |
| params | `Array` | Possible parameter for the command |
| params[].key | `String` | Custom key |
| params[].value | `Any` | Value to set |
| params[].default | `String` | Default thing if nothing is send from client |
| params[].min | `String` | Min value if param type is a number |
| params[].max | `String` | Max value if param type is a number |
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
#### .schema();  `static` 

| Parameter | Type       | Description    |
| :-------- | :--------- |:------------- |


Command schema


*Returns*  `Object`    Joi Object


<!-- LINKS -->
<!-- LINKS -->

#### .validate(obj);  `static` 

| Parameter | Type       | Description    |
| :-------- | :--------- |:------------- |
| obj | `Object` |  Input data to validate |


Validate schema object


*Returns*  `Object`    Joi validation response 


<!-- LINKS -->
##### See:
- [https://joi.dev/api/?v=17.6.0#anyvalidatevalue-options](https://joi.dev/api/?v=17.6.0#anyvalidatevalue-options)<br />
<!-- LINKS -->

<!-- METHODS -->