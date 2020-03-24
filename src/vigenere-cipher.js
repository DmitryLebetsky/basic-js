class VigenereCipheringMachine {
    constructor (modification = true) {
        if (!modification) {
            this.typeOfMachine = false;
        } else {
            this.typeOfMachine = true;
        }
    }
    encrypt(message, key) {
        if (typeof message == 'undefined' || typeof key == 'undefined') {
            throw new Error();
        }
        let alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        message = message.toUpperCase();  
        key = key.toUpperCase();
        let p = 0;
        let fullKey = [];
        for (let i = 0; i < message.length; i++) {
            if (!(/[A-Z]/.test(message[i]))) {
                fullKey.push(message[i]);
            } else {
                fullKey.push(key[p]);
                p = p + 1;
            }
            if (p == key.length) {
                p = 0;
            }
        }
        fullKey = fullKey.join('');
        let encryptedMessage = [];
        for (let i = 0; i < message.length; i++) {
            if (!(/[A-Z]/.test(message[i]))) {
                encryptedMessage.push(fullKey[i]);
            } else {
                let pushLetter = ( alphabet.indexOf(message[i]) + alphabet.indexOf(fullKey[i]) ) % 26;
                encryptedMessage.push(alphabet[pushLetter]);
            };
        }
        if (this.typeOfMachine) {
            return encryptedMessage.join('');
        } else {
            return encryptedMessage.reverse().join('');
        }
    }

    decrypt(encryptedMessage, key) {
        if (typeof encryptedMessage == 'undefined' || typeof key == 'undefined') {
            throw new Error();
        }
        let alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        encryptedMessage = encryptedMessage.toUpperCase(); 
        key = key.toUpperCase();
        let p = 0;
        let fullKey = [];
        for (let i = 0; i < encryptedMessage.length; i++) {
            if (!(/[A-Z]/.test(encryptedMessage[i]))) {
                fullKey.push(encryptedMessage[i]);
            } else {
                fullKey.push(key[p]);
                p = p + 1;
            }
            if (p == key.length) {
                p = 0;
            }
        }
        fullKey = fullKey.join('');
        let message = [];
        for (let i = 0; i < encryptedMessage.length; i++) {
            if (!(/[A-Z]/.test(encryptedMessage[i]))) {
                message.push(fullKey[i]);
            } else {
                let pushLetter = ( alphabet.indexOf(encryptedMessage[i]) - alphabet.indexOf(fullKey[i]) );
                if (pushLetter < 0) {
                    pushLetter = Math.abs(pushLetter) % 26;
                    message.push(alphabet.split('').reverse().join('')[pushLetter - 1]);
                } else {
                    pushLetter = pushLetter % 26;
                    message.push(alphabet[pushLetter]);
                }
            };
        }
        if (this.typeOfMachine) {
            return message.join('');
        } else {
            return message.reverse().join('');
        }
    }
}
module.exports = VigenereCipheringMachine;
