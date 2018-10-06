// https://www.hackerrank.com/challenges/insert-a-node-at-the-tail-of-a-linked-list

// Complete the insertNodeAtTail function below.

/*
 * For your reference:
 *
 * SinglyLinkedListNode {
 *     int data;
 *     SinglyLinkedListNode next;
 * }
 *
 */
function insertNodeAtTail(head, data) {
  if (!head) {
    return new SinglyLinkedListNode(data);
  }
  var iHead = head;
  while (iHead.next) {
    iHead = iHead.next;
  }
  iHead.next = new SinglyLinkedListNode(data);
  return head;
}
