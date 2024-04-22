const latestPostContainer = getElementById("latest-post");

const fetchAllLatestPost = async () => {
  const url =
    "https://openapi.programming-hero.com/api/retro-forum/latest-posts";

  const res = await fetch(url);
  const data = await res.json();
  postAllLatestPost(data);
};

const postAllLatestPost = (data) => {
  data.forEach((newData) => {
    const createLatestPost = document.createElement("div");
    createLatestPost.className =
      "max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700";
    createLatestPost.innerHTML = `
    <figure class="p-4 w-full h-56 ">
        <img class="rounded-lg h-full w-full object-cover" src="${
          newData.cover_image
        }" alt="PostImg" />
    </figure>
    <div class="px-5 space-y-4">
        <div class="space-x-2">
            <i class="fa-solid fa-calendar-days"></i>
            <small>${
              newData.author?.posted_date
                ? newData.author.posted_date
                : "No Publish Date"
            }</small>
        </div>
        <a href="#" class="font-mulish text-xl text-[#12132D] font-black">${
          newData.title
        }</a>
        <div class="mt-2 font-inter text-[#12132D99] text-sm lg:text-base font-normal">
            <p>${newData.description}</p>
        </div>
        <div class="flex gap-4 items-center">
            <div class="avatar">
                <div class="w-12 rounded-full">
                    <img
                        src="${newData.profile_image}" />
                </div>
            </div>
            <div class=" py-4">
                <p class="font-mulish text-lg text-[#12132D] font-semibold">${
                  newData.author.name
                }</p>
                <p class="font-inter text-[#12132D99] text-sm">${
                  newData.author?.designation
                    ? newData.author.designation
                    : "Unknown"
                }</p>
            </div>
        </div>
    </div>
                    
    `;
    latestPostContainer.appendChild(createLatestPost);
  });
};
fetchAllLatestPost();
