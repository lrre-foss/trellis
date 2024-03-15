# trellis

> [!IMPORTANT]
> This project is currently an active work-in-progress. We will not be accepting contributions at this time.

Open-sourced implementation of the Roblox.Grid protocol

## Usage

```js
import { GridClient } from "@lrre-foss/trellis"

var client = new GridClient("127.0.0.1")
let jobs = client.getAllJobs()

for (let i = 0; i < jobs.length; i++) {
    i.close()
}

console.log(client.buildNumber) 
```

## License

trellis is licensed under the [MIT license](https://github.com/lrre-foss/trellis/blob/trunk/LICENSE). A copy of it has been included with trellis.
