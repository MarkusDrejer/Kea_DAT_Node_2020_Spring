let fileValid = false;

function validateForm() {

    const title = document.forms.videoupload.title.value;
    const description = document.forms.videoupload.description.value;
    const tags = document.forms.videoupload.tags.value;
    const category = document.forms.videoupload.category.value;

    if (title.length < 8 || title.length > 64) {
        return false;
    }

    if (description > 2048) {
        return false;
    }

    return true && fileValid;
}

function handleFileUpload(files) {
    const file = files[0];
    const fileSize = file.size;
    const mimeArray = file.type.split("/");
    const fileType = mimeArray[0];

    if (fileType !== "video") {
        fileValid = false;
        return;
    }

    twoGBFileLimit = 2147483548;

    if (fileSize > twoGBFileLimit) {
        fileValid = false;
        return;
    }
    fileValid = true;
}