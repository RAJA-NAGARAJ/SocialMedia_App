function ajaxRequest(method, url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (this.readyState == 4) {
            if (this.status >= 200 && this.status < 300) {
                
                var responseData = JSON.parse(this.responseText);
                callback(null, responseData);
            } else {
                
                callback(new Error('Request failed with status ' + this.status));
            }
        }
    };
    xhr.open(method, url, true);
    xhr.send();
}

export default ajaxRequest;