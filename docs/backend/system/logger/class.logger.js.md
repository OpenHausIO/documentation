<div class="mb-0">
    🔗 <a class="source-code" target="_blank"
        href="https://github.com/OpenHausIO/backend/blob/dev&#x2F;system&#x2F;logger&#x2F;class.logger.js">class.logger.js</a>
</div>
<hr style="margin: 0 !important" />

<!-- CLASS -->

<!-- GENERAL -->
## `class` Logger 
### Description:

Logger class which create a custom logger object

<!-- GENERAL -->

<!-- PARAMETER -->
#### Parameter:
| Parameter | Type       | Description    |
| :-------- | :--------- |:------------- |
| options | `Object` |  Options object |
| options.level | `String` |  Logging level: `error`, `warn`, `info`, `debug`, `verbose`, `trace` |
| options.name | `String` |  Logger name that is shown in messages |
| options.streams | `Array` |  Array of streams where to write data |
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
####  .tracer(desc, count, cb);  

| Parameter | Type       | Description    |
| :-------- | :--------- |:------------- |
| desc | `String` |  Description of the thing you want to "trace" |
| count | `Number` |  How many client calls till "Finished!" is logged? |
| cb | `Function` |  Callback which returns a custom "finish" message |


Provides a logger that decrements a counter, which can be used to illustrate a function flow


*Returns*  `Function`    Wrapped logger function

##### Examples
    
```js
const Logger = require(".../system/logger/class.logger.js");
const logger = new Logger({
  streams: [
    process.stdout
  ]
});

const tracer = logger.tracer("Called 3 times", 3, () => {
  console.log(".tracer has called 3 times");
  return "Yeah! You got it, its done.";
});

tracer("Foo");
tracer("Bar");
tracer("Baz");
```


<!-- LINKS -->
<!-- LINKS -->

<!-- METHODS -->



<!-- DESCRIPTION -->
<!-- DESCRIPTION -->