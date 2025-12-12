document.addEventListener('DOMContentLoaded', () => {
    // Inisialisasi AOS (Animate On Scroll)
    // AOS akan memicu semua animasi yang diberi atribut 'data-aos' di HTML
    AOS.init({
        duration: 800,       // Durasi setiap animasi (dalam ms)
        once: true,          // Animasi hanya berjalan sekali saat digulir (Lebih Rapi)
        offset: 150,         // Offset (dalam px) sebelum animasi dimulai
        easing: 'ease-in-out'// Efek kecepatan yang halus (smooth)
    });

    // Anda bisa menambahkan logika kustom lain di sini (misalnya toggle mode gelap/terang)
});