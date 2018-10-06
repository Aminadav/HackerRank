// https://www.hackerrank.com/challenges/delete-a-node-from-a-linked-list

// Complete the deleteNode function below.

/*
 * For your reference:
 *
 * SinglyLinkedListNode {
 *     int data;
 *     SinglyLinkedListNode next;
 * }
 *
 */
function deleteNode(head, position) {
  if (position == 0) {
    return head.next;
  }
  var iHead = head;
  for (var i = 0; i < position - 1; i++) {
    iHead = iHead.next;
  }
  if (iHead.next) {
    iHead.next = iHead.next.next;
  } else {
    iHead.next = null;
  }
  return head;
}
