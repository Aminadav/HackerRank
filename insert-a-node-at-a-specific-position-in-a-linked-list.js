// https://www.hackerrank.com/challenges/insert-a-node-at-a-specific-position-in-a-linked-list

// Complete the insertNodeAtPosition function below.

/*
 * For your reference:
 *
 * SinglyLinkedListNode {
 *     int data;
 *     SinglyLinkedListNode next;
 * }
 *
 */
function insertNodeAtPosition(head, data, position) {
  var iHead = head;
  for (var i = 0; i < position - 1; i++) {
    iHead = iHead.next;
  }
  var next = iHead.next;
  var newNode = new SinglyLinkedListNode(data);
  iHead.next = newNode;
  newNode.next = next;
  return head;
}
