const LinkedList = require('../lib/LinkedList');

describe('LinkedList', () => {
  let linkedList;

  beforeEach(() => {
    linkedList = new LinkedList();
  });

  it('should append nodes to the linked list', () => {
    linkedList.append(1);
    linkedList.append(2);
    linkedList.append(3);

    expect(linkedList.head.value).toBe(1);
    expect(linkedList.head.next.value).toBe(2);
    expect(linkedList.head.next.next.value).toBe(3);
  });

  it('should insert a new node before a specific value', () => {
    linkedList.append(1);
    linkedList.append(2);
    linkedList.append(3);

    linkedList.insertBefore(2, 5);

    expect(linkedList.head.value).toBe(1);
    expect(linkedList.head.next.value).toBe(5);
    expect(linkedList.head.next.next.value).toBe(2);
    expect(linkedList.head.next.next.next.value).toBe(3);
  });

  it('should throw an error when inserting before a value in an empty list', () => {
    expect(() => linkedList.insertBefore(1, 5)).toThrowError('empty list');
  });

  it('should throw an error when inserting before a non-existent value', () => {
    linkedList.append(1);
    linkedList.append(2);
    linkedList.append(3);

    expect(() => linkedList.insertBefore(4, 5)).toThrowError('can not find the value');
  });

  it('should insert a new node after a specific value', () => {
    linkedList.append(1);
    linkedList.append(2);
    linkedList.append(3);

    linkedList.insertAfter(2, 5);

    expect(linkedList.head.value).toBe(1);
    expect(linkedList.head.next.value).toBe(2);
    expect(linkedList.head.next.next.value).toBe(5);
    expect(linkedList.head.next.next.next.value).toBe(3);
  });

  it('should throw an error when inserting after a value in an empty list', () => {
    expect(() => linkedList.insertAfter(1, 5)).toThrowError('empty list');
  });

  it('should throw an error when inserting after a non-existent value', () => {
    linkedList.append(1);
    linkedList.append(2);
    linkedList.append(3);

    expect(() => linkedList.insertAfter(4, 5)).toThrowError('can not find the value');
  });
});