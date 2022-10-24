export const assertIsNode: (e: EventTarget) => asserts e is Node = (e) => {
  if (!e || !("nodeType" in e)) throw new Error("Node expected");
};
