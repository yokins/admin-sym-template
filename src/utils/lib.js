export const ls = {
    get(key) {
        try {
            return JSON.parse(localStorage.getItem(key))
        } catch {
            return false;
        }
    }
}