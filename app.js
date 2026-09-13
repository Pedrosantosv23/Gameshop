const STORE = {
  whatsapp: "https://wa.me/5531997641538",
  instagram: "https://www.instagram.com/pedrinn_vs/",
  facebook: "https://www.facebook.com/pedro.felipe.9256",
  address: "Rua Cromo, 157 — Iguaçu, Ipatinga — MG",
  hours: "Horário de atendimento: consulte a loja",
};

const PRODUCTS = [
  { id: 1, title: "Resident Evil Requiem", slug: "resident-evil-requiem", platform: "PS5", genre: "Terror", franchise: "Resident Evil", condition: "Novo", price: 349.9, oldPrice: 399.9, stock: true, featured: true, bestSeller: true, release: "27 fev 2026", publisher: "Capcom", developer: "Capcom", rating: "18 anos", players: "1 jogador", image: "./assets/covers/resident-evil-requiem-optimized.jpg", description: "Uma nova era do survival horror leva Grace Ashcroft e Leon S. Kennedy de volta aos horrores de Raccoon City." },
  { id: 2, title: "007 First Light", slug: "007-first-light", platform: "PS5", genre: "Ação", franchise: "007", condition: "Novo", price: 299.9, oldPrice: 339.9, stock: true, featured: true, bestSeller: true, release: "27 mai 2026", publisher: "IO Interactive", developer: "IO Interactive", rating: "16 anos", players: "1 jogador", image: "./assets/covers/007-first-light.jpg", description: "A história original da juventude de James Bond combina espionagem, ação, veículos e diferentes formas de cumprir cada missão." },
  { id: 3, title: "Crimson Desert", slug: "crimson-desert", platform: "PS5", genre: "Aventura", franchise: "Crimson Desert", condition: "Novo", price: 349.9, stock: true, featured: true, bestSeller: true, release: "19 mar 2026", publisher: "Pearl Abyss", developer: "Pearl Abyss", rating: "16 anos", players: "1 jogador", image: "./assets/covers/crimson-desert.jpg", description: "Uma aventura de ação em mundo aberto no belo e brutal continente de Pywel." },
  { id: 4, title: "Forza Horizon 6", slug: "forza-horizon-6", platform: "Xbox Series", genre: "Corrida", franchise: "Forza", condition: "Novo", price: 349.9, stock: true, featured: true, bestSeller: true, release: "19 mai 2026", publisher: "Xbox Game Studios", developer: "Playground Games", rating: "Livre", players: "1–12 jogadores", image: "./assets/covers/forza-horizon-6.jpg", accent: "#107c10", description: "A celebração automotiva de mundo aberto da Playground Games chega ao Japão." },
  { id: 5, title: "Donkey Kong Bananza", slug: "donkey-kong-bananza", platform: "Switch 2", genre: "Família", franchise: "Donkey Kong", condition: "Novo", price: 439.9, oldPrice: 499.9, stock: true, featured: true, bestSeller: true, release: "17 jul 2025", publisher: "Nintendo", developer: "Nintendo", rating: "10 anos", players: "1–2 jogadores", image: "./assets/covers/donkey-kong-bananza.jpg", description: "Destrua o cenário, explore as profundezas e embarque em uma aventura cheia de energia com Donkey Kong e Pauline." },
  { id: 6, title: "Minecraft", slug: "minecraft", platform: "PS5", genre: "Aventura", franchise: "Minecraft", condition: "Novo", price: 179.9, stock: true, featured: false, bestSeller: true, release: "Disponível", publisher: "Mojang Studios", developer: "Mojang Studios", rating: "10 anos", players: "1–4 jogadores", image: "./assets/covers/minecraft.webp", description: "Construa, explore e sobreviva em mundos praticamente infinitos, sozinho ou com amigos." },
  { id: 7, title: "EA Sports FC 26", slug: "ea-sports-fc-26", platform: "PS5", genre: "Esportes", franchise: "EA Sports FC", condition: "Novo", price: 249.9, oldPrice: 349.9, stock: true, featured: false, bestSeller: true, release: "26 set 2025", publisher: "Electronic Arts", developer: "EA Vancouver", rating: "Livre", players: "1–4 jogadores", image: "./assets/covers/fc-26.jpg", description: "Futebol com clubes, ligas e modos para jogar sozinho, cooperativamente ou online." },
  { id: 8, title: "Onimusha: Way of the Sword", slug: "onimusha-way-of-the-sword", platform: "PS5", genre: "Ação", franchise: "Onimusha", condition: "Novo", price: 339.9, stock: true, featured: true, bestSeller: false, preorder: true, release: "04 set 2026", publisher: "Capcom", developer: "Capcom", rating: "18 anos", players: "1 jogador", image: "./assets/covers/onimusha-way-of-the-sword.jpg", accent: "#b72d24", description: "Miyamoto Musashi enfrenta a ameaça Genma em uma Quioto sombria do período Edo." },
  { id: 9, title: "Pokémon Pokopia", slug: "pokemon-pokopia", platform: "Switch 2", genre: "Família", franchise: "Pokémon", condition: "Novo", price: 399.9, stock: false, featured: false, bestSeller: false, preorder: true, release: "2026", publisher: "Nintendo", developer: "Koei Tecmo", rating: "Livre", players: "A confirmar", image: "./assets/covers/pokemon-pokopia.jpg", accent: "#e60012", description: "Uma nova experiência Pokémon focada em criar e cuidar de um refúgio para os Pokémon." },
  { id: 10, title: "LEGO Batman: Legacy of the Dark Knight", slug: "lego-batman-legacy-dark-knight", platform: "Xbox Series", genre: "Aventura", franchise: "LEGO Batman", condition: "Novo", price: 349.9, stock: false, featured: false, bestSeller: false, preorder: true, release: "2026", publisher: "Warner Bros. Games", developer: "TT Games", rating: "10 anos", players: "1–2 jogadores", image: "./assets/covers/lego-batman-legacy.jpg", accent: "#f5c400", description: "Uma aventura LEGO que celebra diferentes eras do Cavaleiro das Trevas." },
  { id: 11, title: "Resident Evil 4", slug: "resident-evil-4-seminovo", platform: "PS5", genre: "Terror", franchise: "Resident Evil", condition: "Seminovo", price: 179.9, oldPrice: 249.9, stock: true, featured: false, bestSeller: false, image: "./assets/covers/resident-evil-4.jpg", accent: "#343b45", description: "Unidade seminova testada. Consulte disponibilidade e estado da embalagem com a loja." },
  { id: 12, title: "Mario Kart 8 Deluxe", slug: "mario-kart-8-deluxe-seminovo", platform: "Nintendo Switch", genre: "Corrida", franchise: "Mario", condition: "Seminovo", price: 249.9, oldPrice: 329.9, stock: true, featured: false, bestSeller: false, image: "./assets/covers/mario-kart-8-deluxe.jpg", accent: "#e60012", description: "Unidade seminova testada, pronta para mais corridas em família." }
];

