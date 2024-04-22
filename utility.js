const getElementById = (elementId) => {
  const element = document.getElementById(elementId);
  return element;
};

const postBox = getElementById("postContainer");

const readCount = getElementById("read-count");
let isActive = true;
let count = 1;

const searchBtn = () => {
  toggleLoadingSpinner(true);
  const getSearchField = document.getElementById("searchField");
  const getSearchFieldText = getSearchField.value;
  postBox.textContent = "";
  fetchAllPost(getSearchFieldText);
  // getSearchField.value = "";
};

const fetchAllPost = async (search) => {
  toggleLoadingSpinner(true);

  const url = search
    ? `https://openapi.programming-hero.com/api/retro-forum/posts?category=${search}`
    : "https://openapi.programming-hero.com/api/retro-forum/posts";
  const res = await fetch(url);
  const data = await res.json();
  const allData = data.posts;
  createPostContainer(allData);
};

const createPostContainer = (data) => {
  data.forEach((newData) => {
    const createNewPost = document.createElement("div");
    createNewPost.className =
      "flex gap-1 md:gap-5 rounded-xl p-4 md:p-8 bg-[#F3F3F5] shadow-xl";
    createNewPost.innerHTML = `
    <div class="avatar relative ">
        <div class="w-16 h-16 rounded-xl">
            <img src="${newData.image}" />
        </div>
        <span class="absolute top-0 right-0 transform -translate-y-1/2 w-3.5 h-3.5 isOnlines bg-[#10B981] border-2 border-white dark:border-gray-800 rounded-full"></span>
    </div>
    <div class="w-full flex flex-col space-y-2 ">
        <div class="flex gap-4 font-inter text-sm text-[#12132DCC] font-medium">
            <p>#${newData.category}</p>
            <p>Author: ${newData.author.name}</p>
        </div>
        <div class="font-mulish text-base md:text-xl text-[#12132D] font-bold">
            <h3>${newData.title}</h3>
        </div>
        <div class="mt-2 font-inter text-[#12132D99] text-sm lg:text-base font-normal">
            <p>${newData.description}</p>
        </div>
        <span class="border-dashed border-b-[1px] block pt-2 border-[#12132D40]"></span>
        <div class="flex justify-between">
            <div class="flex space-x-2 md:space-x-6 font-inter text-[#12132D99] text-sm lg:text-base font-normal">
                <div class="flex items-center gap-1 md:gap-3">
                    <span>
                        <svg width="22.500000" height="21.333374" viewBox="0 0 22.5 21.3334"
                            fill="none" xmlns="http://www.w3.org/2000/svg"
                            xmlns:xlink="http://www.w3.org/1999/xlink">
                            <defs />
                            <path id="Vector"
                                d="M6.58334 6.58337L15.9167 6.58337M6.58334 11.25L13.5833 11.25M4.25 17.0834C3.32174 17.0834 2.4315 16.7146 1.77512 16.0582C1.11875 15.4019 0.75 14.5116 0.75 13.5834L0.75 4.25C0.75 3.32178 1.11875 2.43152 1.77512 1.77515C2.4315 1.11877 3.32174 0.75 4.25 0.75L18.25 0.75C19.1783 0.75 20.0685 1.11877 20.7249 1.77515C21.3812 2.43152 21.75 3.32178 21.75 4.25L21.75 13.5834C21.75 14.5116 21.3812 15.4019 20.7249 16.0582C20.0685 16.7146 19.1783 17.0834 18.25 17.0834L14.75 17.0834L11.25 20.5834L7.75 17.0834L4.25 17.0834Z"
                                stroke="#12132D" stroke-opacity="0.600000" stroke-width="1.500000"
                                stroke-linejoin="round" />
                        </svg>
                    </span>
                    <span> ${newData.comment_count}</span>
                </div>
                <div class="flex items-center gap-1 md:gap-3">
                    <span>
                        <svg width="22.500000" height="15.500000" viewBox="0 0 22.5 15.5"
                            fill="none" xmlns="http://www.w3.org/2000/svg"
                            xmlns:xlink="http://www.w3.org/1999/xlink">
                            <defs />
                            <path id="Vector"
                                d="M9.60009 9.3999C10.0377 9.83752 10.6312 10.0834 11.25 10.0834C11.8688 10.0834 12.4623 9.83752 12.8999 9.3999C13.3375 8.96228 13.5833 8.3689 13.5833 7.75C13.5833 7.1311 13.3375 6.53772 12.8999 6.1001C12.4623 5.66248 11.8688 5.41663 11.25 5.41663C10.6312 5.41663 10.0377 5.66248 9.60009 6.1001C9.1625 6.53772 8.91667 7.1311 8.91667 7.75C8.91667 8.3689 9.1625 8.96228 9.60009 9.3999ZM11.25 14.75C7.05 14.75 3.55 12.4166 0.75 7.75C3.55 3.08337 7.05 0.75 11.25 0.75C15.45 0.75 18.95 3.08337 21.75 7.75C18.95 12.4166 15.45 14.75 11.25 14.75Z"
                                stroke="#12132D" stroke-opacity="0.600000" stroke-width="1.500000"
                                stroke-linejoin="round" />
                        </svg>
                    </span>
                    <span> ${newData.view_count}</span>
                </div>
                <div class="flex items-center gap-1 md:gap-3">
                    <span>
                        <svg width="28.000000" height="28.000000" viewBox="0 0 28 28" fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            xmlns:xlink="http://www.w3.org/1999/xlink">
                            <defs>
                                <clipPath id="clip57_454">
                                    <rect id="tabler-icon-clock-hour-9" width="28.000000"
                                        height="28.000000" fill="white" fill-opacity="0" />
                                </clipPath>
                            </defs>
                            <rect id="tabler-icon-clock-hour-9" width="28.000000" height="28.000000"
                                fill="#FFFFFF" fill-opacity="0" />
                            <g clip-path="url(#clip57_454)">
                                <path id="Vector"
                                    d="M4.29926 18.0182C4.82694 19.2921 5.60036 20.4496 6.57538 21.4246C7.55039 22.3997 8.70791 23.1731 9.98183 23.7007C11.2557 24.2284 12.6211 24.5 14 24.5C15.3789 24.5 16.7443 24.2284 18.0182 23.7007C19.2921 23.1731 20.4496 22.3997 21.4246 21.4246C22.3996 20.4496 23.1731 19.2921 23.7007 18.0182C24.2284 16.7443 24.5 15.3789 24.5 14C24.5 12.6211 24.2284 11.2557 23.7007 9.98181C23.1731 8.70789 22.3996 7.55042 21.4246 6.57544C20.4496 5.60034 19.2921 4.8269 18.0182 4.29932C16.7443 3.77161 15.3789 3.5 14 3.5C12.6211 3.5 11.2557 3.77161 9.98183 4.29932C8.70791 4.8269 7.55039 5.60034 6.57538 6.57544C5.60036 7.55042 4.82694 8.70789 4.29926 9.98181C3.77159 11.2557 3.5 12.6211 3.5 14C3.5 15.3789 3.77159 16.7443 4.29926 18.0182ZM14 8.16663L14 14L9.91666 14"
                                    stroke="#12132D" stroke-opacity="0.600000"
                                    stroke-width="1.500000" stroke-linejoin="round"
                                    stroke-linecap="round" />
                            </g>
                        </svg>
                    </span>
                    <span> ${newData.posted_time}</span>
                </div>
            </div>
                <div class="text-end w-8 h-8 rounded-full">
                    <button class="mark-read"><img src="images/mark.png"></button>
                </div>
            </div>
        </div>
      `;
    postBox.appendChild(createNewPost);
    const activeCheck = createNewPost.querySelector(".isOnlines");
    if (isActive === newData.isActive) {
      activeCheck.classList.add("bg-[#10B981]");
    } else {
      activeCheck.classList.remove("bg-[#10B981]");
      activeCheck.classList.add("bg-[#FF3434]");
    }
    createMarkAsReadButton(createNewPost, newData);
  });

  //   Set loading Spinner for 2 second
  setTimeout(() => {
    toggleLoadingSpinner(false);
  }, 2000);
};

