export default function template(variables, { tpl }) {
  return tpl`
${variables.imports};

export default function ${variables.componentName}(${variables.props}) {
  return (
    ${variables.jsx}
  );
}
`;
}