const state = {
  cart: JSON.parse(localStorage.getItem("gamesShopCart") || "{}"),
  favorites: JSON.parse(localStorage.getItem("gamesShopFavorites") || "[]"),
  lastOrder: null,
  filters: { platform: "", genre: "", condition: "", price: "", availability: false, sort: "best" },
};

const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];
const money = value => value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
const whatsappUrl = message => {
  const base = STORE.whatsapp.startsWith("http") ? STORE.whatsapp.replace(/\/$/, "") : `https://wa.me/${STORE.whatsapp}`;
  return `${base}?text=${encodeURIComponent(message)}`;
};
const save = () => {
  localStorage.setItem("gamesShopCart", JSON.stringify(state.cart));
  localStorage.setItem("gamesShopFavorites", JSON.stringify(state.favorites));
};

function cover(product, eager = false) {
  const fallback = `<span class="cover-fallback" style="--accent:${product.accent || '#244ec9'}"><b>${product.title}</b><small>Capa indisponível</small></span>`;
  return product.image
    ? `<img class="${product.slug === 'minecraft' ? 'cover-minecraft' : ''}" src="${product.image}" alt="Capa de ${product.title}" loading="${eager ? 'eager' : 'lazy'}" onerror="this.hidden=true;this.nextElementSibling.hidden=false">${fallback.replace('<span ', '<span hidden ')}`
    : fallback;
}

