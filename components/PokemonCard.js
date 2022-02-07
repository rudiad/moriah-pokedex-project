import Image from 'next/image';
import styles from '../styles/PokemonCard.module.css'
import typeStyles from '../styles/TypeColors.module.css'

export default function PokemonCard({pokemon}) {
  if(!pokemon) {
    return;
  }
  const type = pokemon && pokemon.types && pokemon.types[0].type.name;
  const typeBackgroundClass = typeStyles[`${type}-gradient-background`];
  const typeClass = typeStyles[`${type}`];
  const typeBorder = typeStyles[`${type}-border`];

  return (
      <figure key={pokemon.name} className={[styles.card, typeBackgroundClass].join(' ')}>
        <div className={styles.cardDetailContainer}>
          <div className={styles.pokeHeading}>
            <h2 className={styles.pokeName}>{pokemon.name}</h2>
            <div className={styles.typeContainer}>
              {pokemon.types?.map((type) => {
                  const typeClass = typeStyles[`${type.type.name}`];
                  return (<h3 key={type.type.name} className={[styles.type, typeClass].join(' ')}>{type.type.name}</h3>)
              })}
            </div>
          </div>

          <div className={styles.cardImageContainer}>
            <div className={[styles.imageBorder, typeBorder].join(' ')}>
              {pokemon.sprites?.front_default && <Image width={200} height={200} className={styles.cardImage} src={pokemon.sprites.front_default} alt={`${pokemon.name} default front-facing sprite image`} />}
            </div>
          </div>
          <table key={`${pokemon.name}-stats`}>
            <tbody>
            {pokemon.stats?.map((stats) => {
            return (
              <tr key={`${pokemon.name}-${stats.stat.name}`}>
                <th className={styles.statName}>{stats.stat.name.replace('-', ' ')}</th>
                <th>{stats.base_stat}</th>
              </tr>
            )
          })} 
          </tbody>
        </table>
        </div>
      </figure>
    )
}