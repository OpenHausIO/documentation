<div class="mb-0">
    🔗 <a class="source-code" target="_blank"
        href="https://github.com/OpenHausIO/backend/blob/dev&#x2F;helper&#x2F;iterate.js">iterate.js</a>
</div>
<hr style="margin: 0 !important" />

<!-- CLASS -->

<!-- GENERAL -->
<!-- CLASS -->



<!-- METHODS -->
### Methods:
####  .iterate(data, cb);  

| Parameter | Type       | Description    |
| :-------- | :--------- |:------------- |
| data | `*` |  Anything you want to iterate over its items |
| cb | `function` |  function that is called for/on each item |


Iterate over each (child) item and preserves object structure


*Returns*   `undefined`   input data (may be modified by callback function)


##### Examples
    
```js
const _iterate = require(".../helper/iterate.js");
const input = JSON.stringify({
    data: true,
    timestamp: Date.now(),
    array: [1, 2, 3],
    obj: {
        cool: "Nice ;)",
        nested: [null, undefined, true, false, 0, 1]
    },
    buffer: Buffer.from("Hello World")
});

const output = JSON.parse(input);

console.log(output.buffer)

const modified = _iterate(output, (key, value, type, parent) => {

    //console.log(`${key} = ${value}; ${type},; parent = ${parent}`)

    // unit tests?
    //console.log(value === parent[key]);

    // Convert serialized buffer
    if (type === "object", value.hasOwnProperty("type") && value.hasOwnProperty("data") && value.type === "Buffer") {
        return Buffer.from(value.data);
    }


    return value;

});

console.log(modified)
```

<!-- LINKS -->
<!-- LINKS -->

<!-- METHODS -->



<!-- DESCRIPTION -->
<!-- DESCRIPTION -->