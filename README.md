# Web Assembly PoC

Web Assembly PoC using AssemblyScript.

## Running

- Compile AssemblyScript using `npm run asbuild`
- Start web server with `npm run start`

## Adding code

- Change `assembly/index.ts` to add more web assembly code
- Change `index.html` to use functions from web assembly


## Knowledge

- WebAssembly is a lightweight, fast, safe, and polyglot “container” for functions.
    - It's portable and can run in different architectures

- `.wat` is the textual webAssembly output
- `.wasm` is the binary webAssembly output

- [Kevin Hoffman — Building a Containerless Future with WebAssembly](https://www.youtube.com/watch?v=vqBtoPJoQOE)
- WebAssembly Runtimes:
    - [wasmtime](https://github.com/bytecodealliance/wasmtime)
    - wasmer
    - WasmEdge runtime - Cloud Native web assembly runtime
    - WasmCloud - WebAssembly application framework
    - Wasm-micro-runtime (WAMR) - optimized for smaller embedded devices.
    - [Others](https://github.com/appcypher/awesome-wasm-runtimes)
- 