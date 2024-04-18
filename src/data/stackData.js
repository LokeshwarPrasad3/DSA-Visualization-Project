export const codeStringSTL = `🚀//STL IMPLEMENTATION
#include <iostream>
#include <stack>

int main() {
    // Create a stack of integers
    std::stack<int> st;

    // Push elements onto the stack
    st.push(10);
    st.push(20);
    st.push(30);
    // Print the top element of the stack
    std::cout << "Top element of the stack: " << st.top() << std::endl;

    // Pop an element from the stack
    st.pop();
    // Print the top element after popping
    std::cout << "Top element of the stack after popping: " << st.top() << std::endl;

    // Check if the stack is empty
    if (st.empty()) {
        std::cout << "Stack is empty" << std::endl;
    } else {
        std::cout << "Stack is not empty" << std::endl;
    }

    // Print the size of the stack
    std::cout << "Size of the stack: " << st.size() << std::endl;

    return 0;
}

`;

export const codeStringImplementation = `🚀//CODE IMPLEMENTATION
#include <iostream>

#define MAX_SIZE 1000

using namespace std;

class Stack {
private:
    int arr[MAX_SIZE];
    int top;

public:
    Stack() {
        top = -1;
    }

    void push(int value) {
        if (top == MAX_SIZE - 1) {
            cout << "Stack overflow!" << endl;
            return;
        }
        arr[++top] = value;
    }

    void pop() {
        if (top == -1) {
            cout << "Stack underflow!" << endl;
            return;
        }
        top--;
    }

    int peek() {
        if (top == -1) {
            cout << "Stack is empty!" << endl;
            return -1;
        }
        return arr[top];
    }

    bool isEmpty() {
        return top == -1;
    }
};

int main() {
    Stack st;

    st.push(10);
    st.push(20);
    st.push(30);

    cout << "Top element: " << st.peek() << endl;

    st.pop();
    cout << "Top element after pop: " << st.peek() << endl;

    return 0;
}


`;

export const Documentation = `
# Stack Data Structure Documentation

## Overview

A stack is a linear data structure that follows the Last In, First Out (LIFO) principle.
It means that the element inserted last is the first element to be removed.
The stack is used in various algorithms and applications where elements are to be processed
in a last-in-first-out manner.

## Operations

1. **Push**
   - **Description:** Adds an element to the top of the stack.
   - **Syntax:** void push(const T& value); 

2. **Pop**
   - **Description:** Removes the top element from the stack.
   - **Syntax:** void pop(); 

3. **Top**
   - **Description:** Returns a reference to the top element of the stack.
   - **Syntax:** T & top(); 

4. **Size**
   - **Description:** Returns the number of elements in the stack.
   - **Syntax:** size_t size() const ; 

5. **Empty**
   - **Description:** Checks if the stack is empty.
   - **Syntax:** bool empty() const ;
`;