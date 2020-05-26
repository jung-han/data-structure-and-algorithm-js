const { LinkedList } = require("./LinkedList");

it("링크드리스트 생성시 배열을 넘길 경우 생성 후 리스트 초기화를 한다", () => {
  const linkedList = new LinkedList([1, 2, 3, 4, 5]);
  expect(linkedList.getValues()).toEqual([1, 2, 3, 4, 5]);
});

it("add 메서드로 값을 넣을 경우 리스트에 값이 추가된다", () => {
  const linkedList = new LinkedList();
  linkedList.add(1);
  linkedList.add(2);

  expect(linkedList.getValues()).toEqual([2, 1]);
});

it("remove 메서드를 사용할 경우 리스트의 헤드가 지워진다", () => {
  const linkedList = new LinkedList([1, 2]);
  linkedList.remove();
  expect(linkedList.getValues()).toEqual([2]);
});

it("getValue로 index를 넣을 경우 해당 값이 나온다", () => {
  const linkedList = new LinkedList([1, 2, 3, 4, 5]);

  expect(linkedList.getValue(3)).toEqual(3);
});

it("getValue로 index가 범위를 넘을 경우 null이 나온다", () => {
  const linkedList = new LinkedList([1, 2, 3, 4, 5]);

  expect(linkedList.getValue(9)).toEqual(null);
});
