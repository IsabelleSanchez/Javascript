// importando o módulo 'os' para operações relacionadas ao sistema operacional
//const os = require('os');

import os from 'os'

// Exibindo informações sobre o sistema operacional

// exibindo arquitetura do sistema
console.log('Arquiterura do sistema:', os.arch());
// exibindo informações sobre a CPU
console.log('Quantidade de CPUs:', os.cpus().length);
// exibindo informações sobre a memória
console.log('Memória total (bytes):', os.totalmem());
// exibindo informações sobre a memória livre
console.log('Memória livre (bytes):', os.freemem());
// exibindo o sistema operacional
console.log(os.platform());