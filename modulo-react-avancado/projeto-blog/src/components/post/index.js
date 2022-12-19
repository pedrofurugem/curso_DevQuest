import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom' //pegar o parâmetros

import styled, { css } from 'styled-components'
import { Link } from 'react-router-dom'//{Link} component que vem do routes

async function getPost(id) {
    const response = await fetch(`http://localhost:3001/json/post-${id}.json`)
    return await response.json()
}

const PostDetails = () => {
    const [post, setPost] = useState({}) //inicializando com objeto vázio

    const {id} = useParams()

    useEffect(() => {
        async function fetchData() {
            const post = await getPost(id)
            setPost(post.data)
        }

        fetchData()
    }, [id])

    return (
        <Section red>
            <Link to='/'>Voltar para os posts</Link>
            <div>
                <Img src={post.image} alt="{post.title}" />
                <h2>{post.title}</h2>
                <p>{post.title}</p>
            </div>
        </Section>
    )
}

const Section = styled.section`
    background-color: blue;
    ${props => props.red && css `
      background-color: red;
    `}
    padding: 50px;
`

const Img = styled.img`
    width: 50%;
`

export { PostDetails }