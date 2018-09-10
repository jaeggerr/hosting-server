# Simple hosting server

Very simple backend to host files.

## Start the sever

* Directly run src/index.ts

```sh
$ npm run start -- --port <portNumber>
```

* Or if you use pm2, create a pm2 configuration file.
An example can be found at ./config-example-pm2.json.

```sh
$ pm2 start <pm2-config-file>.json
```

## Host files

Just place your files and folders in the **files** directory.
