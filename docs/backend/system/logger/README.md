<div class="mb-0">
    🔗 <a class="source-code" target="_blank"
        href="https://github.com/OpenHausIO/backend/blob/dev&#x2F;system&#x2F;logger&#x2F;index.js">index.js</a>
</div>
<hr style="margin: 0 !important" />

<!-- CLASS -->

<!-- GENERAL -->
<!-- CLASS -->



<!-- METHODS -->
<!-- METHODS -->



<!-- DESCRIPTION -->

### Description:

This is the main logger instance.<br />
A `.create` function is monkey patched to it.


##### Examples
    
```js
Object.defineProperty(logger, "create", {
    value: function create(name) {

        let file = path.resolve(process.env.LOG_PATH, `${name}.log`);
        let stream = createWriteStream(file);

        stream.on("error", (err) => {
            console.error(err);
            process.exit(1);
        });

        let opts = Object.assign({}, options, {
            name,
            streams: [
                stdout,
                stream
            ]
        });

        return new Logger(opts);

    },
    writable: false,
    configurable: false,
    enumerable: false
});
```

    
```js
const logger = require(".../logger");

const log = logger.create("Hello World");
log.info("Info message");
```

<!-- DESCRIPTION -->