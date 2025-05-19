/**
 * untuk membuat link bisa dicopy
 */


const actionLink = document.querySelectorAll(".link-card .link-action");


actionLink.forEach((action) => {

    action.addEventListener("click", (e) => {
        e.preventDefault();
        navigator.clipboard.writeText(action.parentElement.getAttribute("href"));
        alert("Link berhasil disalin thank you")

        document.getElementById("toast").innerHTML =
            <div class="toast-container">
                <p>✅ Link berhasil disalin thank you</p>
            </div >
            ;

        setTimeout(() => {
            document.querySelector("#toast-container").classList.add("toast-gone")
        }, 300)
    });
});


/**
 * untuk ganti icon sosmed saat hover
 */

document.querySelectorAll(".sosmed i"), forEach((sosmed) => {
    sosmed.addEventListener("mouseenter", () => {
        sosmed.classList.remove("ph");
        sosmed.classList.add("ph-fill");
    });

    sosmed.addEventListener("mouseleave", () => {
        sosmed.classList.remove("ph-fill");
        sosmed.classList.add("ph");
    });
});

/**
 * Animasi Text bergerak saat scroll
 */
document.addEventListener("scroll", (e) => {
    console.log("scroll :", window.scrollY);

    document.querySelector(".bg-text-animation").style.transfrom = 'translateX(${window.scrollY / 5}px)';

});