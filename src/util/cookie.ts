/**
 * Created by haozi on 6/22/2017.
 */
/**
 *
 * @param name
 * @param value
 * @param iDay
 */
function setCookie(name, value, iDay) {
  /* iDay 琛ㄧず杩囨湡鏃堕棿
   cookie涓� = 鍙疯〃绀烘坊鍔狅紝涓嶆槸璧嬪�� */
  var oDate = new Date();
  oDate.setDate(oDate.getDate() + iDay);
  document.cookie = name + '=' + value + ';expires=' + oDate;
}
/**
 *
 * @param c_name
 * @returns {any}
 */
function getCookie(c_name) {
  if (document.cookie.length > 0) {
    var c_start = document.cookie.indexOf(c_name + "=");
    if (c_start != -1) {
      c_start = c_start + c_name.length + 1;
      var c_end = document.cookie.indexOf(";", c_start);
      if (c_end == -1)
        c_end = document.cookie.length;
      return unescape(document.cookie.substring(c_start, c_end));
    }
  }
  return "";
}

export {
  getCookie,
  setCookie
}