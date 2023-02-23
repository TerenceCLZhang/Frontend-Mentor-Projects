fetch("./data.json")
  .then((response) => response.json())
  .then((data) => {
    const dataArray = data.map((item) => ({
      category: item.category,
      score: item.score,
      icon: item.icon,
    }));

    const statisticElements = document.querySelectorAll(".statistic");
    statisticElements.forEach((statistic, index) => {
      const category = dataArray[index].category;
      const score = dataArray[index].score;
      const icon = dataArray[index].icon;

      statistic.classList.add(category.toLowerCase());
      statistic.querySelector("img").setAttribute("src", icon);
      statistic.querySelector(".number").textContent = score;
    });
  })
  .catch((error) => console.error(error));
