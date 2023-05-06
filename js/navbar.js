class Navbar extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML =
            `
        <nav class="navbar navbar-dark bg-dark navbar-expand-lg shadow-lg sticky-top py-2">
            <div class="container-fluid ">
                <a class="navbar-brand" href="index.html"><img
                        src="doggoimgs/simple-cute-dog-black-logo-icon-design-vector.jpg"
                        class="img-fluid rounded-circle me-1" width="50px">&nbsp;The PupperGram&trade;</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class=" collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                    <ul class="navbar-nav mb-2 mb-lg-0">
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                                aria-expanded="false">
                                Main Gallery
                            </a>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="MainGallery.html">All
                                        Doggos</a>
                                </li>
                                <hr class="dropdown-divider">
                                <li><a class="dropdown-item" href="AeAeCallieGallery.html">AeAe &amp; Callie</a>
                                </li>
                                <li><a class="dropdown-item" href="SummerQuinnGallery.html">Summer &amp; Quinn</a>
                                </li>
                                <li><a class="dropdown-item" href="AlonIslaGallery.html">Alon &amp; Isla</a></li>
                            </ul>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" aria-current="page" href="AboutPage.html">About the Puppers</a>
                        </li>
                        <li class="nav-item">
                            <a class=" nav-link" href="PetResources.html">Pet Resources</a>
                        </li>
                        <li class="nav-item">
                            <a class=" nav-link" href="ContactUsForm.html">Send Us A Message</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        `
    }
}

customElements.define('navbar-component', Navbar);