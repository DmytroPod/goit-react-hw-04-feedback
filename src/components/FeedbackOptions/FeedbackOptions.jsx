import css from './FeedbackOptions.module.css';

const FeedbackOptions = ({ options, handleClickButton }) => {
  return (
    <ul className={css.list}>
      {options.map(option => (
        <li className={css.item} key={option}>
          <button
            className={css.button}
            type="button"
            name={option}
            onClick={handleClickButton}
          >
            {option}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default FeedbackOptions;