function badge(product) {
  if (product.condition === "Seminovo") return `<span class="badge used">Seminovo</span>`;
  if (product.preorder) return `<span class="badge">Pré-venda</span>`;
  if (product.bestSeller) return `<span class="badge">Mais vendido</span>`;
  return "";
}

function productCard(product) {
  const favorite = state.favorites.includes(product.id);
  const discount = product.oldPrice ? Math.round((1 - product.price / product.oldPrice) * 100) : 0;
  return `<article class="product-card" data-id="${product.id}">
    <div class="product-cover">
      ${cover(product)}${badge(product)}
      <button class="favorite ${favorite ? 'active' : ''}" data-favorite="${product.id}" aria-label="${favorite ? 'Remover' : 'Adicionar'} ${product.title} dos favoritos">${favorite ? '♥' : '♡'}</button>
      ${discount ? `<span class="discount">-${discount}%</span>` : ''}
    </div>
    <div class="product-info">
      <span class="platform-tag ${product.platform.includes('Xbox') ? 'xbox' : product.platform.includes('Switch') ? 'nintendo' : ''}">${product.platform}</span>
      <h3><a href="#produto/${product.slug}">${product.title}</a></h3>
      <p class="availability ${product.stock ? '' : 'out'}">${product.stock ? '● Disponível' : '○ Consulte disponibilidade'}</p>
      ${product.oldPrice ? `<span class="old-price">${money(product.oldPrice)}</span>` : '<span class="old-price empty">&nbsp;</span>'}
      <strong class="price">${money(product.price)}</strong>
      <small class="installments">ou 6x de ${money(product.price / 6)} sem juros</small>
      <button class="buy-button" data-add="${product.id}" ${!product.stock && !product.preorder ? 'disabled' : ''}>${product.preorder ? 'Reservar interesse' : 'Adicionar ao carrinho'}</button>
    </div>
  </article>`;
}

function renderProducts(selector, products) {
  const target = $(selector);
  if (target) target.innerHTML = products.map(productCard).join("") || `<div class="empty-state"><b>Nenhum produto encontrado.</b><span>Tente alterar os filtros.</span></div>`;
}

function filterProducts() {
  let items = [...PRODUCTS];
  const { platform, genre, condition, price, availability, sort } = state.filters;
  if (platform) items = items.filter(p => p.platform === platform);
  if (genre) items = items.filter(p => p.genre === genre);
  if (condition) items = items.filter(p => p.condition === condition);
  if (price) items = items.filter(p => price === "200" ? p.price < 200 : price === "350" ? p.price >= 200 && p.price <= 350 : p.price > 350);
  if (availability) items = items.filter(p => p.stock);
  items.sort(sort === "low" ? (a,b) => a.price-b.price : sort === "high" ? (a,b) => b.price-a.price : sort === "az" ? (a,b) => a.title.localeCompare(b.title) : sort === "new" ? (a,b) => Number(b.featured)-Number(a.featured) : (a,b) => Number(b.bestSeller)-Number(a.bestSeller));
  renderProducts("#catalog-grid", items);
  $("#result-count").textContent = `${items.length} ${items.length === 1 ? 'produto' : 'produtos'}`;
}

function updateCounters() {
  const cartCount = Object.values(state.cart).reduce((a,b) => a + b, 0);
  $$("[data-cart-count]").forEach(el => el.textContent = cartCount);
  $$("[data-fav-count]").forEach(el => el.textContent = state.favorites.length);
}

