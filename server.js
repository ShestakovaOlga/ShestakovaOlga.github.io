

export async function sendForm(name, email, message) {
    try {
        const response = await axios.post(URL + '/api/send', {
            name, email, message
        })
        axios.defaults.headers.common.token = response.data.token
        localStorage.setItem('token', response.data.token)
        setGlobal({ user: response.data, loading: false, logged: true })
        return true
    } catch (e) {
        console.error(e)
        setGlobal({ loading: false })
        notification.error({
            message: 'Login error',
            description: e.response.data
        })
        return false
    }
}