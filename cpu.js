const os = require('os');
const fs = require('fs');

const cpuInfo = os.cpus();

// Cara 1
fs.writeFile('./cpu-cara1.json', JSON.stringify(cpuInfo), (err) => {
    if (err) throw err;
});

// Cara 2
const createCpuInfoJSON = (data) => {
    fs.writeFile('./cpu-cara2.json', JSON.stringify(data, null, '\t'), (err) => {
        if (err) throw err;
        return data;
    });
};

createCpuInfoJSON(cpuInfo);
