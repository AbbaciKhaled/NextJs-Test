import styled from 'styled-components'

const Title = styled.h1`
    color: ${({ theme }) => theme.colors.primary};
`

function CSSINJS() {
    return <Title>Styled Component</Title>
}

export default CSSINJS