function cartLines() {
  return Object.entries(state.cart)
    .map(([id, qty]) => ({ product: PRODUCTS.find(p => p.id === Number(id)), qty }))
    .filter(item => item.product && item.qty > 0);
}

function toast(message) {
  const el = $("#toast");
  el.textContent = message;
  el.classList.add("show");
  clearTimeout(window.toastTimer);
  window.toastTimer = setTimeout(() => el.classList.remove("show"), 2400);
}

function addToCart(id) {
  const product = PRODUCTS.find(p => p.id === id);
  state.lastOrder = null;
  state.cart[id] = (state.cart[id] || 0) + 1;
  save(); updateCounters(); toast(`${product.title} adicionado ao carrinho.`);
}

function toggleFavorite(id) {
  const index = state.favorites.indexOf(id);
  if (index >= 0) state.favorites.splice(index, 1); else state.favorites.push(id);
  save(); updateCounters();
  $$(`[data-favorite="${id}"]`).forEach(btn => { btn.classList.toggle("active"); btn.textContent = state.favorites.includes(id) ? "♥" : "♡"; });
  toast(index >= 0 ? "Removido dos favoritos." : "Salvo nos favoritos.");
}

function openCart() {
  const lines = cartLines();
  const body = $("#cart-items");
  body.innerHTML = lines.length ? lines.map(({product, qty}) => `<div class="cart-line">
    <div class="cart-thumb">${cover(product)}</div><div><b>${product.title}</b><small>${product.platform}</small><strong>${money(product.price)}</strong></div>
    <div class="quantity"><button data-qty="${product.id}" data-delta="-1" aria-label="Diminuir">−</button><span>${qty}</span><button data-qty="${product.id}" data-delta="1" aria-label="Aumentar">+</button></div>
    <button class="remove" data-remove="${product.id}" aria-label="Remover ${product.title}">×</button>
  </div>`).join("") : `<div class="empty-state"><b>Seu carrinho está vazio.</b><a href="#catalogo">Explorar jogos</a></div>`;
  const total = lines.reduce((sum, x) => sum + x.product.price * x.qty, 0);
  $("#cart-subtotal").textContent = money(total);
  $("#cart-total").textContent = money(total);
  $("#cart-drawer").classList.add("open");
  $("#overlay").classList.add("show");
  $("#cart-drawer").setAttribute("aria-hidden", "false");
}

