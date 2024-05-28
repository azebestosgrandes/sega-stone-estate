import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import debounce from "lodash/debounce"
import { Listing } from './components/listing';
import { serialize } from './utils';

const listing: Listing = JSON.parse(window.sessionStorage.getItem("listing") ?? "{}")

new Swiper('.swiper', {
    modules: [Navigation, Pagination],
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});


const copyLinkTrigger = document.querySelector<HTMLElement>("#copyLinkTrigger")!
const copyLinkTooltip = document.querySelector<HTMLElement>("#copyLinkTooltip")!
const contactLandlordBtn = document.querySelector<HTMLButtonElement>("#contactLandlordBtn")!

const copyToClipboard = (str: string) => {
    if (navigator && navigator.clipboard && navigator.clipboard.writeText)
        return navigator.clipboard.writeText(str);
    return Promise.reject('The Clipboard API is not available.');
};

const createPopper = debounce(async () => {
    copyLinkTooltip.classList.remove("hidden")

    await copyToClipboard(window.location.href)

    setTimeout(() => copyLinkTooltip.classList.add("hidden"), 3000)
})

copyLinkTrigger.addEventListener("click", () => createPopper())

contactLandlordBtn.addEventListener("click", function() {
    this.classList.add("hidden")

    const contactForm = document.createElement("form")
    contactForm.innerHTML = `
        <p>
            Contact
            <span class="font-semibold">code</span>
            for
            <span class="font-semibold">
                ${listing.name}
            </span>
        </p>
    `

    const actualContactForm = document.createElement("form")
    actualContactForm.setAttribute("class", "flex flex-col gap-2")
    actualContactForm.addEventListener("submit", function(e) {
        e.preventDefault()
        const formData = new FormData(this)
        const message = formData.get("message") as string
        const mailRecipient = "info@estate.sega-stone.com"
        const payload = serialize({
            subject: listing.name,
            body: message
        })
        console.log(payload)
        window.open(`mailto:${mailRecipient}?${payload}`)
    })

    actualContactForm.innerHTML = `
        <textarea name="message" id="message" rows="2" placeholder="Enter your message here..."
            class="border w-full p-3 rounded-lg"></textarea>
        <button
            type="submit"
            class="p-3 bg-slate-700 text-white text-center rounded-lg uppercase hover:opacity-95 w-full"
        >
            Send Message
        </button>
    `

    contactForm.appendChild(actualContactForm)
    this.insertAdjacentElement("afterend", contactForm)
})
