import { Signal } from "signal-polyfill";
import { effect } from "./effect"
import "./components/uploaded-image";
import { Listing } from "./components/listing";

const listing: Listing = JSON.parse(window.sessionStorage.getItem("listing") ?? "{}")

const createListingForm = document.querySelector<HTMLFormElement>("#createListingForm")!
const uploadImagesTrigger = createListingForm.querySelector<HTMLButtonElement>("#uploadImagesTrigger")!
const uploadedImagesContainer = document.querySelector<HTMLDivElement>("#uploadedImagesContainer")!
const imagesToUploadEl = document.querySelector<HTMLInputElement>("#imagesToUploadEl")!
const imageUploadErrorMsgContainer = document.querySelector<HTMLParagraphElement>("#imageUploadErrorMsgContainer")!

const formFields = {
    checkboxes: {
        sale: createListingForm.querySelector<HTMLInputElement>("#sale")!,
        rent: createListingForm.querySelector<HTMLInputElement>("#rent")!,
        offer: createListingForm.querySelector<HTMLInputElement>("#offer")!,
    },
    signals: {
        type: new Signal.State<"rent" | "sale">("rent"),
        offer: new Signal.State(false)
    },
    inputs: {
        description: createListingForm.querySelector<HTMLInputElement>("#description")!,
    },
    containers: {
        discountPrice: createListingForm.querySelector<HTMLInputElement>("#discountPriceContainer")!,
    }
}

formFields.inputs.description.value = listing.description

let imageUrls: string[] = listing.imageUrls
const images = new Signal.State<string[]>(listing.imageUrls);
const imageUploadErrorMsg = new Signal.State("")

effect(() => {
    const errMsg = imageUploadErrorMsg.get()
    imageUploadErrorMsgContainer.innerHTML = errMsg
})

effect(() => {
    switch (formFields.signals.type.get()) {
        case "rent": {
            formFields.checkboxes.sale.checked = false
            formFields.checkboxes.rent.checked = true
            break
        }
        case "sale": {
            formFields.checkboxes.sale.checked = true
            formFields.checkboxes.rent.checked = false
            break
        }
    }
})

effect(() => {
    if (formFields.signals.offer.get()) {
        formFields.checkboxes.offer.checked = true
        formFields.containers.discountPrice.innerHTML = `
            <input type="number" id="discountPrice" name="discountPrice" min="50" max="10000000" required="" class="p-3 border border-gray-300 rounded-lg" value="0">
            <div class="flex flex-col items-center">
                <p>Discounted price</p>
                <span class="text-xs">($ / Month)</span>
            </div>
        `
    }
    else {
        formFields.checkboxes.offer.checked = false
        formFields.containers.discountPrice.innerHTML = ""
    }
})

effect(() => {
    uploadedImagesContainer.replaceChildren()

    const newImageUrls = images.get()
    imageUrls = [...newImageUrls]
    newImageUrls
        .forEach(url => {
            const img = document.createElement("uploaded-image")
            img.setAttribute("url", url)
            img.addEventListener("delete", () => {
                images.set(
                    images.get().filter(_url => url !== _url)
                )
            })
            uploadedImagesContainer.appendChild(img)
        })
})

formFields.checkboxes.sale.addEventListener("click", function() {
    if (this.checked)
        formFields.signals.type.set('sale')
})

formFields.checkboxes.rent.addEventListener("click", function() {
    if (this.checked)
        formFields.signals.type.set('rent')
})

formFields.checkboxes.offer.addEventListener("click", function() {
    formFields.signals.offer.set(this.checked)
})

uploadImagesTrigger.addEventListener("click", async function(e) {
    e.preventDefault()

    this.innerText = "Uploading..."
    this.setAttribute('disabled', 'disabled')

    const form = new FormData()

    if (imagesToUploadEl.files!.length === 0 || imagesToUploadEl.files!.length > 6) {
        imageUploadErrorMsg.set("Total number of images must be less than 7 and at least 1 image must be selected")
        this.innerText = "Upload"
        this.removeAttribute('disabled')
        return
    }

    imageUploadErrorMsg.set("")

    for (const file of imagesToUploadEl.files ?? []) {
        form.append('file[]', file)
    }

    try {
        const res = await fetch("/api/listing/upload", {
            method: "POST",
            body: form
        })

        const json: string[] = await res.json()

        images.set(images.get().concat(json))
    }
    finally {
        this.innerText = "Upload"
        this.removeAttribute('disabled')
    }
})

createListingForm.addEventListener("submit", async function(e) {
    e.preventDefault()

    const name = this.querySelector<HTMLInputElement>("#name")!.value
    const description = this.querySelector<HTMLTextAreaElement>("#description")!.value
    const address = this.querySelector<HTMLInputElement>("#address")!.value
    const type = this.querySelector<HTMLInputElement>("#rent")!.checked ? "rent" : "sale"
    const parking = this.querySelector<HTMLInputElement>("#parking")!.checked
    const furnished = this.querySelector<HTMLInputElement>("#furnished")!.checked
    const offer = this.querySelector<HTMLInputElement>("#offer")!.checked
    const bedrooms = parseInt(this.querySelector<HTMLInputElement>("#bedrooms")!.value)
    const bathrooms = parseInt(this.querySelector<HTMLInputElement>("#bathrooms")!.value)
    const regularPrice = parseInt(this.querySelector<HTMLInputElement>("#regularPrice")!.value)
    let discountPrice = parseInt(this.querySelector<HTMLInputElement>("#discountPrice")?.value ?? "0")

    const res = await fetch(`/api/listing/${listing._id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            type,
            name,
            description,
            bedrooms,
            bathrooms,
            parking,
            furnished,
            address,
            offer,
            regularPrice,
            discountPrice,
            imageUrls,
        })
    })

    if (res.status === 200) {
        const json = await res.json()

        window.location.href = `/listing/${json._id}`
    }
})
