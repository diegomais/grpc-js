<h1 align="center">
    <img alt="gRPC" src="./docs/grpc-logo.png" /><br>
    <b>gRPC: high performance Remote Procedure Call (RPC)</b>
</h1>

<p align="center">
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/diegomais/grpc-js?style=for-the-badge">
  <img alt="GitHub top language" src="https://img.shields.io/github/languages/top/diegomais/grpc-js?style=for-the-badge">
  <img alt="GitHub license" src="https://img.shields.io/github/license/diegomais/grpc-js?style=for-the-badge">
  <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/diegomais/grpc-js?style=for-the-badge">
</p>

<p align="center">
  <a href="#rocket-technologies">Technologies</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#seat-getting-started">Getting started</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#thinking-how-to-contribute">How to contribute</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#pencil-license">License</a>
</p>

## :rocket: Technologies

This project was developed with the following technologies:

- [gRPC](https://grpc.io)

## :seat: Getting started

These instructions will get you a copy of the full project up and running on your local machine for development and testing purposes.

### Prerequisites

You will need to install [Git](https://git-scm.com/downloads) and [Node.js](https://nodejs.org) before following the instructions below.

### Cloning the project

You can obtain the project by running the instruction bellow on your terminal:

```bash
git clone https://github.com/diegomais/grpc-js.git
```

### Compiling `protobuf` files (optional)

You can install the protocol compiler, `protoc`, with a package manager under Linux or macOS using the following commands.

- Linux, using apt or apt-get, for example:

```bash
apt install -y protobuf-compiler
protoc --version # Ensure compiler version is 3+
```

- MacOS, using Homebrew:

```bash
brew install protobuf
protoc --version # Ensure compiler version is 3+
```

You can see the compiled protobuf file by running the instruction bellow on your terminal:

```bash
run npm run compile
```

## :thinking: How to contribute

1. Fork this repository;
2. Create a branch with your feature: `git checkout -b my-feature`;
3. Commit your changes: `git commit -m '[feat](scope) My new feature'`;
4. Push to your branch: `git push origin my-feature`.

After the merge of your pull request is done, you can delete your branch.

## :pencil: License

This project is under the MIT license. See the [LICENSE](LICENSE) for more details.

---

Made with :heart: by [Diego Mais](https://diegomais.github.io) :wave:.
