const drag = document.getElementById('drag');
const loader = document.getElementById('loader');
const filePathElement = document.getElementById('filePath');
const filePathText = document.getElementById('filePathText');
const buttonOpenFolder = document.getElementById('buttonOpenFolder');


let currentFileName = '';

let resultStatus = '';

drag.addEventListener('click', async () => {
  loader.classList.remove("hidden");
  const filePath = await window.electronAPI.testFunc();

  console.log(filePath)
  if (filePath) {
    currentFileName = filePath.result;
    filePathText.innerText = filePath.result;
    resultStatus = filePath.status;

    if (resultStatus !== 'error') {
      buttonOpenFolder.classList.remove("hidden");
    }

    if (filePath) {
      filePathElement.classList.remove("hidden");

    }
  }

  loader.classList.add("hidden");
});


buttonOpenFolder.addEventListener('click', async () => {
  await window.electronAPI.openFolderWithFile(currentFileName);

});


// drag n drop Document
document.addEventListener('dragover', (e) => {
  e.stopPropagation();
  e.preventDefault();
  drag.classList.add("active");

});

document.addEventListener('dragleave', (e) => {
  e.stopPropagation();
  e.preventDefault();
  drag.classList.remove("active");
});

// drag n drop Drag block
drag.addEventListener('dragover', (e) => {
  e.stopPropagation();
  e.preventDefault();
});

drag.addEventListener('drop', async (e) => {
  e.stopPropagation();
  e.preventDefault();
  loader.classList.remove("hidden");

  const filePath = await window.electronAPI.testFunc(e.dataTransfer.files[0].name);
  filePathText.innerText = filePath;
  currentFileName = filePath.result;
  filePathText.innerText = filePath.result;
  resultStatus = filePath.status;

  if (resultStatus !== 'error') {
    buttonOpenFolder.classList.remove("hidden");
  }

  if (filePath) {
    filePathElement.classList.remove("hidden");
    loader.classList.add("hidden");
  }
});
