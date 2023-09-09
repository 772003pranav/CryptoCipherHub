# CryptoCipherHub

CryptoCipherHub is a central place for encryption and decryption using cryptography. It provides functions for encrypting and decrypting text and file contents using the AES algorithm in combination with the CryptoJS library.

## Overview

This project showcases encryption and decryption using the AES algorithm in combination with the CryptoJS library. It offers functionality to secure data by encrypting and decrypting both text and file contents.

## Features

- Encrypt textual messages with a chosen password.
- Decrypt previously encrypted messages using the same password.
- Encrypt file data (encoded in base64) and subsequently decrypt it.

## Usage

To use CryptoCipherHub in your project:

1. **Include CryptoJS:**
   Ensure that you've included the CryptoJS library in your project. You can download it from the official CryptoJS website or use a Content Delivery Network (CDN) link.

2. **Encryption and Decryption Functions:**
   Utilize the provided JavaScript functions to carry out encryption and decryption tasks within your project.

```javascript
// Encryption function
function encryptText(text, password) {
    return CryptoJS.AES.encrypt(text, password).toString();
}

// Decryption function
function decryptText(encryptedText, password) {
    const decryptedBytes = CryptoJS.AES.decrypt(encryptedText, password);
    return decryptedBytes.toString(CryptoJS.enc.Utf8);
}

// Encrypt file data and return as Base64-encoded string
function encryptFile(fileData, password) {
    return CryptoJS.AES.encrypt(fileData, password).toString();
}

// Decrypt file data from Base64-encoded string
function decryptFile(encryptedFileData, password) {
    const decryptedBytes = CryptoJS.AES.decrypt(encryptedFileData, password);
    return decryptedBytes.toString(CryptoJS.enc.Utf8);
}
