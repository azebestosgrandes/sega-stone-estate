class UploadedImage extends HTMLElement {
    constructor() { super() }

    connectedCallback() {
        const url = this.getAttribute("url");
        const deleteBtn = document.createElement("button")
        deleteBtn.setAttribute("class", "p-3 text-red-700 rounded-lg uppercase hover:opacity-95 disabled:opacity-80")
        deleteBtn.innerText = "Delete"
        deleteBtn.addEventListener("click", () => {
            this.dispatchEvent(new Event("delete"));
        })
        const template = document.createElement('div')
        template.setAttribute("class", "flex justify-between border p-3 items-center")
        template.innerHTML = `
            <img src="${url}" alt="listing" class="w-20 h-20 object-contain rounded-lg">
        `

        template.appendChild(deleteBtn)
        this.appendChild(template)
        // this.attachShadow({ mode: 'open' }).appendChild(template);
    }

}

customElements.define("uploaded-image", UploadedImage);

export { UploadedImage }
