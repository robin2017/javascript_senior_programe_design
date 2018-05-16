var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function () {
    if (xhr.readyState == 4) {
        if (xhr.status >= 200 && xhr.status < 300 || xhr.status == 300) {
            console.log(xhr.responseText);//ajax response data
            console.log(xhr.getResponseHeader("respHeader"));//respValue
        } else {
            console.log('failed:', xhr.status);
        }
    }
};
xhr.open("get", "url_data", true);
xhr.setRequestHeader("reqHeader", "reqValue");
xhr.send(null);