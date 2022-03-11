import './container.scss';
const Container = (props) => {
  return <div className={'col-md-6 offset-md-3 col-10 offset-1'}>
      {props.children}
  </div>;
};

export default Container;