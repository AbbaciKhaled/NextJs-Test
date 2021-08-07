import { useRouter } from 'next/router'

function Docs() {
    const router = useRouter()
    const { params = [] } = router.query
    if (params.length === 2)
        return <h1>Docs for features {params[0]} and concept {params[1]}</h1>
    return 'None'
}

export default Docs