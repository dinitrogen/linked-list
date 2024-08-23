# Linked List
A linked list data structure built as a javascript class.

## Usage

### Import and create list
1. `import { LinkedList } from "./LinkedList.js";` import the LinkedList class
2. `const list = new LinkedList()` instantiates a new empty linked list.

### Available methods
- `list.append(value)` adds a new node to the end of the list with a specified value
- `list.prepend(value)` adds a new node to the start of the list with a specified value
- `list.size()` returns the length of the list
- `list.getHead()` returns the first Node of the list
- `list.getTail()` returns the last Node of the list
- `list.at(index)` returns the Node at a specified index
- `list.pop()` removes the last Node
- `list.contains(value)` returns true if the list contains a specified value, otherwise false
- `list.find(value)` returns the index of the node with specified value, or null if the value is not in the list
- `list.toString()` returns a string representation of the list
    - eg. `( dog ) -> ( cat ) -> ( parrot ) -> ( hamster ) -> ( snake ) -> ( turtle ) -> null`
- `list.insertAt(value, index)` adds a node with the provided value at the specified index
- `list.removeAt(index)` removes a node at the specified index