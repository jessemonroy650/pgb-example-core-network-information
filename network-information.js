var networkInformationPlugin = {
    version : '1.0.0',
    connectStatusId : '',
    connectTypeId   : '',

    init : function (devId) {
        document.getElementById('status0').innerHTML = "init() called";
        //
        return JSON.stringify(navigator.connection);
    },
    //
    hook : function (statusId, connectId) {
        document.getElementById('status0').innerHTML = "hook() called";
        //
        networkInformationPlugin.connectStatusId = statusId;
        networkInformationPlugin.connectTypeId   = connectId;
        document.addEventListener("offline", networkInformationPlugin.onOffline, false);
        document.addEventListener("online", networkInformationPlugin.onOnline, false);
        //
        networkInformationPlugin.updateConnectionState();
    },
    //
    updateConnectionState : function () {
        var networkState = navigator.connection.type;
        var states = {};

        states[Connection.UNKNOWN]  = 'Unknown connection';
        states[Connection.ETHERNET] = 'Ethernet connection';
        states[Connection.WIFI]     = 'WiFi connection';
        states[Connection.CELL_2G]  = 'Cell 2G connection';
        states[Connection.CELL_3G]  = 'Cell 3G connection';
        states[Connection.CELL_4G]  = 'Cell 4G connection';
        states[Connection.CELL]     = 'Cell generic connection';
        states[Connection.NONE]     = 'No network connection';

        document.getElementById(networkInformationPlugin.connectTypeId).innerHTML = states[networkState];
    },
    //
    onOffline : function () {
        document.getElementById(networkInformationPlugin.connectStatusId).innerHTML = 'Offline';
        networkInformationPlugin.updateConnectionState();
    },
    //
    onOnline : function () {
        document.getElementById(networkInformationPlugin.connectStatusId).innerHTML = 'Online';
        networkInformationPlugin.updateConnectionState();
    }
    //
}
