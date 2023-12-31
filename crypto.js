<script src="https://cdnjs.cloudflare.com/ajax/libs/crypto-js/3.1.9-1/crypto-js.js"></script>

<script>
    // Function to encrypt the entered message or uploaded file
    function encrypt() {
        const message = document.getElementById("message").value;
        const fileInput = document.getElementById("uploadFile");
        const password = document.getElementById("password").value;

        // If there is a message, encrypt it
        if (message) {
            const encryptedMessage = CryptoJS.AES.encrypt(message, password).toString();
            console.log("Encrypted Data:", encryptedMessage);
        }

        // If a file is selected, encrypt its data
        if (fileInput.files.length > 0) {
            const reader = new FileReader();
            reader.onload = function(event) {
                const fileData = event.target.result;
                const encryptedFile = CryptoJS.AES.encrypt(fileData, password).toString();
                console.log("Encrypted Data:", encryptedFile);
            };
            reader.readAsDataURL(fileInput.files[0]);
        }
    }

    // Function to decrypt the encrypted data
    function decrypt() {
        const encryptedData = document.getElementById("encryptedData").textContent;
        const password = document.getElementById("password").value;

        // Decrypt the encrypted data using the provided password
        const decrypted = CryptoJS.AES.decrypt(encryptedData, password).toString(CryptoJS.enc.Utf8);
        console.log("Decrypted Data:", decrypted);
    }
</script>
