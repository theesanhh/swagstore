const fs = require('fs');
const path = require('path');
const dataFile = path.join(__dirname, '..', 'data', 'accounts.json');

const Account = {
    getAll: () => JSON.parse(fs.readFileSync(dataFile, 'utf8')),
    add: (acc) => {
        const accounts = Account.getAll();
        if (accounts.find(a => a.email === acc.email)) throw new Error('Email already registered.');
        acc.passwordHash = 'hashed_' + acc.password; // Mock hash
        accounts.push(acc);
        fs.writeFileSync(dataFile, JSON.stringify(accounts));
        return acc;
    },
    findByEmail: (email) => Account.getAll().find(a => a.email === email),
    authenticate: (email, password) => {
        const acc = Account.findByEmail(email);
        return (acc && acc.password === password) ? acc : null;
    }
};
module.exports = Account;