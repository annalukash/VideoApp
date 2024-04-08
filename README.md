# Installation:
1. Run the following command from the _root_ directory:
```bash
yarn install
```

### For ios only:
1. Run the following command from the _root_:
```bash
cd ios && pod install
```
2. Open the project in Xcode, go to the "Signing & Capabilities" section, and verify the code signing, bundle identifier, merchant id, associated domains and other settings.

# Run the app
### Start the Metro Server

To start Metro, run the following command from the _root_ of your React Native project:

```bash
yarn start
```

### Start your Application

Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of your React Native project. Run the following command to start your _Android_ or _iOS_ app:

### For Android

```bash
yarn android
```

### For iOS

```bash
yarn ios
```
