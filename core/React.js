const createElement = (type, props, ...children) => {
  return {
    type,
    props: {
      ...props,
      children: children.map((child) => {
        const isTextNode =
          typeof child === "string" || typeof child === "number";
        return isTextNode ? createTextNode(child) : child;
      }),
    },
  };
};

const createTextNode = (text) => {
  return {
    type: "text_node",
    props: {
      nodeValue: text,
      children: [],
    },
  };
};

const render = (el, container) => {
  nextUnitOfWork = {
    dom: container,
    props: {
      children: [el],
    },
  };

  root = nextUnitOfWork;
};

let root = null;
let nextUnitOfWork = null;
function workloop(deadline) {
  let shouldYield = false;
  while (!shouldYield && nextUnitOfWork) {
    nextUnitOfWork = performUnitOfWork(nextUnitOfWork);
    shouldYield = deadline.timeRemaining() < 1;
  }

  if (!nextUnitOfWork && root) {
    commitRoot();
  }

  requestIdleCallback(workloop);
}

function commitRoot() {
  commitWork(root.child);
  root = null;
}

function commitWork(fiber) {
  if (!fiber) return;
  let fiberParent = fiber.parent;
  while (!fiberParent.dom) fiberParent = fiberParent.parent;
  if (fiber.dom) fiberParent.dom.append(fiber.dom);
  commitWork(fiber.child);
  commitWork(fiber.sibling);
}

function createDom(type) {
  return type === "text_node"
    ? document.createTextNode("")
    : document.createElement(type);
}

function updateProps(dom, props) {
  Object.keys(props).forEach((key) => {
    if (key !== "children") dom[key] = props[key];
  });
}

function initChild(fiber, children) {
  let prevChild = null;
  children.forEach((child, index) => {
    const newChild = {
      type: child.type,
      props: child.props,
      dom: null,
      child: null,
      parent: fiber,
      sibling: null,
    };
    if (index === 0) {
      fiber.child = newChild;
    } else {
      prevChild.sibling = newChild;
    }
    prevChild = newChild;
  });
}

function performUnitOfWork(fiber) {
  const isFunctionComponent = typeof fiber.type === "function";
  if (!isFunctionComponent && !fiber.dom) {
    const dom = (fiber.dom = createDom(fiber.type));

    updateProps(dom, fiber.props);

    // fiber.parent.dom.append(dom);
  }

  const children = isFunctionComponent
    ? [fiber.type(fiber.props)]
    : fiber.props.children;

  initChild(fiber, children);

  // 4. return next unit of work

  if (fiber.child) return fiber.child;

  let nextFiber = fiber;
  while (nextFiber) {
    if (nextFiber.sibling) return nextFiber.sibling;
    nextFiber = nextFiber.parent;
  }
  // return fiber.parent.sibling;
}

requestIdleCallback(workloop);

export default { createElement, render };
