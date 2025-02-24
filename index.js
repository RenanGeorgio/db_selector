import 'react-native-gesture-handler';

const dotenv = require("dotenv");
dotenv.config({path: "./db.env"})

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);

if (Platform.OS === 'web') {
    const rootTag = document.getElementById('root') || document.getElementById(appName);
    AppRegistry.runApplication(appName, { rootTag });
}