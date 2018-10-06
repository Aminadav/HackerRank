// https://www.hackerrank.com/challenges/get-the-value-of-the-node-at-a-specific-position-from-the-tail

// Complete the getNode function below.

/*
 * For your reference:
 *
 * SinglyLinkedListNode {
 *     int data;
 *     SinglyLinkedListNode next;
 * }
 *
 */
function getNode(head, positionFromTail) {
  var result = head;
  var index = 0;
  while (head) {
    if (index > positionFromTail) {
      result = result.next;
    }
    head = head.next;
    index++;
  }
  return result.data;
}