function renderCheckout() {
  const target = $("#checkout-content");
  if (state.lastOrder) {
    const order = state.lastOrder;
    target.innerHTML = `<div class="checkout-success"><span class="success-icon">✓</span><span class="eyebrow">Pedido recebido</span><h1>Obrigado, ${order.customer.name.split(' ')[0]}!</h1><p>Seu pedido <b>${order.number}</b> foi registrado neste dispositivo e aguarda confirmação da Games Shop.</p><div class="success-card"><span>Número do pedido</span><strong>${order.number}</strong><span>Total dos produtos</span><strong>${money(order.total)}</strong><span>Recebimento</span><strong>${order.fulfillment === 'pickup' ? 'Retirada na loja' : 'Entrega a combinar'}</strong><span>Pagamento</span><strong>${order.paymentLabel}</strong></div><p class="checkout-notice">Nenhum pagamento foi aprovado online. Estoque, entrega e pagamento serão confirmados pela loja.</p><div class="success-actions"><button class="btn primary" data-order-whatsapp="${order.number}">Enviar pedido pelo WhatsApp</button><a class="btn secondary" href="#catalogo">Continuar comprando</a></div></div>`;
    return;
  }
  const lines = cartLines();
  if (!lines.length) {
    target.innerHTML = `<div class="checkout-empty"><span>▱</span><h1>Seu carrinho está vazio</h1><p>Adicione produtos antes de iniciar o checkout.</p><a class="btn primary" href="#catalogo">Explorar jogos</a></div>`;
    return;
  }
  const total = lines.reduce((sum, item) => sum + item.product.price * item.qty, 0);
  target.innerHTML = `<nav class="breadcrumb" aria-label="Navegação estrutural"><a href="#inicio">Início</a><span>›</span><button type="button" data-open-cart>Carrinho</button><span>›</span>Checkout</nav>
    <div class="checkout-heading"><span class="eyebrow">Finalizar pedido</span><h1>Checkout</h1><div class="checkout-steps" aria-label="Etapas"><span class="done">1 Carrinho</span><span class="active">2 Dados</span><span>3 Confirmação</span></div></div>
    <div class="checkout-layout"><form id="checkout-form" class="checkout-form">
      <fieldset><legend><span>1</span> Seus dados</legend><div class="form-grid"><label>Nome completo<input name="name" required autocomplete="name" minlength="3"></label><label>Telefone / WhatsApp<input name="phone" required type="tel" autocomplete="tel" inputmode="tel" placeholder="(31) 99999-9999"></label><label class="wide">E-mail<input name="email" required type="email" autocomplete="email" placeholder="voce@email.com"></label></div></fieldset>
      <fieldset><legend><span>2</span> Como deseja receber?</legend><div class="choice-grid"><label class="choice-card"><input type="radio" name="fulfillment" value="pickup" checked><span><b>Retirar na loja</b><small>Rua Cromo, 157 — Iguaçu, Ipatinga</small><strong>Grátis</strong></span></label><label class="choice-card"><input type="radio" name="fulfillment" value="delivery"><span><b>Entrega a combinar</b><small>Prazo e valor confirmados pela loja</small><strong>Sob consulta</strong></span></label></div><div id="delivery-fields" class="delivery-fields" hidden><div class="form-grid"><label>CEP<input name="zip" inputmode="numeric" autocomplete="postal-code" placeholder="00000-000" disabled></label><label>Endereço<input name="address" autocomplete="street-address" disabled></label><label>Número<input name="number" autocomplete="address-line2" disabled></label><label>Complemento<input name="complement" autocomplete="address-line2" disabled></label><label>Bairro<input name="district" disabled></label><label>Cidade<input name="city" autocomplete="address-level2" value="Ipatinga" disabled></label></div><p class="checkout-notice">O frete não está incluído no total. A loja confirmará disponibilidade, prazo e valor antes do pagamento.</p></div></fieldset>
      <fieldset><legend><span>3</span> Forma de pagamento</legend><div class="payment-list"><label class="choice-card"><input type="radio" name="payment" value="pix" checked><span><b>Pix após confirmação</b><small>A loja enviará os dados depois de confirmar o estoque.</small></span></label><label class="choice-card"><input type="radio" name="payment" value="store-card"><span><b>Cartão na loja</b><small>Pagamento presencial na retirada.</small></span></label><label class="choice-card"><input type="radio" name="payment" value="store-cash"><span><b>Dinheiro na loja</b><small>Pagamento presencial na retirada.</small></span></label></div></fieldset>
      <fieldset><legend><span>4</span> Observações</legend><label>Mensagem para a loja<textarea name="notes" rows="3" maxlength="300" placeholder="Ex.: prefiro retirar à tarde"></textarea></label></fieldset>
      <label class="checkout-consent"><input type="checkbox" name="consent" required> Concordo em enviar meus dados para que a Games Shop confirme estoque, recebimento e pagamento deste pedido.</label>
      <button class="btn primary place-order" type="submit">Confirmar pedido</button><p class="secure-note">🔒 O site não solicita nem armazena dados de cartão.</p>
    </form><aside class="order-summary"><h2>Resumo do pedido</h2><div class="checkout-items">${lines.map(({product,qty}) => `<div class="checkout-item"><div>${cover(product)}</div><p><b>${product.title}</b><small>${product.platform} · Qtd. ${qty}</small></p><strong>${money(product.price*qty)}</strong></div>`).join('')}</div><dl><div><dt>Subtotal</dt><dd>${money(total)}</dd></div><div><dt>Recebimento</dt><dd id="shipping-summary">Retirada grátis</dd></div><div class="summary-total"><dt>Total dos produtos</dt><dd>${money(total)}</dd></div></dl><p>Preços e estoque sujeitos à confirmação da loja.</p><button type="button" class="edit-cart" data-open-cart>Editar carrinho</button></aside></div>`;
}

