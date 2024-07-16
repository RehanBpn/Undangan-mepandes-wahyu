document.addEventListener('DOMContentLoaded', function() {
    const thankYouMessage = () => {
        alert('Terima kasih atas konfirmasinya!');
    };

    const footer = document.querySelector('footer');
    const confirmButton = document.createElement('button');
    confirmButton.textContent = 'Konfirmasi Kehadiran';
    confirmButton.onclick = thankYouMessage;
    footer.appendChild(confirmButton);
});


