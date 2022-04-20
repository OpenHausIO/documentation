<div class="mb-0">
🔗 <a class="source-code" target="_blank" href="https://github.com/OpenHausIO/backend/blob/dev/system/component/class.component.js">class.component.js</a>
</div>
<hr style="margin: 0 !important" />


## `class` COMPONENT `extends` [COMMON](backend/system/component/class.common.js.md)


### Properties:
| Name       | Type    | Default | Description                                                                                                                                         |
| ---------- | ------- | ------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| items      | `Array` | `[]`    | Contains item instance which are created from components, e.g. [`C_ROOMS`](backend/components/rooms/) or [`C_DEVICES`](backend/components/devices/) |
| collection |         |         | MongoDB [collection](https://mongodb.github.io/node-mongodb-native/3.7/api/Db.html#collection) instance                                             |
| schema     |         |         | Joi schema [object](https://joi.dev/api/?v=17.6.0#object)                                                                                           |


### Events:
| Name   | Description                                                                   |
| ------ | ----------------------------------------------------------------------------- |
| add    | Fired when a new item is succesfull added                                     |
| get    | When a item is fetched via the get method or directly from the `.items` array |
| find   | Emitted when the `.find()` method was called                                  |
| update | Fired after the `.update()` method is done                                    |
| remove | Emitted after the `.remove()` method has completed successful                 |


### Methods:
##### .add(data[, cb]);
- `data` {Object} Data that matches the item schema
- `cb` {Function} Optional callback.

Add a new item to the items array, which trigger pre/post hooks & emits `add` event when completed.

*Returns*: `Promise` | `undefined`

**Example**:

```js
.add({
    foo: "bar",
    baz: true,
    i: 10
}, (err, data) => {
    console.log(err || data);
});
```

##### .get(_id[, cb]);
| Parameter | Type       | Description                                                                                         |
| :-------- | :--------- | :-------------------------------------------------------------------------------------------------- |
| `_id`     | `String`   | MongoDB [ObjectID](https://mongodb.github.io/node-mongodb-native/3.7/api/ObjectID.html) as `String` |
| `cb`      | `Function` | Optional callback                                                                                   |

 
Get a item from the `.items` array with matching `_id`.<br />
If no item was a found, a error is returned.

*Returns*: `Promise` | `undefined`

**Example**:

```js
.get("625c8b8cdd159bf4a110f55d", (err, item) => {
    console.log(err || item);
});
```


##### .find(query[, cb]);
| Parameter | Type       | Description                       |
| :-------- | :--------- | :-------------------------------- |
| `query`   | `Object`   | Data that matches the item schema |
| `cb`      | `Function` | Optional callback.                |


Find a item in the items array with matching key/value pairs.

*Returns*: `Promise` | `undefined`

**Example**:

```js
.find({
    foo: "bar",
    baz: true
}).then(console.log).catch(consle.error);
```


##### .update(_id, data[, cb]);
| Parameter | Type       | Description                                                                                         |
| :-------- | :--------- | :-------------------------------------------------------------------------------------------------- |
| `_id`     | `String`   | MongoDB [ObjectID](https://mongodb.github.io/node-mongodb-native/3.7/api/ObjectID.html) as `String` |
| `data`    | `Object`   | Partial data to be set on the item                                                                  |
| `cb`      | `Function` | Optional callback.                                                                                  |


Update a existing item instance.

*Returns*: `Promise` | `undefined`

**Example**:

```js
.update("625c8d19b566fb64aab13383", {
    foo: "mimimi",
    baz: false
}).then(console.log).catch(consle.error);
```


##### .remove(_id[, cb]);
| Parameter | Type       | Description                                                                                         |
| :-------- | :--------- | :-------------------------------------------------------------------------------------------------- |
| `_id`     | `String`   | MongoDB [ObjectID](https://mongodb.github.io/node-mongodb-native/3.7/api/ObjectID.html) as `String` |
| `cb`      | `Function` | Optional callback.                                                                                  |


Item to be removed from the database & `.items` array.
The returned value/object is the previous existed item.

*Returns*: `Promise` | `undefined`

**Example**:

```js
try {
    let item = await component.remove("625c8dbdd753054a4abc4365");
    console.log("Item removed", item);
} catch(err) {
    console.error(err);
}
```