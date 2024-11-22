import Link from 'next/link'

export default function Menu() {
    return (
        <nav className='menu'>
            <ul>
                <li> <Link href="/">Home</Link> </li>
                <li> <Link href="/integrantes">Integrantes</Link> </li>
                <li> <Link href="/funcoes/dicas">Dicas</Link> </li>
                <li> <Link href="/funcoes/calculadora">Calculadora</Link> </li>
            </ul>
        </nav>
    )
}