/**
 * Created by haozi on 2017/06/30.
 */


declare namespace ace{
  // config: {
  //   set: Function
  // },
  //
  // require: Function,
  // }
  namespace config {
    function set(key: string, val: string)
  }
  function require(path: string)
}
