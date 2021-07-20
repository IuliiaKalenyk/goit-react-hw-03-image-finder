import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import Loader from 'react-loader-spinner';
import s from './Loader.module.css';

export const GalleryLoader = () => (
  <div className={s.loader}>
    <Loader type="Circles" color="#00BFFF" height={300} width={300} />
  </div>
);

export const ModalLoader = () => (
  <div className={s.loader}>
    <Loader type="Bars" color="#00BFFF" height={200} width={200} />
  </div>
);
