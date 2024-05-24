import Card from "../Card/Card";
import PropTypes from 'prop-types'

function Cards({cards}) {

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 my-20">
        {
            cards.map(card => <Card key={card.id} card={card} />)
        }
    </div>
  )
}

Cards.propTypes = {
  cards: PropTypes.object,
}

export default Cards;