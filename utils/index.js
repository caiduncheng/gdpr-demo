import Cookies from "js-cookie";

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

export function getCookie(name) {
  if (process.browser) {
    if (document.cookie.length > 0) {
      let index = document.cookie.indexOf(name + "=");
      if (index != -1) {
        index = index + name.length + 1;
        let end = document.cookie.indexOf(";", index);
        if (end == -1) end = document.cookie.length;
        return document.cookie.substring(index, end);
      }
    }
    return "";
  }
}

export function removeToken(key = "TOMS_TOKEN") {
  if (process.env.NODE_ENV === "development") {
    return Cookies.remove(key);
  } else {
    document.cookie = `${key}=;domain=${process.env.VUE_APP_DOMAIN};path=/;expires=Thu,01-Jan-1970 00:00:01 GMT`;
  }
}
