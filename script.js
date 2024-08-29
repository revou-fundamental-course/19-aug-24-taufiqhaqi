document.getElementById('displayMessageButton').addEventListener('click', function() {
    const message = document.getElementById('messageInput').value;
    const messageDisplay = document.getElementById('messageDisplay');
    
    if (message.trim() !== "") {
        messageDisplay.textContent = message;
    } else {
        messageDisplay.textContent = "Pesan tidak boleh kosong!";
    }
});
