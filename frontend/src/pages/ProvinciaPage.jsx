import { useParams } from 'react-router-dom';
import Cards from '../components/cards';

export default function ProvinciaPage({ events = [], searchText = '', setSearchText }) {
  const { provincia } = useParams();

  if (!provincia) {
    return <div>Provincia non selezionata</div>;
  }

  // Filtro per provincia
  const filteredEvents = events.filter(event =>
    typeof event.provincia === 'string' &&
    event.provincia.toLowerCase() === provincia.toLowerCase()
  );

  // Filtro per testo di ricerca
  const filteredBySearch = filteredEvents.filter(event =>
    typeof event.title === 'string' &&
    event.title.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <div>
      <h2 className="text-center my-4">
        Eventi nella provincia: {provincia}
      </h2>
      <Cards events={filteredBySearch} />
    </div>
  );
}
