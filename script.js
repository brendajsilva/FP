// @ts-nocheck
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const items = document.querySelectorAll('.list .item');
const indicators = document.querySelectorAll('.indicators ul li');
const number = document.querySelector('.indicators .number');

let current = 0;

function showSlide(index) {
    items.forEach((item, i) => {
        item.classList.toggle('active', i === index);
    });
    indicators.forEach((li, i) => {
        li.classList.toggle('active', i === index);
    });
    number.textContent = (index + 1).toString().padStart(2, '0');
}

prevBtn.addEventListener('click', () => {
    current = (current - 1 + items.length) % items.length;
    showSlide(current);
});

nextBtn.addEventListener('click', () => {
    current = (current + 1) % items.length;
    showSlide(current);
});

indicators.forEach((li, i) => {
    li.addEventListener('click', () => {
        current = i;
        showSlide(current);
    });
});

showSlide(current);

// Informações das peças de cada carro
const pecasCarros = [
    {
        nome: "911 Turbo",
        pecas: [
            { nome: "Motor Biturbo", info: "Motor de 6 cilindros, 3.8L, 580cv." },
            { nome: "Freios de Cerâmica", info: "Alta performance e resistência ao calor." },
            { nome: "Tração nas 4 rodas", info: "Mais estabilidade e segurança." },
            { nome: "Interior em couro", info: "Acabamento premium e confortável." }
        ]
    },
    {
        nome: "Ferrari",
        pecas: [
            { nome: "Motor V8", info: "Potente motor de 3.9L, 720cv." },
            { nome: "Teto retrátil", info: "Conversível para curtir o vento." },
            { nome: "Bancos esportivos", info: "Conforto e segurança em alta velocidade." },
            { nome: "Freios Brembo", info: "Frenagem precisa e eficiente." }
        ]
    },
    {
        nome: "Lamborghini",
        pecas: [
            { nome: "Motor V10", info: "Motor 5.2L, 610cv, aceleração brutal." },
            { nome: "Aerofólio ativo", info: "Melhora a estabilidade em alta velocidade." },
            { nome: "Rodas de liga leve", info: "Design exclusivo e leveza." },
            { nome: "Painel digital", info: "Tecnologia de ponta no cockpit." }
        ]
    }
];

// Função para abrir o modal com as peças do carro certo
document.querySelectorAll('.information').forEach((btn, idx) => {
    btn.onclick = function() {
        const carro = pecasCarros[idx];
        document.getElementById('modal-titulo').textContent = carro.nome + " - Peças e Detalhes";
        const lista = document.getElementById('modal-lista-pecas');
        lista.innerHTML = "";
        carro.pecas.forEach(p => {
            const li = document.createElement('li');
            // Motor Porsche
            if (carro.nome === "911 Turbo" && p.nome === "Motor Biturbo") {
                li.innerHTML = `<strong>${p.nome}:</strong> ${p.info}<br>
                <model-viewer src="./img/motor_porshe.glb" alt="Motor Porsche 3D" camera-controls auto-rotate style="width: 100%; max-width: 350px; height: 300px; background: #eee; border-radius: 12px; margin-top: 10px;"></model-viewer>`;
            }
            // Freio Porsche
            else if (carro.nome === "911 Turbo" && p.nome === "Freios de Cerâmica") {
                li.innerHTML = `<strong>${p.nome}:</strong> ${p.info}<br>
                <model-viewer src="./img/freio.glb" alt="Freio Porsche 3D" camera-controls auto-rotate style="width: 100%; max-width: 350px; height: 300px; background: #eee; border-radius: 12px; margin-top: 10px;"></model-viewer>`;
            }
            // Tração Porsche
            else if (carro.nome === "911 Turbo" && p.nome === "Tração nas 4 rodas") {
                li.innerHTML = `<strong>${p.nome}:</strong> ${p.info}<br>
                <model-viewer src="./img/tracao_porsche.glb" alt="Tração Porsche 3D" camera-controls auto-rotate style="width: 100%; max-width: 350px; height: 300px; background: #eee; border-radius: 12px; margin-top: 10px;"></model-viewer>`;
            }
            // Interior Porsche
            else if (carro.nome === "911 Turbo" && p.nome === "Interior em couro") {
                li.innerHTML = `<strong>${p.nome}:</strong> ${p.info}<br>
                <model-viewer src="./img/interior.glb" alt="Interior Porsche 3D" camera-controls auto-rotate style="width: 100%; max-width: 350px; height: 300px; background: #eee; border-radius: 12px; margin-top: 10px;"></model-viewer>`;
            }
            // Motor Ferrari
            else if (carro.nome === "Ferrari" && p.nome === "Motor V8") {
                li.innerHTML = `<strong>${p.nome}:</strong> ${p.info}<br>
                <model-viewer src="./img/motor_ferrari.glb" alt="Motor Ferrari 3D" camera-controls auto-rotate style="width: 100%; max-width: 350px; height: 300px; background: #eee; border-radius: 12px; margin-top: 10px;"></model-viewer>`;
            }
            // Bancos Ferrari
            else if (carro.nome === "Ferrari" && p.nome === "Bancos esportivos") {
                li.innerHTML = `<strong>${p.nome}:</strong> ${p.info}<br>
                <model-viewer src="./img/banco_ferrari.glb" alt="Banco Ferrari 3D" camera-controls auto-rotate style="width: 100%; max-width: 350px; height: 300px; background: #eee; border-radius: 12px; margin-top: 10px;"></model-viewer>`;
            }
            // Freios Ferrari
            else if (carro.nome === "Ferrari" && p.nome === "Freios Brembo") {
                li.innerHTML = `<strong>${p.nome}:</strong> ${p.info}<br>
                <model-viewer src="./img/ferrari_brembo.glb" alt="Freio Ferrari 3D" camera-controls auto-rotate style="width: 100%; max-width: 350px; height: 300px; background: #eee; border-radius: 12px; margin-top: 10px;"></model-viewer>`;
            }
            // Outras peças
            else {
                li.innerHTML = `<strong>${p.nome}:</strong> ${p.info}`;
            }
            lista.appendChild(li);
        });
        document.getElementById('modal-saiba-mais').style.display = 'flex';
    };
});

// Fecha o modal ao clicar no X ou fora do conteúdo
document.getElementById('close-modal').onclick = function() {
    document.getElementById('modal-saiba-mais').style.display = 'none';
};
document.getElementById('modal-saiba-mais').onclick = function(e) {
    if (e.target === this) this.style.display = 'none';
};