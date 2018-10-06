// https://www.hackerrank.com/challenges/delete-duplicate-value-nodes-from-a-sorted-linked-list

// Complete the removeDuplicates function below.

/*
 * For your reference:
 *
 * SinglyLinkedListNode {
 *     int data;
 *     SinglyLinkedListNode next;
 * }
 *
 */
function removeDuplicates(head) {
  var originalHead = head;
  while (head) {
    var thisData = head.data;
    var thisNode = head;
    console.log(head.data);
    while (head.next && head.next.data == thisData) {
      console.log("inner");
      head = head.next;
      thisNode.next = head.next;
    }
    head = head.next;
  }
  return originalHead;
}
