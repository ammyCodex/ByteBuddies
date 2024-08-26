const { spawn } = require('child_process');

exports.runLSP = (language, content) => {
  return new Promise((resolve, reject) => {
    let lspServer;
    
    switch(language) {
      case 'python':
        lspServer = spawn('pyls');
        break;
      case 'javascript':
        lspServer = spawn('typescript-language-server', ['--stdio']);
        break;
      case 'cpp':
        lspServer = spawn('clangd');
        break;
      case 'rust':
        lspServer = spawn('rust-analyzer');
        break;
      default:
        return reject('Language not supported');
    }

    let diagnostics = [];

    lspServer.stdout.on('data', (data) => {
      diagnostics.push(data.toString());
    });

    lspServer.stderr.on('data', (data) => {
      console.error(`LSP error: ${data}`);
    });

    lspServer.on('close', () => {
      resolve(diagnostics);
    });

    lspServer.stdin.write(content);
    lspServer.stdin.end();
  });
};
