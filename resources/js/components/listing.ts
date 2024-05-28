import { bottom } from "@popperjs/core";

export type Listing = {
    _id: string;
    name: string;
    description: string;
    address: string;
    regularPrice: number;
    discountPrice: number;
    bathrooms: number;
    bedrooms: number;
    furnished: boolean;
    parking: boolean;
    type: "rent" | "sale";
    userRef: string;
    offer: boolean;
    imageUrls: string[];
}

export class ListingComponent extends HTMLElement {
    constructor() { super() }

    connectedCallback() {
        const rawListing = this.getAttribute("props")!
        const listing: Listing = JSON.parse(rawListing)
        const priceFormatter = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
            maximumFractionDigits: 0,
        })
        const formattedPrice = priceFormatter.format(
            listing.discountPrice > 0
                ? listing.discountPrice
                : listing.regularPrice
        )

        this.setAttribute("class", "bg-white flex flex-col gap-4 shadow-md hover:shadow-lg rounded-md overflow-hidden transition-shadow w-full sm:w-[330px] border")

        this.innerHTML = `
            <a class="contents" href="/listing/${listing._id}">
                <img
                    class="h-[320px] sm:h-[220px] w-full object-cover hover:scale-105 transition-scale duration-300 "
                    loading="lazy"
                    src="${listing.imageUrls[0] ?? 'https://img.freepik.com/premium-vector/real-estate-logo-design_260747-324.jpg?w=2000'}"
                />
                <div class="w-full p-3 gap-2 flex flex-col">
                    <p class="font-semibold m-0 text-lg truncate text-slate-700">
                        ${listing.name}
                    </p>
                    <div class="flex items-center gap-1">
                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" class="h-4 w-4 text-green-700" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                            <path fill="none" d="M0 0h24v24H0z"></path>
                            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 010-5 2.5 2.5 0 010 5z"></path>
                        </svg>
                        <p class="text-xs  text-gray-600 truncate">
                            434 Serenity Lane, Meadowville
                        </p>
                    </div>
                    <p class="text-xs text-gray-600 line-clamp-2">
                        ${listing.description}
                    </p>
                    <p class="text-slate-500 mt-2 font-semibold">
                        ${formattedPrice} / month
                    </p>
                    <div class="flex items-center gap-4 text-slate-700">
                        <div class="flex items-center gap-1">
                            <p class="font-bold text-xs">
                                ${listing.bedrooms} Beds
                            </p>
                        </div>
                        <div class="flex items-center gap-1">
                            <p class="font-bold text-xs">
                                ${listing.bathrooms} Baths
                            </p>
                        </div>
                    </div>
                </div>
            </a>
        `
    }
}

export class ListingRowComponent extends HTMLElement {
    constructor() { super() }

    connectedCallback() {
        const rawListing = this.getAttribute("props")!
        const listing: Listing = JSON.parse(rawListing)
        const priceFormatter = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        })
        const bottomContainer = document.createElement("div")
        bottomContainer.setAttribute("class", "flex flex-col items-center")

        const editBtn = document.createElement("a")
        editBtn.setAttribute("href", `/edit-listing/${listing._id}`)
        editBtn.setAttribute("class", "text-green-700 uppercase")
        editBtn.innerText = "Edit"

        const deleteBtn = document.createElement('button')
        deleteBtn.setAttribute('class', 'text-red-700 uppercase')
        deleteBtn.innerText = "Delete"

        bottomContainer.appendChild(deleteBtn)
        bottomContainer.appendChild(editBtn)

        deleteBtn.addEventListener("click", () => {
            this.dispatchEvent(new Event('delete'))
        })

        const template = document.createElement('div')
        template.setAttribute("class", "border rounded-lg p-3 flex items-center justify-between")

        template.innerHTML = `
            <a href="/listing/${listing._id}">
                <img src="${listing.imageUrls[0]}" alt = "listing" class="h-16 w-16 object-contain rounded-lg">
            </a>
            <a class="font-semibold flex-1 ml-2 hover:underline truncate" href="/listing/${listing._id}">
                ${listing.name}
            </a>
        `

        template.appendChild(bottomContainer)

        this.appendChild(template)
    }
}

customElements.define("ss-listing", ListingComponent);
customElements.define("ss-listing-row", ListingRowComponent);
