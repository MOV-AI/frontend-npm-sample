# Sample application for integration with MOV.AI libraries

This is a simple application that has integration with MOV.AI libraries.

It's purpose is to show how to use MOV.AI libraries outside of a robot container, and in a client context.

## Install pnpm (if not installed
```eh
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
source ~/.bashrc
nvm install lts/iron # node 20
nvm alias default lts/iron
nvm use lts/iron
npm i -g pnpm
```

## Install dependencies
```sh
pnpm install
```
## Starting development mode
```sh
pnpm start
```

## Build the app in production
```sh
pnpm build
```

## Chaning target robot
Go to src/setupProxy.js and change the "target" property in the object given as an argument to createProxyMiddleware.
