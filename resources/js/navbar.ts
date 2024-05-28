import { serialize } from "./utils"

document.querySelector<HTMLFormElement>("#navbarSearchForm")?.addEventListener("submit", function(e) {
    e.preventDefault()

    const options: Record<string, string> = {}

    const formData = new FormData(this)

    formData.forEach((value, key) => {
        options[key] = value as string
    })

    const newUrl = `/search?${serialize(options)}`
    // window.history.pushState(null, '',newUrl)
    window.location.href = newUrl
})
