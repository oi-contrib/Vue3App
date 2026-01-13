export default function (router) {
    return {
        navigateTo(params) {
            router.push(params.url)
        }
    }
}