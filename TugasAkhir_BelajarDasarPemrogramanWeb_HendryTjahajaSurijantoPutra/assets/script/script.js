// membuat fungsi dropdown agar saat diklik akan memumnculkan konten yang disembunyikan
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}
  
// menutup dropdown ketika user klik diluar dari kotak dropdown
window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}