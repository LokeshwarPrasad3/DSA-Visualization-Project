export const codeStringSTL = `//🚀STL IMPLEMENTATION LINKEDLIST
#include <iostream>
#include <list>
using namespace std;

int main() {
    // Create a list of integers
    list<int> linkedList;

    // Insert elements into the linked list
    linkedList.push_back(10);
    linkedList.push_back(20);
    linkedList.push_back(30);

    // Print the elements of the linked list
    cout << "Linked List: ";
    for (auto it = linkedList.begin(); it != linkedList.end(); ++it) {
        cout << *it << " ";
    }
    cout << endl;

    return 0;
}
`;

export const codeStringImplementation = `//🚀CODE IMPLEMENTATION
#include <iostream>

using namespace std;

class Node {
public:
    int data;
    Node* next;

    Node(int value) {
        data = value;
        next = nullptr;
    }
};

class LinkedList {
private:
    Node* head;
    Node* tail;

public:
    LinkedList() {
        head = nullptr;
        tail = nullptr;
    }

    void insert(int value) {
        Node* newNode = new Node(value);
        if (!head) {
            head = tail = newNode;
        } else {
            tail->next = newNode;
            tail = newNode;
        }
    }

    void display() {
        Node* current = head;
        while (current) {
            cout << current->data << " ";
            current = current->next;
        }
        cout << endl;
    }
};

int main() {
    LinkedList ll;

    ll.insert(10);
    ll.insert(20);
    ll.insert(30);

    cout << "Linked List: ";
    ll.display();

    return 0;
}

`;

export const Documentation = `# Linked List Overview

A linked list is a linear data structure consisting of a sequence of elements, where each element points to the next one in the sequence. Unlike arrays, linked lists do not have a fixed size and allow for dynamic memory allocation.

# Operations:

1. Insert
   - Description: Adds a new element to the end of the linked list.
   - Syntax: void insert(const T& value);

2. Display
   - Description: Prints the elements of the linked list to the console.
   - Syntax: void display();

# Properties:

1. Singly Linked List
   - Description: Each element in the list points to the next one, forming a unidirectional sequence.
   - Advantages: Efficient insertion and deletion at the beginning and end of the list.
   - Disadvantages: Inefficient random access and traversal requires sequential scanning.

2. Doubly Linked List
   - Description: Each element in the list points to both the next and the previous one, forming a bidirectional sequence.
   - Advantages: Supports efficient traversal in both directions and faster deletion of nodes.
   - Disadvantages: Requires more memory to store additional pointers.

3. Circular Linked List
   - Description: The last element in the list points back to the first one, forming a circular sequence.
   - Advantages: Allows for efficient traversal and operations that require looping through the list indefinitely.
   - Disadvantages: Insertion and deletion operations may be slightly more complex compared to linear linked lists.

`;
