// https://www.hackerrank.com/challenges/print-the-elements-of-a-linked-list

// Complete the printLinkedList function below.

/*
 * For your reference:
 *
 * SinglyLinkedListNode {
 *     int data;
 *     SinglyLinkedListNode next;
 * }
 *
 */
function printLinkedList(head) {
  while (head) {
    console.log(head.data);
    head = head.next;
  }
}
