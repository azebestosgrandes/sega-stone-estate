import { Signal } from "signal-polyfill"
import { effect } from "./effect"
import "./components/listing";
import { Listing } from "./components/listing"

type User = {
    _id: string
}

const user: User = JSON.parse(window.localStorage.getItem("user") ?? "{}")

let startIndex = 0
const isShowingListings = new Signal.State(false)
const listings = new Signal.State<Listing[]>([])

const showMoreListingsButton = document.querySelector<HTMLButtonElement>("#showMoreListingsButton")!
const toggleListingButton = document.querySelector<HTMLButtonElement>("#toggleListingButton")!
const listingsContainer = document.querySelector<HTMLDivElement>("#listingsContainer")!
const listingsListContainer = listingsContainer.querySelector<HTMLDivElement>("#listingsListContainer")!

effect(() => {
    if (isShowingListings.get()) {
        toggleListingButton.innerText = "Hide listings"
    } else {
        toggleListingButton.innerText = "Show listings"
    }

    listingsContainer.classList.toggle("hidden")
})

effect(() => {
    const availableListings = listings.get()
    listingsListContainer.replaceChildren()

    if (availableListings.length === 0)
        console.log('no listings')
    else
        listingsListContainer.append(
            ...availableListings
                .map(listing => {
                    const listingEl = document.createElement("ss-listing-row")
                    listingEl.setAttribute("props", JSON.stringify(listing))
                    listingEl.addEventListener('delete', () => {
                        deleteListing(listing._id)
                    })
                    return listingEl as Node
                })
        )
})

toggleListingButton.addEventListener("click", () => {
    isShowingListings.set(!isShowingListings.get())
})

showMoreListingsButton.addEventListener("click", () => {
    fetchListings()
})

const deleteListing = async (id: string) => {
    const res = await fetch(`/api/listing/${id}`, {
        method: "DELETE"
    })
    if (res.status === 200)
        listings.set(listings.get().filter(listing => listing._id !== id))
}

const fetchListings = async () => {
    const res = await fetch(`/api/listing?startIndex=${startIndex}&order=asc&sort=createdAt&userRef=${user._id}`)
    const newListings: Listing[] = await res.json()

    listings.set(listings.get().concat(newListings))

    startIndex += newListings.length

    return newListings
}

fetchListings()
