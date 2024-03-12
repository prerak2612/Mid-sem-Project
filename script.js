

    const jobData = {

    "jobs" : [{
        "id": 1,
        "company": "Photosnap",
        "logo": "https://d3dyfaf3iutrxo.cloudfront.net/general/upload/d1b1de43ca6a441e99543d80eb517d34.svg",
        "new": true,
        "featured": true,
        "position": "Senior Frontend Developer",
        "role": "Frontend",
        "level": "Senior",
        "postedAt": "1d ago",
        "contract": "Full Time",
        "location": "USA Only",
        "languages": ["HTML", "CSS", "JavaScript"],
        "tools": []
      },
      {
        "id": 2,
        "company": "Manage",
        "logo": "https://d3dyfaf3iutrxo.cloudfront.net/general/upload/be5619415553470faca94f94f72b6e68.svg",
        "new": true,
        "featured": true,
        "position": "Fullstack Developer",
        "role": "Fullstack",
        "level": "Midweight",
        "postedAt": "1d ago",
        "contract": "Part Time",
        "location": "Remote",
        "languages": ["Python"],
        "tools": ["React"]
      },
      {
        "id": 3,
        "company": "Account",
        "logo": "https://d3dyfaf3iutrxo.cloudfront.net/general/upload/c245c838322e4ebdae5692c9d9a8bdbe.svg",
        "new": true,
        "featured": false,
        "position": "Junior Frontend Developer",
        "role": "Frontend",
        "level": "Junior",
        "postedAt": "2d ago",
        "contract": "Part Time",
        "location": "USA Only",
        "languages": ["JavaScript"],
        "tools": ["React", "Sass"]
      },
      {
        "id": 4,
        "company": "MyHome",
        "logo": "https://d3dyfaf3iutrxo.cloudfront.net/general/upload/cd85fb2d60f04ea7aea3ed183a37a607.svg",
        "new": false,
        "featured": false,
        "position": "Junior Frontend Developer",
        "role": "Frontend",
        "level": "Junior",
        "postedAt": "5d ago",
        "contract": "Contract",
        "location": "USA Only",
        "languages": ["CSS", "JavaScript"],
        "tools": []
      },
      {
        "id": 5,
        "company": "Loop Studios",
        "logo": "https://d3dyfaf3iutrxo.cloudfront.net/general/upload/a4cd5572845541adb89e962794ca86fe.svg",
        "new": false,
        "featured": false,
        "position": "Software Engineer",
        "role": "Fullstack",
        "level": "Midweight",
        "postedAt": "1w ago",
        "contract": "Full Time",
        "location": "Worldwide",
        "languages": ["JavaScript", "Ruby"],
        "tools": ["Sass"]
      },
      {
        "id": 6,
        "company": "FaceIt",
        "logo": "https://d3dyfaf3iutrxo.cloudfront.net/general/upload/e8c50754b72f43f6a3eefd188acdac7c.svg",
        "new": false,
        "featured": false,
        "position": "Junior Backend Developer",
        "role": "Backend",
        "level": "Junior",
        "postedAt": "2w ago",
        "contract": "Full Time",
        "location": "UK Only",
        "languages": ["Ruby"],
        "tools": ["RoR"]
      },
      {
        "id": 7,
        "company": "Shortly",
        "logo": "https://d3dyfaf3iutrxo.cloudfront.net/general/upload/96e8d27ab40b4015a59e589687dd177d.svg",
        "new": false,
        "featured": false,
        "position": "Junior Developer",
        "role": "Frontend",
        "level": "Junior",
        "postedAt": "2w ago",
        "contract": "Full Time",
        "location": "Worldwide",
        "languages": ["HTML", "JavaScript"],
        "tools": ["Sass"]
      },
      {
        "id": 8,
        "company": "Insure",
        "logo": "https://d3dyfaf3iutrxo.cloudfront.net/general/upload/2dd17882e68d4045a18eab7dfb9c37de.svg",
        "new": false,
        "featured": false,
        "position": "Junior Frontend Developer",
        "role": "Frontend",
        "level": "Junior",
        "postedAt": "2w ago",
        "contract": "Full Time",
        "location": "USA Only",
        "languages": ["JavaScript"],
        "tools": ["Vue", "Sass"]
      },
      {
        "id": 9,
        "company": "Eyecam Co.",
        "logo": "https://d3dyfaf3iutrxo.cloudfront.net/general/upload/68e12689f98740ddaa1f4a78bc2d4f7c.svg",
        "new": false,
        "featured": false,
        "position": "Full Stack Engineer",
        "role": "Fullstack",
        "level": "Midweight",
        "postedAt": "3w ago",
        "contract": "Full Time",
        "location": "Worldwide",
        "languages": ["JavaScript", "Python"],
        "tools": ["Django"]
      },
      {
        "id": 10,
        "company": "The Air Filter Company",
        "logo": "https://d3dyfaf3iutrxo.cloudfront.net/general/upload/db318fbeb51d41b6bc9388259899e297.svg",
        "new": false,
        "featured": false,
        "position": "Front-end Dev",
        "role": "Frontend",
        "level": "Junior",
        "postedAt": "1mo ago",
        "contract": "Part Time",
        "location": "Worldwide",
        "languages": ["JavaScript"],
        "tools": ["React", "Sass"]
      }],
      "bg_header_desktop":"https://d3dyfaf3iutrxo.cloudfront.net/general/upload/7caa466cbd3c4975b9e39ec6700b1656.svg",
      "bg_header_mobile":"https://d3dyfaf3iutrxo.cloudfront.net/general/upload/ba3bba082bbf4cfb9232732eeca4206d.svg",
      "icon_remove":"https://d3dyfaf3iutrxo.cloudfront.net/general/upload/05c800be8f0b4d569e908f1aa949feed.svg"
  }

