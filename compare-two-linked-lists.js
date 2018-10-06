// https://www.hackerrank.com/challenges/compare-two-linked-lists

// Complete the CompareLists function below.

/*
 * For your reference:
 *
 * SinglyLinkedListNode {
 *     int data;
 *     SinglyLinkedListNode next;
 * }
 *
 */
function CompareLists(llist1, llist2) {
  var iHead1 = llist1;
  var iHead2 = llist2;
  while (iHead1 && iHead2) {
    if (iHead1.data != iHead2.data) return false;
    iHead1 = iHead1.next;
    iHead2 = iHead2.next;
  }
  if (iHead1 || iHead2) return false;
  return true;
}
