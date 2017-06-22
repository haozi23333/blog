/**
 * Created by haozi on 6/22/2017.
 */

interface toastedOptions {
  /**
   *  主题
   */
  theme?: 'outline' | 'bubble' | 'primary'
  /**
   * 位置
   */
  position?: 'top-left' | 'top-center' | 'top-right' | 'bottom-left' | 'bottom-center' | 'bottom-right'
  /**
   * 持续时间
   */
  duration?: 500
  /**
   *
   */
  onComplete?: ''
  /**
   *
   */
  className?: ''
}

// declare namespace toasted {
//   function success(message: string, option: toastedOptions)
//   function show(message: string, option: toastedOptions)
//   function info(message: string, option: toastedOptions)
//   function error(message: string, option: toastedOptions)
// }

declare namespace Vue {
  // export type toasted = toaste1d
  namespace toasted  {
    function success(message: string, option: toastedOptions)
    function show(message: string, option: toastedOptions)
    function info(message: string, option: toastedOptions)
    function error(message: string, option: toastedOptions)
  }
}