const createMarkAsReadButton = (post, data) => {
  const markButton = post.querySelector(".mark-read");
  const getMarkSection = document.getElementById("markpost");
  markButton.addEventListener("click", function () {
    readCount.innerText = count++;
    post.style.backgroundColor = "#797DFC1A";
    const createMarkPost = document.createElement("div");
    createMarkPost.className = `flex items-center gap-3`;
    createMarkPost.innerHTML = `
    <div class="p-4 bg-white rounded-xl flex justify-between gap-2 w-full">
        <div class="font-mulish text-sm text-[#12132D] font-semibold">
            <h3>${data.title}</h3>
        </div>
        <div class="flex items-center gap-3">
            <span>
                <svg width="22.500000" height="15.500000" viewBox="0 0 22.5 15.5" fill="none"
                    xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                    <defs />
                    <path id="Vector"
                        d="M9.60009 9.3999C10.0377 9.83752 10.6312 10.0834 11.25 10.0834C11.8688 10.0834 12.4623 9.83752 12.8999 9.3999C13.3375 8.96228 13.5833 8.3689 13.5833 7.75C13.5833 7.1311 13.3375 6.53772 12.8999 6.1001C12.4623 5.66248 11.8688 5.41663 11.25 5.41663C10.6312 5.41663 10.0377 5.66248 9.60009 6.1001C9.1625 6.53772 8.91667 7.1311 8.91667 7.75C8.91667 8.3689 9.1625 8.96228 9.60009 9.3999ZM11.25 14.75C7.05 14.75 3.55 12.4166 0.75 7.75C3.55 3.08337 7.05 0.75 11.25 0.75C15.45 0.75 18.95 3.08337 21.75 7.75C18.95 12.4166 15.45 14.75 11.25 14.75Z"
                        stroke="#12132D" stroke-opacity="0.600000" stroke-width="1.500000"
                        stroke-linejoin="round" />
                </svg>
            </span>
                <span> ${data.view_count}</span>
        </div>
    </div>
    `;
    getMarkSection.appendChild(createMarkPost);
  });
};

const toggleLoadingSpinner = (isLoading) => {
  const loadingSpinner = getElementById("loading-spinner");
  if (isLoading) {
    loadingSpinner.classList.remove("hidden");
  } else {
    loadingSpinner.classList.add("hidden");
  }
};

fetchAllPost();
