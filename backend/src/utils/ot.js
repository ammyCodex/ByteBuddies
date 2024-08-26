// Simplified example of applying changes using OT
exports.applyChanges = (content, changes) => {
    // Apply each change to the content
    changes.forEach(change => {
      if (change.type === 'insert') {
        content = content.slice(0, change.pos) + change.text + content.slice(change.pos);
      } else if (change.type === 'delete') {
        content = content.slice(0, change.pos) + content.slice(change.pos + change.length);
      }
    });
  
    return content;
  };
  