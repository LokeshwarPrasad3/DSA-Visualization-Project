export const codeStringSTL = `//🚀STL IMPLEMENTATION
#include <iostream>
#include <vector>
using namespace std;

int main() {
    // Create an empty array
    vector<int> arr;

    // Insert elements
    arr.push_back(10);
    arr.push_back(20);
    arr.push_back(30);

    // Access element at index 1
    cout << "Element at index 1: " << arr[1] << endl;

    // Update element at index 2
    arr[2] = 40;

    // Remove element at index 0
    arr.erase(arr.begin());

    // Display elements
    cout << "Array elements: ";
    for (int i = 0; i < arr.size(); ++i) {
        cout << arr[i] << " ";
    }
    cout << endl;

    return 0;
}



`;

export const codeStringImplementation = `//🚀CODE IMPLEMENTATION
#include <iostream>
using namespace std;

int main() {
    // Declaration and initialization of an array
    int numbers[5] = {1, 2, 3, 4, 5};

    // Accessing elements of an array using index
    int firstElement = numbers[0]; // Accessing the first element

    // Modifying elements of an array using index
    numbers[2] = 10; // Modifying the third element

    // Getting the size of an array
    int size = sizeof(numbers) / sizeof(numbers[0]); // Gives the number of elements in the array

    // Iterating over elements of an array
    for (int i = 0; i < size; i++) {
        // Access each element using index i
        cout << numbers[i] << " ";
    }

    return 0;
}


`;

export const Documentation = `# Array Data Structure Overview

An array is a sequential collection of elements stored in contiguous memory locations.

# Operations :

1. Insertion (at the end):
   - Description: Adds an element to the end of the array.
   - Syntax: void insert(const T& value);

2. Deletion (at a specific index):
   - Description: Removes an element from the array at the specified index.
   - Syntax: void remove(int index);

3. Access (by index):
   - Description: Retrieves the element at the specified index.
   - Syntax: T& getElement(int index);

4. Search:
   - Description: Searches for a specific element in the array.
   - Syntax: int search(const T& target);

5. Size:
   - Description: Returns the number of elements in the array.
   - Syntax: int size() const;

6. Empty:
   - Description: Checks if the array is empty.
   - Syntax: bool isEmpty() const;

Overflow: Adding to a full array may require resizing the array, which can be costly in terms of time and memory.

Underflow: Removing from an empty array may cause errors or unexpected behavior.

`;

export const SelectOptionArrayInputTypes = [
   { type: "Number" },
   { type: "Character" },
]