# Geolynked (geolynked)

A quasar geoportal

## Install the dependencies

```bash
yarn or npm install
```

### Start the app in development mode (hot-code reloading, error reporting, etc.)

```bash
quasar dev
```

### Lint the files

```bash
yarn run lint
```

### Run the app in production

Create a .env file and copy the following with the correct information:
API_HOST_URL=http://XXX.XXX.X.XXX
PORT=XXXX

### Build the app for production

```bash
quasar build
```

### Serve the build

Serve the static files in dist/spa using nginx or copy to geolynked-api dist folder and serve along with API
