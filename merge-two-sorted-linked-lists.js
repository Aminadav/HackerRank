// https://www.hackerrank.com/challenges/merge-two-sorted-linked-lists

// Complete the mergeLists function below.

/*
 * For your reference:
 *
 * SinglyLinkedListNode {
 *     int data;
 *     SinglyLinkedListNode next;
 * }
 *
 */
function mergeLists(head1, head2) {
  var h = head1;
  var newList = new SinglyLinkedList();
  while (head1 || head2) {
    if ((head1 && !head2) || (head1 && head1.data <= head2.data)) {
      newList.insertNode(head1.data);
      head1 = head1.next;
    } else if (head2) {
      newList.insertNode(head2.data);
      head2 = head2.next;
    }
  }
  return newList.head;
}
