import Container from '../common/Container';
import '../../styles/NotFound.scss';

const NotFound = () => {
  return (
    <Container>
      <div className="not-found-page text-center mt-5">
        <h1>404 - Page not found</h1>
        <p>The page you are looking for does not exist.</p>
      </div>
    </Container>
  );
};

export default NotFound;

