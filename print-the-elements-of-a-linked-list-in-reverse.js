// https://www.hackerrank.com/challenges/print-the-elements-of-a-linked-list-in-reverse

// Complete the reversePrint function below.

/*
 * For your reference:
 *
 * SinglyLinkedListNode {
 *     int data;
 *     SinglyLinkedListNode next;
 * }
 *
 */
function reversePrint(head) {
  var a = [];
  var iHead = head;
  while (iHead) {
    a.unshift(iHead.data);
    iHead = iHead.next;
  }
  console.log(a.join("\n"));
}
