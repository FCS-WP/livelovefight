document.addEventListener("DOMContentLoaded", function () {
  // Tabs
  const tabFindPuppy = document.getElementById("find-your-puppy-tab");
  const tabPuppySpa = document.getElementById("puppy-spa-tab");
  const tabAccessories = document.getElementById("accessories-tab");

  // Content
  const contentFindPuppy = document.getElementById(
    "find-your-puppy-tab-content"
  );
  const contentPuppySpa = document.getElementById("puppy-spa-tab-content");
  const contentAccessories = document.getElementById("accessories-tab-content");

  // Images (normal + active)
  const imgNormal = [
    document.getElementById("img-find-your-puppy"),
    document.getElementById("img-puppy-spa"),
    document.getElementById("img-accessories"),
  ];
  const imgActive = [
    document.getElementById("img-find-your-puppy-active"),
    document.getElementById("img-puppy-spa-active"),
    document.getElementById("img-accessories-active"),
  ];

  const tabs = [tabFindPuppy, tabPuppySpa, tabAccessories];
  const contents = [contentFindPuppy, contentPuppySpa, contentAccessories];

  function showContent(index) {
    contents.forEach((c, i) => {
      if (c) c.classList.toggle("active", i === index);
    });
    tabs.forEach((t, i) => {
      if (t) t.classList.toggle("active", i === index);
    });

    imgNormal.forEach((img, i) => {
      if (img) img.style.display = i === index ? "none" : "block";
    });
    imgActive.forEach((img, i) => {
      if (img) img.style.display = i === index ? "block" : "none";
    });
  }

  showContent(0);

  tabs.forEach((tab, index) => {
    tab?.addEventListener("click", () => showContent(index));
  });
});
