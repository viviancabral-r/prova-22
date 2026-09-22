

const loginPage =
    document.getElementById("loginPage");

const systemPage =
    document.getElementById("systemPage");

const loginForm =
    document.getElementById("loginForm");

const loginMessage =
    document.getElementById("loginMessage");

const logoutButton =
    document.getElementById("logoutButton");

const menuButtons =
    document.querySelectorAll(".menu-button");

const pages =
    document.querySelectorAll(".page");

const pageTitle =
    document.getElementById("pageTitle");

const date =
    document.getElementById("date");

const applyAI =
    document.getElementById("applyAI");

const aiResult =
    document.getElementById("aiResult");

const aiText =
    document.getElementById("aiText");

const tipoCarga =
    document.getElementById("tipoCarga");

const refreshButton =
    document.getElementById("refreshButton");

const fila =
    document.getElementById("fila");



function mostrarData() {

    const hoje = new Date();

    const dataFormatada =
        hoje.toLocaleDateString(
            "pt-BR",
            {
                weekday: "long",
                day: "2-digit",
                month: "long",
                year: "numeric"
            }
        );

    date.textContent = dataFormatada;
}

mostrarData();



loginForm.addEventListener(
    "submit",
    function(event) {

        event.preventDefault();

        const email =
            document.getElementById("email").value.trim();

        const senha =
            document.getElementById("senha").value;

        if (!email || senha.length < 4) {

            loginMessage.textContent =
                "Digite um e-mail válido e uma senha com pelo menos 4 caracteres.";

            loginMessage.style.color =
                "#c84c4c";

            return;
        }

        loginMessage.textContent =
            "Login realizado com sucesso!";

        loginMessage.style.color =
            "#146b3a";

        setTimeout(() => {

            loginPage.classList.add("hidden");

            systemPage.classList.remove("hidden");

        }, 500);

    }
);



logoutButton.addEventListener(
    "click",
    function() {

        systemPage.classList.add("hidden");

        loginPage.classList.remove("hidden");

        loginForm.reset();

        loginMessage.textContent =
            "Digite seus dados para entrar.";

        loginMessage.style.color =
            "#6d7b72";
    }
);


menuButtons.forEach(
    button => {

        button.addEventListener(
            "click",
            function() {

                const page =
                    this.dataset.page;


                menuButtons.forEach(
                    btn => {

                        btn.classList.remove(
                            "active"
                        );

                    }
                );

                this.classList.add("active");


                

                pages.forEach(
                    pageElement => {

                        pageElement.classList.remove(
                            "active-page"
                        );

                    }
                );


                

                const selectedPage =
                    document.getElementById(page);

                if (selectedPage) {

                    selectedPage.classList.add(
                        "active-page"
                    );

                }


                

                const titles = {

                    dashboard:
                        "Dashboard",

                    rotas:
                        "Rotas inteligentes",

                    silos:
                        "Monitoramento dos silos",

                    caminhoes:
                        "Caminhões",

                    ia:
                        "Inteligência Artificial",

                    relatorios:
                        "Relatórios"

                };

                pageTitle.textContent =
                    titles[page];

            }
        );

    }
);




applyAI.addEventListener(
    "click",
    function() {

        aiResult.textContent =
            "✓ 8 caminhões foram redirecionados para a Unidade B.";

        applyAI.textContent =
            "Recomendação aplicada";

        applyAI.disabled =
            true;

        applyAI.style.opacity =
            "0.6";
    }
);




tipoCarga.addEventListener(
    "change",
    function() {

        if (this.value === "soja") {

            aiText.textContent =
                "O Silo A apresenta alta ocupação. A IA recomenda redirecionar parte dos caminhões para a Unidade B.";

        } else {

            aiText.textContent =
                "A Unidade B possui capacidade disponível. A IA recomenda priorizar esta unidade para os próximos carregamentos de milho.";

        }

        applyAI.textContent =
            "Aplicar recomendação";

        applyAI.disabled =
            false;

        applyAI.style.opacity =
            "1";

        aiResult.textContent = "";

    }
);




refreshButton.addEventListener(
    "click",
    function() {

        const valores =
            [36, 38, 40, 42, 35, 39];

        const valor =
            valores[
                Math.floor(
                    Math.random() *
                    valores.length
                )
            ];

        fila.textContent =
            valor;

        refreshButton.textContent =
            "✓ Atualizado";

        setTimeout(
            () => {

                refreshButton.textContent =
                    " Atualizar";

            },
            1200
        );

    }
);