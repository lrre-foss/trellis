# trellis

[![License](https://img.shields.io/github/license/lrre-foss/trellis)](https://github.com/lrre-foss/trellis/blob/trunk/LICENSE)
[![Star](https://img.shields.io/github/stars/lrre-foss/trellis?style=social)](https://github.com/lrre-foss/trellis/stargazers)

> [!IMPORTANT]
> This project is currently an active work-in-progress. We will not be accepting contributions at this time.

Open-sourced implementation of the Roblox.Grid protocol

## Usage

```js
import { GridVersion, GridSerializer, GridClient } from "@lrre-foss/trellis"

// Connect to Roblox server instance located at 127.0.0.1:64989
var client = new GridClient("127.0.0.1")
let isRCC = client.version > GridVersion.V1

console.log(`Connected to ${isRCC ? "RCCService" : "RBXGS"} instance at ${client.ip}:${client.port}`)

let jobs = client.jobs

// You can also get all jobs this way
// The jobs property getter will automatically infer which one to call based on the GridVersion
if (client.isOperationSupported("GetAllEnvironments")) {
    jobs = client.GetAllEnvironments()
} else {
    jobs = client.GetAllJobs()
}

// You may also do client.CloseAllEnvironments() / client.CloseAllJobs()
for (let i = 0; i < jobs.length; i++) {
    i.close()
}

// Serialize and send an envelope manually:
let xml = GridSerializer.serialize(client.GridVersion, "HelloWorld")
console.log(client.send(xml))
```

## License

trellis is licensed under the [MIT license](https://github.com/lrre-foss/trellis/blob/trunk/LICENSE). A copy of it has been included with trellis.
