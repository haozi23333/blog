/**
 * Created by haozi on 6/6/2017.
 */

export function formatDate (date) {
  const dateList = new Date(date).toUTCString().match(/(\d*)\s(\w*)\s(\d*)\s/)
  return `${dateList[2]}, ${dateList[3]} ${dateList[1]}`
}