function submitCheckout(form) {
  if (!form.reportValidity()) return;
  const lines = cartLines();
  if (!lines.length) return renderCheckout();
  const data = new FormData(form);
  const paymentLabels = { pix: "Pix após confirmação", "store-card": "Cartão na loja", "store-cash": "Dinheiro na loja" };
  const order = {
    number: `GS-${new Date().toISOString().slice(0,10).replaceAll('-','')}-${String(Date.now()).slice(-5)}`,
    createdAt: new Date().toISOString(),
    status: "Aguardando confirmação",
    customer: { name: data.get("name").trim(), phone: data.get("phone").trim(), email: data.get("email").trim() },
    fulfillment: data.get("fulfillment"),
    address: data.get("fulfillment") === "delivery" ? { zip:data.get("zip"), address:data.get("address"), number:data.get("number"), complement:data.get("complement"), district:data.get("district"), city:data.get("city") } : null,
    payment: data.get("payment"), paymentLabel: paymentLabels[data.get("payment")], notes: data.get("notes").trim(),
    items: lines.map(({product,qty}) => ({ id:product.id, title:product.title, platform:product.platform, price:product.price, qty })),
    total: lines.reduce((sum,item) => sum + item.product.price * item.qty, 0)
  };
  const orders = JSON.parse(localStorage.getItem("gamesShopOrders") || "[]");
  orders.unshift(order);
  localStorage.setItem("gamesShopOrders", JSON.stringify(orders.slice(0,20)));
  state.lastOrder = order; state.cart = {}; save(); updateCounters(); renderCheckout(); window.scrollTo({top:0,behavior:"smooth"});
}

function closePanels() {
  $$(".drawer.open").forEach(el => { el.classList.remove("open"); el.setAttribute("aria-hidden", "true"); });
  $("#overlay").classList.remove("show");
  $("#mobile-menu").classList.remove("open");
}

function showFavorites() {
  const items = PRODUCTS.filter(p => state.favorites.includes(p.id));
  $("#favorites-grid").innerHTML = items.map(productCard).join("") || `<div class="empty-state"><b>Nenhum favorito ainda.</b><span>Toque no coração de um produto para salvá-lo.</span></div>`;
  $("#favorites-drawer").classList.add("open"); $("#overlay").classList.add("show");
}

