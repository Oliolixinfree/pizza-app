import React from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import styles from './FullPizza.module.scss';

const FullPizza: React.FC = () => {
  const [pizza, setPizza] = React.useState<{
    imageUrl: string;
    title: string;
    price: number;
    description: string;
  }>();
  const { id } = useParams();
  const navigate = useNavigate();

  React.useEffect(() => {
    async function fetchPizza() {
      try {
        const { data } = await axios.get(`https://62eac9bd705264f263cf1189.mockapi.io/items/${id}`);
        setPizza(data);
      } catch (error) {
        alert('Ошибка при получении пиццы :(');
        console.log(error);
        navigate('/');
      }
    }

    fetchPizza();
  }, []);

  if (!pizza) {
    return <>Загрузка...</>;
  }

  return (
    <div className="container">
      <div className={styles.root}>
        <img src={pizza.imageUrl} />
        <div className={styles.pizzaBlock}>
          <div className={styles.piizzaInfo}>
            <h2>{pizza.title}</h2>
            <p>{pizza.description}</p>
            <h3>{pizza.price} BYN</h3>
          </div>
          <div className={styles.btn}>
            <Link to="/">
              <button className="button button--outline button--add">
                <span>Назад</span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FullPizza;
