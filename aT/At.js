// @ts-check
/** rearrange는  can mutate array. 
 * @template T
 *
 * @param {T[]} array the input array
 * @param {number} from the position to move from
 * @param {number} to the position to move to
 *
 * @returns {T[]}
 */
export function arrange(array, from, to) {
  var len = array.length;
  var temp = [];
  temp = array;
  
  // change negatives
  if(from < 0) {
  	from += len;
  }
  if(to < 0) {
  	to += len;
  }
  
  var fromPtr = array[from];
  var toPtr = array[to];
  
  // move
  temp.splice(from, 1);
  temp.splice(to, 0, fromPtr);
  
  return temp;
}