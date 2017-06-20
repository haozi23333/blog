/**
 * Created by haozi on 2017/06/20.
 */

declare function key(wantBindkey: string, callback: (event: KeyboardEvent, handle: any) => void)
// declare function

declare namespace key{
  // function key(wantBindkey: string, callback: (event: KeyboardEvent, handle: any) => void)
  function unbind(key: string, key2?: string)
}
