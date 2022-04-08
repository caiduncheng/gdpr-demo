function getHashParameters() {
  var url = decodeURIComponent(location.href);
  var arr = (url || "").split("?");
  // [1].split("&");
  if (arr.length > 1) {
    arr = arr[1].split("&");
    var params = {};
    for (var i = 0; i < arr.length; i++) {
      var data = arr[i].split("=");
      if (data.length === 2) {
        params[data[0]] = data[1];
      }
    }
    return params;
  }
}
export function getQueryParam(key) {
  var params = getHashParameters();
  return params ? params[key] || "" : "";
}
