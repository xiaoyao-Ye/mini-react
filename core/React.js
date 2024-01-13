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
  // create
  const dom =
    el.type === "text_node"
      ? document.createTextNode("")
      : document.createElement(el.type);
  // set props
  Object.keys(el.props).forEach((key) => {
    if (key !== "children") dom[key] = el.props[key];
  });
  // set children
  el.props.children.forEach((child) => {
    render(child, dom);
  });
  // append
  // container.appendChild(dom);
  container.append(dom);
};

export default { createElement, render };
