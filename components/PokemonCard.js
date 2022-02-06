import Image from 'next/image';
import styles from '../styles/PokemonCard.module.css'

export default function PokemonCard({pokemon}) {
  return (
      <div key={pokemon.name} className={styles.card}>
        <div className="card-image-container">
          <Image src={pokemon.sprites.front_default} alt={`${pokemon.name} default front-facing sprite image`} width={100} height={100} />
        </div>
        <h2>{pokemon.name}</h2>
        <table key={`${pokemon.name}-stats`}>
          <tbody>
          {pokemon.stats.map((stats) => {
          return (
            <tr key={`${pokemon.name}-${stats.stat.name}`}>
              <td>
                <th>{stats.stat.name}</th>
              </td>
              <td>
                <th>{stats.base_stat}</th>
              </td>
            </tr>
          )
        })} 
          </tbody>
        </table>
      </div>
    )
}