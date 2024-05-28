import "./components/listing";
import { Listing } from "./components/listing";
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

new Swiper('.swiper', {
    modules: [Navigation, Pagination],
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

const listings = [
    {
        id: "#recentOffersContainer",
        query: "offer=true",
    },
    {
        id: "#rentListingsContainer",
        query: "type=rent",
    },
    {
        id: "#saleListingContainer",
        query: "type=sale",
    }
]

const updateListingDOM = async (id: string, query: string) => {
    const res = await fetch(`/api/listing?${query}&limit=4&order=asc&sort=createdAt`)

    const listings: Listing[] = await res.json()

    const container = document.querySelector(id)!

    for (const listing of listings) {
        const listingEl = document.createElement('ss-listing')
        listingEl.setAttribute("props", JSON.stringify(listing))
        container.appendChild(listingEl)
    }
}

window.addEventListener("DOMContentLoaded", () => {
    console.log("kfekljflejfljelkjfejflkejljfejkfjejfkejlfjekljfklej")
    for (const { id, query } of listings) {
        updateListingDOM(id, query)
    }
})

console.log("hello cruel world")
