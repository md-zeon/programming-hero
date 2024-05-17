import PropTypes from 'prop-types';

const Link = ({route}) => {
    const {path, name} = route;
  return (
    <li className="mr-10 px-6 hover:text-rose-800 font-semibold">
      <a href={path}>{name}</a>
    </li>
  );
};

Link.propTypes = {
    route: PropTypes.object.isRequired
}

export default Link;
