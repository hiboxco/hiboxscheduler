function splitLink(opts) {
  return function (rt) {
    var links = 'left' in opts ? {
      true: opts.left,
      false: opts.right
    } : opts;
    var yes = links.true(rt);
    var no = links.false(rt);
    return function (props) {
      opts.condition(props.op) ? yes(props) : no(props);
    };
  };
}

export { splitLink };
