// toggle & responsive navigation



const navigation = () => {

    const burger = document.querySelector(".burger");

    const navlist = document.querySelector("nav");



    burger.addEventListener("click", () => {

        // toggle nav list and burger class

        navlist.classList.toggle("nav-active");

        burger.classList.toggle("toggle-burger");

    });

};



navigation();



// hapus form setelah go back





window.onbeforeunload = () => {

    for (const form of document.getElementsByTagName("form")) {

        form.reset();

    }

};