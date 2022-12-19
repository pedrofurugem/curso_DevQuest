import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

//simula o retorno de uma api
async function getPosts() {
    const response = await fetch('http://localhost:3001/json/posts.json')
    return await response.json()
}

const PostsList = () => {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        async function fetchData() {
            const posts = await getPosts()
            setPosts(posts.data)
        }

        fetchData()
    }, [])

    return (
        <Section>
            {posts.map((post, index) => 
                <div key={index}>
                    <Link to={`/post/${post.id}`}>
                        <Img src={post.image} alt="" />
                        <h2>{post.title}</h2>
                    </Link>
                </div>
            )}
        </Section>
    )
}

const Section = styled.section`
    background-color: blue;
    padding: 50px;
`
const Img = styled.img`
    width: 50%;
`

export { PostsList }