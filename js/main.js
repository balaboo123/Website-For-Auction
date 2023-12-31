document.addEventListener("DOMContentLoaded", function () {
    // Pobierz przyciski i elementy przedmiotów
    const btnAll = document.getElementById("btnAll");
    const btnBooks = document.getElementById("btnBooks");
    const btnDecorations = document.getElementById("btnDecorations");
    const btnOther = document.getElementById("btnOther");
    const btnClothes = document.getElementById("btnClothes");
    const btnVouchers = document.getElementById("btnVouchers");
    const btnJewelry = document.getElementById("btnJewelry");
    const items = document.querySelectorAll(".item");

    // Dodaj obsługę kliknięcia przycisków
    btnAll.addEventListener("click", function () {
        showAllItems();
    });

    btnBooks.addEventListener("click", function () {
        filterItems("książka");
    });

    btnDecorations.addEventListener("click", function () {
        filterItems("dekoracja");
    });

    btnOther.addEventListener("click", function () {
        filterItems("inne");
    });

    btnVouchers.addEventListener("click", function () {
        filterItems("voucher");
    });

    btnClothes.addEventListener("click", function () {
        filterItems("ubranie");
    });

    // Funkcja pokazująca wszystkie przedmioty
    function showAllItems() {
        items.forEach((item) => {
            item.style.display = "block";
        });
    }

    // Funkcja filtrowania przedmiotów na podstawie kategorii
    function filterItems(category) {
        items.forEach((item) => {
            const itemType = item.querySelector(".tag").textContent.toLowerCase();
            if (itemType.includes(category)) {
                item.style.display = "block";
            } else {
                item.style.display = "none";
            }
        });
    }
});
