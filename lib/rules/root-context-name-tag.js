var ROOT_CONTEXT_NAME = 'tag';

module.exports = function (context) {
  return {
    VariableDeclarator: function (node) {
      if (node.parent && node.parent.parent && node.parent.parent.type === 'Program') {
        if (node.init.type === 'ThisExpression' && node.id.name !== ROOT_CONTEXT_NAME) {
          context.report(
            node,
            'Root scope identifier should be named as ' + ROOT_CONTEXT_NAME
          );
        }
      }
    }
  };
};

module.exports.schema = [];
