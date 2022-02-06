import Image from 'next/image';
import styles from '../styles/PokemonCard.module.css'

export default function PokemonCard({pokemon}) {
  const type = pokemon.types[0].type.name;
  console.log('type = ', type);
  const typeBackgroundClass = styles[`${type}-gradient-background`];
  const typeClass = styles[`${type}`];
  const typeBorder = styles[`${type}-border`];

  return (
      <figure key={pokemon.name} className={[styles.card, typeBackgroundClass].join(' ')}>
        <div className={styles.cardDetailContainer}>
          <div className={styles.pokeHeading}>
            <h2 className={styles.pokeName}>{pokemon.name}</h2>
            <h3 className={[styles.type, typeClass].join(' ')}>{type}</h3>
          </div>

          <div className={styles.cardImageContainer}>
            <div className={[styles.imageBorder, typeBorder].join(' ')}>
              <Image className={styles.cardImage} src={pokemon.sprites.front_default} alt={`${pokemon.name} default front-facing sprite image`} width={200} height={200} />
            </div>
          </div>
          <table key={`${pokemon.name}-stats`}>
            <tbody>
            {pokemon.stats.map((stats) => {
            return (
              <tr key={`${pokemon.name}-${stats.stat.name}`}>
                <td>
                  <th className={styles.statName}>{stats.stat.name.replace('-', ' ')}</th>
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

      </figure>
    )
}