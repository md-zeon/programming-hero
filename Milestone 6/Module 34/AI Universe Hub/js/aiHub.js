const loadData = async (isSeeMore) => {
  const res = await fetch(`https://openapi.programming-hero.com/api/ai/tools`);
  const data = await res.json();
  const tools = data.data.tools;
  loadingSpinnerToggle(true);
  displayTools(tools, isSeeMore);
};

const displayTools = (tools, isSeeMore) => {
  const cardContainer = document.getElementById("cards-container");
  const seeMoreContainer = document.getElementById("see-more-container");
  cardContainer.innerHTML = "";

  if (tools.length > 6 && !isSeeMore) {
    seeMoreContainer.classList.remove("hidden");
  } else {
    seeMoreContainer.classList.add("hidden");
  }

  if (!isSeeMore) {
    tools = tools.slice(0, 6);
  }

  tools.forEach((tool) => {
    const toolCard = document.createElement("div");
    toolCard.classList.add = `card bg-base-100 card-bordered`;
    toolCard.innerHTML = `
        <figure class="px-6 pt-6">
        <img src="${tool.image}" alt="${tool.name}" class="rounded-xl" />
        </figure>
      <div class="card-body text-left">
      <div id="${tool.id}">
        <h2 class="text-2xl font-semibold">Features</h2>
        </div>
        <hr class="my-6 border">
        <h2 class="text-2xl font-semibold">${tool.name}</h2>
        <div class="card-actions justify-between items-center">
          <p><i class="fa fa-calendar font-normal"></i> <span class="font-medium">${tool.published_in}</span></p>
          <button onclick="showModalHandler('${tool.id}')" class="btn btn-circle btn-outline btn-error"><i class="fa fa-arrow-right"></i></button>
        </div>
      </div>
    `;
    cardContainer.appendChild(toolCard);

    const featuresContainer = document.getElementById(tool.id);
    const features = tool.features;
    for (let i = 0; i < features.length; i++) {
      const p = document.createElement("p");
      p.innerText = `
        ${i + 1}. ${features[i]}
        `;
      featuresContainer.appendChild(p);
    }

    loadingSpinnerToggle(false);
  });
};

const seeMoreHandler = (isSeeMore) => {
  isSeeMore = true;
  loadData(isSeeMore);
};

const loadingSpinnerToggle = (isLoading) => {
  const loadingSpinner = document.getElementById("loading-spinner");
  if (isLoading) {
    loadingSpinner.classList.remove("invisible");
  } else {
    loadingSpinner.classList.add("invisible");
  }
};

const showModalHandler = async (id) => {
  my_modal_5.showModal();
  const res = await fetch(
    `https://openapi.programming-hero.com/api/ai/tool/${id}`
  );
  const data = await res.json();
  const tool = data.data;
  showModalDetails(tool);
};

const showModalDetails = (tool) => {
  const modalContainer = document.getElementById("modal-container");
  modalContainer.innerHTML = `
  <div class="grid grid-cols-1 md:grid-cols-2 gap-5 p-20 overflow-auto">
  <div class="bg-[#eb57570d] p-5 rounded-xl space-y-3">
      <h2 class="text-2xl font-semibold">${tool.description}</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div class="p-2 bg-white rounded-lg text-green-400">
              <p>
                  <span>${tool.pricing[0].price}</span>
                  <span>${tool.pricing[0].plan}</span>
              </p>
          </div>
          <div class="p-2 bg-white rounded-lg text-orange-400">
              <p>
                  <span>${tool.pricing[1].price}</span>
                  <span>${tool.pricing[1].plan}</span>
              </p>
          </div>
          <div class="p-2 bg-white rounded-lg text-red-400">
              <p>
              <span>${tool.pricing[2].price}</span>
              <span>${tool.pricing[2].plan}</span>
              </p>
          </div>
      </div>
      <div class="flex flex-col md:flex-row justify-evenly gap-6">
          <div>
              <h2 class="text-2xl font-semibold">Features</h2>
              <ul id= "features-list" class= "text-[#585858] list-disc">

              </ul>
          </div>
          <div>
              <h2 class="text-2xl font-semibold">Integrations</h2>
              <ul id = "integrations-list" class="text-[#585858] list-disc">
              </ul>
          </div>
      </div>
  </div>
  <div>
      <div class="card bg-base-100 card-bordered">
          <figure id = "img-${tool.id}" class="px-4 pt-4 w-auto">
          </figure>
          <div class="card-body items-center text-center">
            <h2 class="card-title">${tool.input_output_examples[0].input}</h2>
            <p>${tool.input_output_examples[0].output}</p>
          </div>
        </div>
  </div>
</div>
  `;
  const features = tool.features;
  addFeatureList("features-list", features);
  const integrations = tool.integrations;
  addIntegrationsList("integrations-list", integrations);

  const figureId = document.getElementById(`img-${tool.id}`);
  if(tool.accuracy.score !== null) {
    figureId.classList.add("indicator");
    figureId.innerHTML = `
    <span class="indicator-item badge top-4 right-16 badge-lg badge-error text-white">${(tool.accuracy.score) * 100}% accuracy</span> 
    <img src="${tool.image_link[0]}" alt="${tool.tool_name}" class="rounded-xl" />
    `
  } else {
    figureId.innerHTML = `
    <img src="${tool.image_link[0]}" alt="${tool.tool_name}" class="rounded-xl" />
    `
  }

};

const addFeatureList = (elementId, features) => {
  const element = document.getElementById(elementId);
  for (const feature in features) {
    const li = document.createElement("li");
    li.innerHTML = `${features[feature].feature_name}`;
    element.appendChild(li);
  }
};

const addIntegrationsList = (elementId, integrations) => {
  const element = document.getElementById(elementId);
  integrations.forEach((integration) => {
    const li = document.createElement("li");
    li.innerHTML = `${integration}`;
    element.appendChild(li);
  });
};

loadData();