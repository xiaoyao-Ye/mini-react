const createElement = (type, props, ...children) => {
  return {
    type,
    props: {
      ...props,
      children: children.map((child) =>
        typeof child === "string" ? createTextNode(child) : child
      ),
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
  // // create
  // const dom =
  //   el.type === "text_node"
  //     ? document.createTextNode("")
  //     : document.createElement(el.type);
  // // set props
  // Object.keys(el.props).forEach((key) => {
  //   if (key !== "children") dom[key] = el.props[key];
  // });
  // // set children
  // el.props.children.forEach((child) => {
  //   render(child, dom);
  // });
  // // append
  // // container.appendChild(dom);
  // container.append(dom);
};

let nextUnitOfWork = null;
function workloop(deadline) {
  let shouldYield = false;
  while (!shouldYield && nextUnitOfWork) {
    nextUnitOfWork = performUnitOfWork(nextUnitOfWork);
    shouldYield = deadline.timeRemaining() < 1;
  }
  requestIdleCallback(workloop);
}

function performUnitOfWork(work) {
  if (!work.dom) {
    // 1. create dom
    const dom = (work.dom =
      work.type === "text_node"
        ? document.createTextNode("")
        : document.createElement(work.type));

    // 2. set props
    Object.keys(work.props).forEach((key) => {
      if (key !== "children") dom[key] = work.props[key];
    });

    work.parent.dom.append(dom);
  }

  // 3. transfer list
  const children = work.props.children;
  let prevChild = null;
  children.forEach((child, index) => {
    const newChild = {
      type: child.type,
      props: child.props,
      dom: child.dom,
      child: null,
      parent: work,
      sibling: null,
    };
    if (index === 0) {
      work.child = newChild;
    } else {
      prevChild.sibling = newChild;
    }
    prevChild = newChild;
  });
  // 4. return next unit of work

  if (work.child) return work.child;

  if (work.sibling) return work.sibling;

  return work.parent.sibling;
}

requestIdleCallback(workloop);

export default { createElement, render };
