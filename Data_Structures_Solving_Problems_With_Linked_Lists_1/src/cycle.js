/**  TODO: Write an algorithm to find whether a linked list has a cycle
 *
 * (i.e., whether a node in the list has its next value pointing
 * to an earlier node in the list).
 *
 * Return true if a cycle is found, false otherwise. */
const cycle = (list) => {
  if (!list.head) {
    return false;
  }

  let slowPointer = list.head;
  let fastPointer = list.head;

  while (fastPointer.next && fastPointer.next.next) {
    slowPointer = slowPointer.next;
    fastPointer = fastPointer.next.next;

    if (slowPointer == fastPointer) {
      return true;
    }
  }
  return false;
};

module.exports = cycle;
