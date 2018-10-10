# pgb-example-core-network-information
Phonegap Build example for core plugin Cordova 'Network-information' using `cli-6.0.0`.

This app uses the Cordova 'Device' & 'Network-information' plugin.

* https://www.npmjs.com/package/cordova-plugin-device
* https://www.npmjs.com/package/cordova-plugin-network-information

**NOTE** Network status needs to be forced when the app starts as the "connection status" Event (offline/online) only fires on transistion.

## Events

* offline
* online

## Properties

* connection.type
  * **Constants**
  * Connection.UNKNOWN
  * Connection.ETHERNET
  * Connection.WIFI
  * Connection.CELL_2G
  * Connection.CELL_3G
  * Connection.CELL_4G
  * Connection.CELL
  * Connection.NONE
