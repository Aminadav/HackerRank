//  https://www.hackerrank.com/challenges/find-the-merge-point-of-two-joined-linked-lists

// Complete the findMergeSinglyLinkedListNode function below.

/*
 * For your reference:
 *
 * SinglyLinkedListSinglyLinkedListNode {
 *     int data;
 *     SinglyLinkedListNode* next;
 * };
 *
 */
    static int findMergeNode(SinglyLinkedListNode* headA, SinglyLinkedListNode* headB) {
        
       int c1=0,c2=0;

SinglyLinkedListNode *p=headA,*q=headB;
while(p!=NULL){
    p=p->next;
    c1++;
}
while(q!=NULL){
    q=q->next;
    c2++;
}
if(c2>c1){
    p=headA;
    q=headB;
    for(int i=0;i<(c2-c1);i++){
        q=q->next;
    }
    while(p!=q){
        p=p->next;
        q=q->next;
    }
    return q->data;
}else{
    p=headA;
    q=headB;
    for(int i=0;i<(c1-c2);i++){
        p=p->next;
    }
    while(p!=q){
        p=p->next;
        q=q->next;
    }
    return p->data;
}

    }