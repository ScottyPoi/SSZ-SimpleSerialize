---
title: c# ssz
toc: []
---

# SSZ in C#

## From **Cortex Simple Serialize**

An implementation of the ETH2.0 Simple Serialize (SSZ) specification, for .NET Core (written in C#).

For details of the specification, see https://github.com/ethereum/eth2.0-specs/blob/dev/specs/simple-serialize.md

Supports serialization and Merkleization for uint8 (byte), uint16 (ushort), uint32 (uint), uint64 (ulong), boolean, containers, vectors, lits, bitvector, and bitlist.

Functionality is via SSZ element wrappers, that can be easily created from values and objects. See the tests for examples. There is no automatic (reflection-based) serialization, or built-in support for streams yet (serialization just returns a byte span).

Does not yet support uint128, uint256, or union types. Does not yet support deserialization.

Does not support self-signed containers directly, although you can readily get the hash root of the truncated values, i.e. the signing root.

## Getting started

### Pre-requisites

* .NET Core 3.0 development tools

### Compile and run tests

To compile and run the unit tests:

```
dotnet test test/Cortex.SimpleSerialize.Tests --verbosity normal
```

### Optional requirements

* PowerShell Core, to run build scripts
* An editor, e.g. VS Code, if you want to contribute

### Compile, test and package

To run tests and then build a release package, with a gitversion based version number:

```
./build.ps1
```

The NuGet package will be created at:

```
src\Cortex.SimpleSerialize\bin\Release\Cortex.SimpleSerialize.<ver>.nupkg'.
```

## Development

Pull requests welcome, but will need to align with the project direction to be accepted.

## Contributions

Donations (ETH) can be sent to 0x1a474C09EE765C17fbf35B8B0fcb28a2B0E6e6db

## License

Copyright (C) 2019 Gryphon Technology Pty Ltd

This library is free software: you can redistribute it and/or modify it under the terms of the GNU Lesser General Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version.

This library is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU Lesser General Public License and GNU General Public License for more details.

You should have received a copy of the GNU Lesser General Public License and GNU General Public License along with this library. If not, see <https://www.gnu.org/licenses/>.
