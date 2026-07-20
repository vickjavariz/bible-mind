export default function template(
  { imports, componentName, props, jsx },
  { tpl },
) {
  return tpl`
${imports};

export default function ${componentName}(${props}) {
  return (
    ${jsx}
  );
}
`;
}
