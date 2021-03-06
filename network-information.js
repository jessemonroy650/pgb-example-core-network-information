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

        //  on screen <span>s that maintains the network information
        networkInformationPlugin.connectStatusId = statusId;
        networkInformationPlugin.connectTypeId   = connectId;

        //  event listener hooks
        document.addEventListener("offline", networkInformationPlugin.onOffline, false);
        document.addEventListener("online", networkInformationPlugin.onOnline, false);

        // force the on screen display
        if (navigator.connection.type != Connection.NONE) {
            networkInformationPlugin.onOnline();
        } else {
            networkInformationPlugin.onOffline();
        }
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
        document.getElementById(networkInformationPlugin.connectStatusId).setAttribute("style", "color:#ffffff;background-color:#ff0022;");
        networkInformationPlugin.updateConnectionState();
    },
    //
    onOnline : function () {
        document.getElementById(networkInformationPlugin.connectStatusId).innerHTML = 'Online';
        document.getElementById(networkInformationPlugin.connectStatusId).setAttribute("style", "background-color:#22ff44;");
        networkInformationPlugin.updateConnectionState();
    }
    //
}
