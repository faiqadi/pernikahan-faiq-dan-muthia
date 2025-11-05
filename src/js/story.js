import { data } from "../assets/data/data.js";

export const story = () => {
    const mainEl = document.querySelector('main');
    const section = document.querySelector('.story');
    
    if (!mainEl || !section) return;

    const itemsHtml = data.story.map((item, idx) => {
        const effect = idx % 2 === 0 ? 'fade-right' : 'fade-left';
        const delay = String(100 + idx * 150);
        return `
                <article class="story-item" data-aos="${effect}" data-aos-duration="800" data-aos-delay="${delay}">
                    <figure>
                        <img src="${item.image}" alt="momen ${item.title.toLowerCase()}">
                    </figure>
                    <h3>${item.title}</h3>
                    <p>${item.description}</p>
                    ${idx < data.story.length - 1 ? "<div class=\"story-divider\"><span></span><i class='bx bxs-heart'></i><span></span></div>" : ""}
                </article>
        `;
    }).join('');

    const container = section.querySelector('.container');
    const listEl = section.querySelector('.story-list');
    const quoteEm = section.querySelector('blockquote em');
    const quoteBy = section.querySelector('blockquote span');

    if (listEl) listEl.innerHTML = itemsHtml;
    if (quoteEm) quoteEm.textContent = `"${data.storyQuote.text}"`;
    if (quoteBy) quoteBy.textContent = `— ${data.storyQuote.author}`;

    // Styles are defined in src/css/story.css

    // Section remains visible; refresh AOS after content injection
    if (typeof AOS !== 'undefined') {
        try { AOS.refresh(); } catch (_) {}
    }
};