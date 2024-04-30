export const codeStringSTL = `//🚀STL IMPLEMENTATION
#include <iostream>
#include <queue>
using namespace std;

int main() {
    // Create a queue of integers
    queue<int> q;

    // Enqueue elements into the queue
    q.push(10);
    q.push(20);
    q.push(30);

    // Print the front element of the queue
    cout << "Front element of the queue: " << q.front() << endl;

    // Dequeue an element from the queue
    q.pop();

    // Print the front element after dequeuing
    cout << "Front element of the queue after dequeuing: " << q.front() << endl;

    // Check if the queue is empty
    if (q.empty()) {
        cout << "Queue is empty" << endl;
    } else {
        cout << "Queue is not empty" << endl;
    }

    // Print the size of the queue
    cout << "Size of the queue: " << q.size() << endl;

    return 0;
}

`;

export const codeStringImplementation = `//🚀CODE IMPLEMENTATION
#include <iostream>

#define MAX_SIZE 1000

using namespace std;

class Queue {
private:
    int arr[MAX_SIZE];
    int front, rear;

public:
    Queue() {
        front = rear = -1;
    }

    void enqueue(int value) {
        if ((rear + 1) % MAX_SIZE == front) {
            cout << "Queue overflow!" << endl;
            return;
        }
        if (isEmpty()) {
            front = rear = 0;
        } else {
            rear = (rear + 1) % MAX_SIZE;
        }
        arr[rear] = value;
    }

    void dequeue() {
        if (isEmpty()) {
            cout << "Queue underflow!" << endl;
            return;
        }
        if (front == rear) {
            front = rear = -1;
        } else {
            front = (front + 1) % MAX_SIZE;
        }
    }

    int frontElement() {
        if (isEmpty()) {
            cout << "Queue is empty!" << endl;
            return -1;
        }
        return arr[front];
    }

    size_t size() const {
        if (isEmpty()) {
            return 0;
        }
        return (rear >= front) ? (rear - front + 1) : (MAX_SIZE - front + rear + 1);
    }

    bool isEmpty() const {
        return front == -1;
    }
};

int main() {
    Queue q;

    q.enqueue(10);
    q.enqueue(20);
    q.enqueue(30);

    cout << "Front element: " << q.frontElement() << endl;

    q.dequeue();
    cout << "Front element after dequeue: " << q.frontElement() << endl;

    cout << "Size of the queue: " << q.size() << endl;

    return 0;
}

`;

export const Documentation = `# Queue Overview

A queue is a First In, First Out(FIFO) linear data structure.
It's commonly used in scenarios where the order of processing is important,
such as task scheduling and handling requests in computer networks.

# Operations:

1. Enqueue
    - Description: Adds an element to the rear of the queue.
   - Syntax: void enqueue(const T& value);

2. Dequeue
    - Description: Removes the front element from the queue.
   - Syntax: void dequeue();

3. Front
    - Description: Returns a reference to the front element of the queue.
   - Syntax: T & front();

4. Size
    - Description: Returns the number of elements in the queue.
   - Syntax: size_t size() const ;

5. Empty
    - Description: Checks if the queue is empty.
   - Syntax: bool empty() const ;

Overflow: Adding to a full queue may lead to data loss or instability.

    Underflow: Removing from an empty queue may cause errors or unexpected behavior.
`;










