// https://www.hackerrank.com/challenges/insert-a-node-at-the-head-of-a-linked-list

// Complete the insertNodeAtHead function below.

/*
 * For your reference:
 *
 * SinglyLinkedListNode {
 *     int data;
 *     SinglyLinkedListNode next;
 * }
 *
 */
function insertNodeAtHead(head, data) {
  if (!head) {
    return new SinglyLinkedListNode(data);
  }
  var newHead = new SinglyLinkedListNode(data);
  newHead.next = head;
  return newHead;
}
