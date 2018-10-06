// https://www.hackerrank.com/challenges/reverse-a-linked-list

// Complete the reverse function below.

/*
 * For your reference:
 *
 * SinglyLinkedListNode {
 *     int data;
 *     SinglyLinkedListNode next;
 * }
 *
 */
function reverse(head) {
  var iHead = head;
  var prev = null;
  while (true) {
    var realNext = iHead.next;
    iHead.next = prev;
    prev = iHead;
    if (!realNext) break;
    iHead = realNext;
  }
  return iHead;
}
