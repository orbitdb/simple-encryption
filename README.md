# OrbitDB Simple Encryption

<p align="left">
  <img src="https://github.com/orbitdb/orbitdb/blob/main/images/orbit_db_logo_color.png" width="256" />
</p>

[![Matrix](https://img.shields.io/matrix/orbit-db:matrix.org?label=chat%20on%20matrix)](https://app.element.io/#/room/#orbit-db:matrix.org) [![npm (scoped)](https://img.shields.io/npm/v/%40orbitdb/simple-encryption)](https://www.npmjs.com/package/%40orbitdb/simple-encryption) [![node-current (scoped)](https://img.shields.io/node/v/%40orbitdb/simple-encryption)](https://www.npmjs.com/package/@orbitdb/simple-encryption)

A simple password encryption module that encrypts data using AES-GCM PBKDF2.

**NOTE** This encryption module is not audited in any way for security and is intended for demonstration purposes only.

## Install

This project uses [npm](http://npmjs.com/) and [nodejs](https://nodejs.org/).

```sh
npm i @orbitdb/simple-encryption
```

## Usage

To implement encryption within your database, create an encryption object and pass it to OrbitDB's `open` function:

```js
import { createOrbitDB } from '@orbitdb/core'
import { SimpleEncryption } from '@orbitdb/simple-encryption'


// Instantiate encryption for either data, replication or both.
const replication = await SimpleEncryption({ password: 'hello' })
const data = await SimpleEncryption({ password: 'world' })

const encryption = { data, replication }

// Set up OrbitDB. See https://github.com/orbitdb/orbitdb/blob/main/docs/GETTING_STARTED.md for more information if you are unfamiliar with OrbitDB.
const db = await orbitdb.open('db-encrypted', { encryption })
```

When replicating a database, initiate the same encryption configuration and pass it to `open`:

```js
import { createOrbitDB } from '@orbitdb/core'
import { SimpleEncryption } from '@orbitdb/simple-encryption' 


// Instantiate encryption for either data, replication or both.
const replication = await SimpleEncryption({ password: 'hello' })
const data = await SimpleEncryption({ password: 'world' })

const encryption = { data, replication }

const dbAddress = '0x0' // the address of the remote database. 

// Set up OrbitDB. See https://github.com/orbitdb/orbitdb/blob/main/docs/GETTING_STARTED.md for more information if you are unfamiliar with OrbitDB.
const db = await orbitdb.open(dbAddress, { encryption })

```

## Contributing

**Take a look at our organization-wide [Contributing Guide](https://github.com/orbitdb/welcome/blob/master/contributing.md).** You'll find most of your questions answered there. Some questions may be answered in the [FAQ](FAQ.md), as well.

If you want to code but don't know where to start, check out the issues labelled ["help wanted"](https://github.com/orbitdb/orbitdb/issues?q=is%3Aopen+is%3Aissue+label%3A%22help+wanted%22+sort%3Areactions-%2B1-desc).

## License

[MIT](LICENSE) OrbitDB Community