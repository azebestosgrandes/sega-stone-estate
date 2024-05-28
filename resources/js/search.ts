
import { Signal } from "signal-polyfill";
import { effect } from "./effect"
import "./components/listing";
import { Listing } from "./components/listing";
import debounce from "lodash/debounce"
import { Options, serialize } from './utils'

let startIndex = 0
const listings = new Signal.State<Listing[]>([])
const previousListings = new Signal.State<Listing[]>([])
const listingContainer = document.querySelector<HTMLElement>("#listingContainer")!
const searchForm = document.querySelector<HTMLFormElement>("#searchForm")!
const showMoreButton = document.querySelector<HTMLButtonElement>("#showMoreButton")!
const noListingFoundIndicator = document.querySelector<HTMLParagraphElement>("#noListingFoundIndicator")!

const mapSortToSortOrder = (sort: string) => {
    const splitted = sort.split('_')
    return {
        sort: splitted[0],
        order: splitted[1]
    }
}

searchForm.addEventListener("submit", async function(e) {
    e.preventDefault()

    const form = new FormData(this)

    let options: Options = {}
    form.forEach((value, key) => {
        options[key] = value as string
    })

    if (options.sort)
        options = {
            ...options,
            ...mapSortToSortOrder(options.sort)
        }

    // hot fix
    const el = document.querySelector<HTMLInputElement>('#navbarSearchForm input[name=searchTerm]')
    if (el) el.value = options.searchTerm ? options.searchTerm : ''

    startIndex = 0
    await setSerializedOptions(options)
})

showMoreButton.addEventListener('click', debounce(async () => {
    const newListings = await fetchListings(getSerializedOptions(), true)
    startIndex += newListings.length
}))

effect(() => {
    const previousListingsLength = previousListings.get().length

    if (previousListingsLength === 0) {
        showMoreButton.classList.add('hidden')
    }
    else {
        showMoreButton.classList.remove('hidden')
    }
})

effect(() => {
    const listingsLength = listings.get().length

    if (listingsLength > 0) {
        noListingFoundIndicator.classList.add('hidden');

        if (listingsLength < 9) {
            showMoreButton.classList.add('hidden')
        }
        else {
            showMoreButton.classList.remove('hidden')
        }
    }
    else {
        noListingFoundIndicator.classList.remove('hidden')
        showMoreButton.classList.add('hidden')
    }
})

effect(() => {
    listingContainer.replaceChildren()
    listingContainer.append(
        ...listings.get()
            .map(listing => {
                const listingEl = document.createElement('ss-listing')
                listingEl.setAttribute("props", JSON.stringify(listing))
                return listingEl as Node
            })
    )
})


const fetchListings = async (options: string, append?: boolean) => {
    const res = await fetch(`/api/listing?${options}`)
    const newListings: Listing[] = await res.json()

    previousListings.set(newListings)

    if (append)
        listings.set(listings.get().concat(newListings))
    else
        listings.set(newListings)

    return newListings
}

const getSerializedOptions = () => {
    const url = new URL(window.location.href)
    const searchParams: Options = {
        startIndex: startIndex.toString()
    }
    url.searchParams.forEach((value, key) => {
        searchParams[key] = value
    })
    return serialize(searchParams)
}

const setSerializedOptions = (options: Options, append?: boolean) => {
    window.history.pushState(null, '', `/search?${serialize(options)}`)
    return fetchListings(getSerializedOptions(), append)
}

const fillInFormFromUrl = () => {
    const url = new URL(window.location.href)

    const arrangement = {
        sort: 'regularPrice',
        order: 'desc'
    }

    url.searchParams.forEach((value, key) => {
        if (key === 'sort' || key == 'order') {
            arrangement[key] = value
            return
        }

        const els = document.querySelectorAll<HTMLInputElement | HTMLSelectElement>(`[name=${key}]`)

        els.forEach(el => {
            if (el.tagName === 'INPUT') {
                if (el.type === 'checkbox') {
                    console.log(el);
                    if (el.getAttribute('name') === key && el.value === value) {

                        (el as HTMLInputElement).checked = true
                    }
                }
                else {
                    el.value = value
                }
            }
            else {
            }
        })
    })

    document.querySelector<HTMLSelectElement>("#sort_order")!.value = `${arrangement.sort}_${arrangement.order}`
}

fetchListings(getSerializedOptions())
fillInFormFromUrl()
