<div class="mb-0">
    🔗 <a class="source-code" target="_blank"
        href="https://github.com/OpenHausIO/backend/blob/dev&#x2F;components&#x2F;endpoints&#x2F;class.commands.js">class.commands.js</a>
</div>
<hr style="margin: 0 !important" />

<!-- CLASS -->

<!-- GENERAL -->
## `class` Commands  `extends`  Array  
### Description:

Houses <Command> classes, just like a regular array, with custom methods

<!-- GENERAL -->

<!-- PARAMETER -->
#### Parameter:
| Parameter | Type       | Description    |
| :-------- | :--------- |:------------- |
| arr | `Array` |  Array with items that inherit |
<!-- PARAMETER -->

<!-- PROPERTIES -->
#### Properties:
| Name | Type | Description |
| :---- | :-------- | :----------- |
| handler | `Map` | Handler functions for commands |
| hooks | `Hooks` | Hooks class instance |
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
####  .execute(_id, params, cb);  

| Parameter | Type       | Description    |
| :-------- | :--------- |:------------- |
| _id | `String` |  MongoDB ObjectID as string (Command id) |
| params | `Array` |  Command parameters |
| cb | `Function` |  Callback |


Execute command


*Returns*   `undefined`   


<!-- LINKS -->
<!-- LINKS -->

####  .handle(aliases, handler, cb);  

| Parameter | Type       | Description    |
| :-------- | :--------- |:------------- |
| aliases | `Array,Boolean,String` |  Register <handler> for command/alias |
| handler | `Function` |  Function that handle the command execution |
| cb | `Function` |  Callback for errors/success |


Set custom command handler


*Returns*   `undefined`   


<!-- LINKS -->
<!-- LINKS -->

<!-- METHODS -->



<!-- DESCRIPTION -->
<!-- DESCRIPTION -->