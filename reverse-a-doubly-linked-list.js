// https://www.hackerrank.com/challenges/reverse-a-doubly-linked-list

// Complete the reverse function below.

/*
 * For your reference:
 *
 * DoublyLinkedListNode {
 *     int data;
 *     DoublyLinkedListNode next;
 *     DoublyLinkedListNode prev;
 * }
 *
 */
function reverse(head) {
  var rHead = null;
  while (head) {
    var newNode = new DoublyLinkedListNode(head.data);
    if (rHead) {
      newNode.next = rHead;
      rHead = newNode;
    } else {
      rHead = new DoublyLinkedListNode(head.data);
    }
    head = head.next;
  }
  return rHead;
}
