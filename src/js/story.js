import { data } from "../assets/data/data.js";

export const story = () => {
    const storyList = document.querySelector('.story ul');
    if (!storyList) return;

    const items = Array.isArray(data.story) ? data.story : [];
    const itemMarkup = (item) => {
        const { date, title, description, image } = item;
        return `
            <li data-aos="zoom-in" data-aos-duration="1000">
                <figure>
                    <img src="${image}" alt="${title}">
                </figure>
                <div class="content">
                    <time>${date}</time>
                    <h3>${title}</h3>
                    <p>${description}</p>
                </div>
            </li>
        `;
    };

    storyList.innerHTML = items.map(itemMarkup).join('');
};