const orgNode = document.querySelector('.job-card');
const tagNode = document.querySelector('.tag').cloneNode(false);

function updateJSONData() {
    jobData.jobs = jobData.jobs.map(item => {
        item["tags"] = [item.role, item.level, ...item.languages, ...item.tools];
        return item;
    });
}

function updateCard(JData, copyNode) {
    let elements = copyNode.children;
    elements[0].src = JData.logo;
    elements[1].children[0].children[0].innerText = JData.company;
    if (JData.new) {
        elements[1].children[0].children[1].style.visibility = "visible";
        elements[1].children[0].children[1].innerText = "NEW!";
    } else {
        elements[1].children[0].children[1].style.visibility = "hidden";
    }
    if (JData.featured) {
        elements[1].children[0].children[2].style.visibility = "visible";
        elements[1].children[0].children[2].innerText = "FEATURED";
        copyNode.id = "special";
    } else {
        elements[1].children[0].children[2].style.visibility = "hidden";
        copyNode.id = "";
    }
    elements[1].children[1].innerText = JData.position;
    elements[1].children[2].children[0].children[0].innerText = JData.postedAt;
    elements[1].children[2].children[0].children[1].innerText = JData.contract;
    elements[1].children[2].children[0].children[2].innerText = JData.location;
    let count = 5 - JData.tags.length;
    let i = 0;
    let buttons = elements[2].children;
    while (i < count) {
        buttons[i].style.display = "none";
        i++;
    }
    let k = 0;
    while (i < 5) {
        buttons[i].style.display = "block";
        buttons[i].innerText = JData.tags[k];
        i++;
        k++;
    }
    return copyNode;
}

function removeChildren(container) {
    while (container.firstElementChild) {
        container.removeChild(container.firstElementChild);
    }
}

function createCards(jobDataArray) {
    const container = document.querySelector('.container');
    removeChildren(container);
    for (let item of jobDataArray) {
        let copyNode = orgNode.cloneNode(true);
        copyNode = updateCard(item, copyNode);
        container.append(copyNode);
    }
    eventListeners();
}

let filteredArray = [];

function filterContainer(filteredArray) {
    let filteredJobsData = jobData.jobs.filter(item => {
        let temp = filteredArray.filter(i => {
            if (item.tags.find(tag => tag == i)) return true;
            return false;
        });
        return temp.length == filteredArray.length;
    });
    createCards(filteredJobsData);
}

function moveContainerDown() {
    const container = document.querySelector(".container");
    container.style.marginTop = "2vh";
}

function moveContainerUp() {
    const container = document.querySelector(".container");
    container.style.marginTop = "0";
}

function searchBarEventListeners(node) {
    let clearButton = node.lastElementChild;
    clearButton.addEventListener('click', () => {
        filteredArray = [];
        removeChildren(node);
        createCards(jobData.jobs);
        node.style.visibility = "hidden";
        moveContainerUp();
    });
    Array.from(node.children).forEach(item => {
        if (item != clearButton) {
            item.lastElementChild.addEventListener('click', (e) => {
                filteredArray = filteredArray.filter(i => i != e.target.closest('div').firstElementChild.innerText);
                filterContainer(filteredArray);
                if (filteredArray.length == 0) {
                    document.querySelector('#searchBar').style.visibility = "hidden";
                    moveContainerUp();
                } else {
                    createSearchBar(filteredArray);
                }
            });
        }
    });
}

function createSearchBar(filteredArray) {
    moveContainerDown();
    let div = document.querySelector('#searchBar');
    div.style.visibility = "visible";
    removeChildren(div);
    let clearButton = document.createElement('button');
    clearButton.id = "clearButton";
    clearButton.innerText = "Clear";
    for (let item of filteredArray) {
        let innerDiv = document.createElement('div');
        innerDiv.className = "innerDiv";
        let button = document.createElement('button');
        button.innerText = "X";
        button.className = "X";
        let node = tagNode.cloneNode();
        node.style.borderRadius = "10px 0px 0px 10px";
        node.style.height = "38px";
        node.style.margin = "0px";
        node.innerText = item;
        innerDiv.append(node);
        innerDiv.append(button);
        div.append(innerDiv);
    }
    div.append(clearButton);
    searchBarEventListeners(div);
}

function eventListeners() {
    const tags = Array.from(document.querySelectorAll('.tag'));
    tags.forEach(item => {
        item.addEventListener('click', (e) => {
            if (filteredArray.find(i => i == e.target.innerText) == undefined) {
                filteredArray.push(e.target.innerText);
                filterContainer(filteredArray);
                createSearchBar(filteredArray);
            }
        });
    });
}

updateJSONData();

createCards(jobData.jobs);
