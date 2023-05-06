class Footer extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
        <footer class="container-fluid py-1 my-1">
            <ul class="nav justify-content-center pb-1 mb-1 border-bottom">
                <li><a href="https://github.com/gelogabz" class="nav-link px-2 text-success" target="_blank"><i
                            class="bi bi-github"></i></a></li>
                <li><a href="https://linkedin.com/in/gelobaring" class="nav-link px-2 text-success" target="_blank"><i
                            class="bi bi-linkedin"></i></a></li>
                <li><a href="https://twitter.com/gelogabz" class="nav-link px-2 text-success" target="_blank"><i
                            class="nav-item bi bi-twitter"></i></a></li>
                <li><a href="https://www.instagram.com/thegeloman/" class="nav-link px-2 text-success"
                        target="_blank"><i class="bi bi-instagram"></i></a></li>

                <li><a href="https://www.reddit.com/user/gelogabz" class="nav-link px-2 text-success" target="_blank"><i
                            class="bi bi-reddit"></i></a></li>
            </ul>
            <p class="text-center text-muted">&copy;2022 <br>Gelo Baring for WD20P </p>
        </footer>
        `

    }
}

customElements.define('footer-component', Footer);