function showProduct(slug) {
  const p = PRODUCTS.find(x => x.slug === slug);
  if (!p) return;
  $("#product-content").innerHTML = `<nav class="breadcrumb" aria-label="Navegação estrutural"><a href="#inicio">Início</a><span>›</span><a href="#catalogo">Jogos</a><span>›</span>${p.title}</nav>
    <div class="product-detail">
      <div class="detail-cover">${cover(p, true)}${badge(p)}</div>
      <div class="detail-info"><span class="platform-tag">${p.platform}</span><h1>${p.title}</h1><p class="availability">${p.stock ? '● Em estoque' : '○ Consulte disponibilidade'}</p>
        <p class="detail-description">${p.description}</p>${p.oldPrice ? `<span class="old-price">${money(p.oldPrice)}</span>` : ''}<strong class="detail-price">${money(p.price)}</strong><p>Em até 6x de ${money(p.price/6)} sem juros</p>
        <div class="detail-actions"><button class="btn primary" data-add="${p.id}">Adicionar ao carrinho</button><button class="btn secondary" data-favorite="${p.id}">${state.favorites.includes(p.id) ? '♥ Favoritado' : '♡ Favoritar'}</button></div>
        <button class="whatsapp-link" data-whatsapp="Olá! Gostaria de consultar ${p.title} para ${p.platform}.">Consultar pelo WhatsApp</button>
      </div>
    </div>
    <section class="product-about"><div><span class="eyebrow">Sobre o jogo</span><h2>Pronto para a próxima partida?</h2><p>${p.description}</p></div>
      <dl><div><dt>Plataforma</dt><dd>${p.platform}</dd></div><div><dt>Gênero</dt><dd>${p.genre}</dd></div><div><dt>Publisher</dt><dd>${p.publisher}</dd></div><div><dt>Desenvolvedora</dt><dd>${p.developer}</dd></div><div><dt>Classificação</dt><dd>${p.rating}</dd></div><div><dt>Jogadores</dt><dd>${p.players}</dd></div></dl>
    </section>
    <section><div class="section-heading"><div><span class="eyebrow">Continue explorando</span><h2>Você também pode gostar</h2></div></div><div class="product-grid">${PRODUCTS.filter(x => x.id !== p.id && (x.genre === p.genre || x.platform === p.platform)).slice(0,4).map(productCard).join('')}</div></section>`;
  $("#home-view").hidden = true; $("#product-view").hidden = false; $("#checkout-view").hidden = true; window.scrollTo({top: 0});
}

function showHome(anchor) {
  $("#home-view").hidden = false; $("#product-view").hidden = true; $("#checkout-view").hidden = true;
  requestAnimationFrame(() => { const el = anchor && document.getElementById(anchor); if (el) el.scrollIntoView({behavior: "smooth"}); else window.scrollTo({top:0, behavior:"smooth"}); });
}

function route() {
  const hash = location.hash.slice(1) || "inicio";
  if (hash === "checkout") { $("#home-view").hidden = true; $("#product-view").hidden = true; $("#checkout-view").hidden = false; renderCheckout(); window.scrollTo({top:0}); }
  else if (hash.startsWith("produto/")) showProduct(hash.split("/")[1]); else showHome(hash);
  closePanels();
}

function initSearch() {
  const input = $("#search-input"), suggestions = $("#search-suggestions");
  input.addEventListener("input", () => {
    const q = input.value.trim().toLocaleLowerCase("pt-BR");
    const matches = q.length > 1 ? PRODUCTS.filter(p => [p.title,p.platform,p.genre,p.franchise].join(" ").toLocaleLowerCase("pt-BR").includes(q)).slice(0,6) : [];
    suggestions.innerHTML = matches.map(p => `<a href="#produto/${p.slug}"><span class="search-thumb">${cover(p)}</span><span><b>${p.title}</b><small>${p.platform} · ${money(p.price)}</small></span></a>`).join("");
    suggestions.classList.toggle("show", matches.length > 0);
  });
  input.addEventListener("keydown", e => { if (e.key === "Escape") suggestions.classList.remove("show"); });
}

