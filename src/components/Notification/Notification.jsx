import css from './Notification.module.css';

const Notification = ({ message }) => {
  return (
    <div>
      <p className={css.message}>{message}</p>
    </div>
  );
};

export default Notification;
