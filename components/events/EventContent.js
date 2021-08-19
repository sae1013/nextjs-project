import classes from './styles/EventContent.module.scss';

function EventContent(props) {
  return <section className={classes.content}>{props.children}</section>;
}

export default EventContent;