document.addEventListener("click", e => {
  const add = e.target.closest("[data-add]"); if (add) addToCart(Number(add.dataset.add));
  const fav = e.target.closest("[data-favorite]"); if (fav) toggleFavorite(Number(fav.dataset.favorite));
  const cart = e.target.closest("[data-open-cart]"); if (cart) openCart();
  if (e.target.closest("[data-open-favorites]")) showFavorites();
  if (e.target.closest("[data-close]") || e.target.id === "overlay") closePanels();
  const qty = e.target.closest("[data-qty]"); if (qty) { const id=Number(qty.dataset.qty); state.cart[id]=Math.max(0,(state.cart[id]||0)+Number(qty.dataset.delta)); if(!state.cart[id]) delete state.cart[id]; save(); updateCounters(); openCart(); }
  const remove = e.target.closest("[data-remove]"); if (remove) { delete state.cart[Number(remove.dataset.remove)]; save(); updateCounters(); openCart(); }
  const platform = e.target.closest("[data-platform]"); if (platform) { state.filters.platform=platform.dataset.platform; $("#filter-platform").value=state.filters.platform; filterProducts(); }
  const wa = e.target.closest("[data-whatsapp]"); if (wa) { if(!STORE.whatsapp) toast("Adicione o número do WhatsApp em app.js para ativar."); else window.open(whatsappUrl(wa.dataset.whatsapp), "_blank", "noopener"); }
  if (e.target.closest("#menu-toggle")) $("#mobile-menu").classList.toggle("open");
  if (e.target.closest("#checkout-button")) { closePanels(); location.hash = "checkout"; }
  const orderWhatsApp = e.target.closest("[data-order-whatsapp]");
  if (orderWhatsApp) {
    const order = state.lastOrder;
    if (!STORE.whatsapp) toast("Adicione o número do WhatsApp em app.js para enviar o pedido.");
    else if (order) { const items=order.items.map(i=>`${i.qty}x ${i.title} (${i.platform})`).join(', '); window.open(whatsappUrl(`Olá! Quero confirmar o pedido ${order.number}: ${items}. Total dos produtos: ${money(order.total)}.`), '_blank', 'noopener'); }
  }
});

document.addEventListener("change", e => {
  if (e.target.name === "fulfillment") {
    const delivery = e.target.value === "delivery";
    const fields = $("#delivery-fields");
    if (!fields) return;
    fields.hidden = !delivery;
    $$("input", fields).forEach(input => { input.disabled = !delivery; input.required = delivery && input.name !== "complement"; });
    $$('input[name="payment"]').forEach(input => { if (input.value !== 'pix') input.disabled = delivery; });
    if (delivery) $('input[name="payment"][value="pix"]').checked = true;
    $("#shipping-summary").textContent = delivery ? "A combinar" : "Retirada grátis";
  }
});

document.addEventListener("input", e => {
  if (e.target.name === "phone") e.target.value = e.target.value.replace(/\D/g, '').slice(0,11).replace(/^(\d{2})(\d)/, '($1) $2').replace(/(\d{5})(\d)/, '$1-$2');
  if (e.target.name === "zip") e.target.value = e.target.value.replace(/\D/g, '').slice(0,8).replace(/(\d{5})(\d)/, '$1-$2');
});

document.addEventListener("submit", e => { if (e.target.id === "checkout-form") { e.preventDefault(); submitCheckout(e.target); } });

$$('[data-filter]').forEach(el => el.addEventListener('change', () => { state.filters[el.dataset.filter] = el.type === 'checkbox' ? el.checked : el.value; filterProducts(); }));
$("#clear-filters").addEventListener("click", () => { state.filters={platform:"",genre:"",condition:"",price:"",availability:false,sort:"best"}; $$('[data-filter]').forEach(el => el.type==='checkbox' ? el.checked=false : el.value=el.dataset.filter==='sort'?'best':''); filterProducts(); });
$("#contact-form").addEventListener("submit", e => {
  e.preventDefault();
  const data = new FormData(e.target);
  const message = `Olá! Meu nome é ${data.get("name")}.\nAssunto: ${data.get("subject")}\nTelefone: ${data.get("phone") || "não informado"}\nE-mail: ${data.get("email")}\n\n${data.get("message")}`;
  window.open(whatsappUrl(message), "_blank", "noopener");
  toast("Abrindo sua mensagem no WhatsApp.");
});
window.addEventListener("hashchange", route);

renderProducts("#best-sellers", PRODUCTS.filter(p => p.bestSeller).slice(0,8));
renderProducts("#launches", PRODUCTS.filter(p => p.featured).slice(0,8));
renderProducts("#preorders", PRODUCTS.filter(p => p.preorder));
renderProducts("#offers", PRODUCTS.filter(p => p.oldPrice && p.condition === "Novo").slice(0,4));
renderProducts("#used-games", PRODUCTS.filter(p => p.condition === "Seminovo"));
filterProducts(); initSearch(); updateCounters(); route();
