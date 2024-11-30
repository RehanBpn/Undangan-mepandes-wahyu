document.addEventListener('DOMContentLoaded', function() {
    const thankYouMessage = () => {
        alert('Terima kasih atas konfirmasinya!');
    };

    const confirmButton = document.getElementById('confirmButton');
    confirmButton.onclick = thankYouMessage;
});
