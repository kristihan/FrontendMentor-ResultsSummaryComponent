fetch('./data.json')
    .then((response) => response.json())
    .then((json) => {
        let summaryItems = document.getElementById("summaryItems");
        let genSummaryItems = "";

        json.forEach(item => {
            genSummaryItems +=
            `<li class="summary-item" 
                style="background: hsla(${item.color.hue}, ${item.color.saturation}, ${item.color.lightness}, 0.2); 
                    color: hsl(${item.color.hue}, ${item.color.saturation}, ${item.color.lightness});">
                <img src="${item.icon}" alt="${item.category} Icon">
                <p class="item-name">${item.category}</p>
                <p class="item-score">${item.score}</p>
                <p class="item-max-score">/ 100</p>
            </li>`
        });
        summaryItems.innerHTML = genSummaryItems;
    });