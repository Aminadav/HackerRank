// https://www.hackerrank.com/challenges/insert-a-node-into-a-sorted-doubly-linked-list

// Complete the sortedInsert function below.

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
function sortedInsert(head, data) {
  var iHead = head;
  var prev = -1;
  var last;
  while (iHead) {
    if (iHead.prev && data >= iHead.prev.data && data <= iHead.data) {
      var newNode = new DoublyLinkedListNode(data);
      newNode.prev = iHead.prev;
      newNode.next = iHead;
      newNode.prev.next = newNode;
      return head;
    } else if (iHead.prev == null && data < iHead.data) {
      var newNode = new DoublyLinkedListNode(data);
      newNode.next = iHead;
      return newNode;
    }
    last = iHead;
    iHead = iHead.next;
  }
  var newNode = new DoublyLinkedListNode(data);
  last.next = newNode;
  return head;
}
