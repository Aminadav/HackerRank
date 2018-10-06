// https://www.hackerrank.com/challenges/detect-whether-a-linked-list-contains-a-cycle

bool has_cycle(SinglyLinkedListNode* head) {
    // Complete this function
    // Do not write the main method
    if(head == NULL)    return false;
    
    SinglyLinkedListNode* slow = head;
    SinglyLinkedListNode* fast = head->next;
    
    while(fast != NULL && fast->next != NULL)
    {
        slow = slow->next;
        fast = fast->next->next;
        
        if(fast == slow)    return true;
    }
    
    return false;
}